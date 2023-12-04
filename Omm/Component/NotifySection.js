import React, { useEffect, useState } from 'react';
import { Animated, Button, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useContext } from 'react';
import NotifyList from './NotifyList';
import { IPContext } from '../contexts/IPContext';
import io from 'socket.io-client';
import { useCallback } from 'react';
import { NotifyContext } from '../contexts/NotifyContext';

const NotifySection = () => {
    const { myIP } = useContext(IPContext);
    const [notifylists, setNotifyLists] = useState([]);
    const { isUpdate, setIsUpdate } = useContext(NotifyContext);

    const notifylistData = useCallback(async () => {
        try {
          const response = await fetch(`http://${myIP}:4000/ordernotify`, {
            credentials: "include",
          });
          const notifylists = await response.json();
          setNotifyLists(notifylists);
        } catch (error) {
          console.error(error);
        }
      }, [myIP]);
    
      useEffect(() => {
        notifylistData();
      }, [notifylistData]);
    
      useEffect(() => {
        const socket = io(`ws://${myIP}:4000`);
    
        socket.on('notifydbDataChanged', () => {
            setIsUpdate(true);
          notifylistData();
        });
    
        return () => {
          socket.disconnect();
        };
      }, [myIP, notifylistData]);

      return (
        <>
            <Text style={{fontSize:16, textAlign:"center", marginBottom:10, marginTop:10}}>알림 창</Text>
                <ScrollView contentContainerStyle={{ width:"90%", alignSelf:"center",}}>
                {notifylists.length > 0 &&
                      notifylists.map((notifylist) => (
                        <NotifyList 
                        title={notifylist.n_state}
                        store={notifylist.n_store}
                        description={notifylist.n_eta}
                        img={notifylist.n_state}
                        key={notifylist._id} />
                      ))}
            </ScrollView>

    </>
      );
    };
    
    export default NotifySection;