import React, { useEffect, useState } from 'react';
import { Animated, Button, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useContext } from 'react';
import NotifyList from './NotifyList';
import { IPContext } from '../contexts/IPContext';
import io from 'socket.io-client';
import { useCallback } from 'react';
import { NotifyContext } from '../contexts/NotifyContext';
import Toast from 'react-native-toast-message';
import { AuthContext } from '../contexts/AuthContext';

const NotifySection = () => {
    const { myIP } = useContext(IPContext);
    const [notifylists, setNotifyLists] = useState([]);
    const { isUpdate, setIsUpdate } = useContext(NotifyContext);
    const { token } = useContext(AuthContext);

    const notifylistData = useCallback(async () => {
      try {
        const response = await fetch(`http://${myIP}:4000/ordernotify`, {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`, // 로그인한 사용자의 토큰을 header에 포함시킵니다.
          },
        });
        const notifylists = await response.json();
        setNotifyLists(notifylists);
      } catch (error) {
        console.error(error);
      }
    }, [myIP]); // 로그인한 사용자의 토큰을 dependency로 추가합니다.
  
    useEffect(() => {
      notifylistData();
    }, [notifylistData]);
  
    useEffect(() => {
      const socket = io(`http://${myIP}:4000`);
  
      socket.on('notifydbDataChanged', async () => {
        Toast.show({
          type: "success",
          text1: "NEW",
          text2: "새로운 알림이 왔습니다.",
          position:"top",
          bottomOffset: 20,
          visibilityTime:2000,
        });

        setIsUpdate(true);
        await notifylistData();
      });
  
      return () => {
        socket.disconnect();
      };
    }, [myIP, token]);

      return (
        <>
            <Text style={{fontSize:16, textAlign:"center", marginBottom:10, marginTop:10, fontWeight:"bold"}}>알림 창</Text>
            <View style={{width:"90%", height:1, backgroundColor:"#FFD60A", alignSelf:"center"}}></View>
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