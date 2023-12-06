import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";
import HistoryCard from "../Component/HistoryCard";
import { IPContext } from "../contexts/IPContext";
import { AuthContext } from "../contexts/AuthContext";
import { io } from "socket.io-client";
import { useCallback } from "react";

function OrderHistoryScreen({ navigation }) {

  const { myIP } = useContext(IPContext);
  const [data, setData] = useState([]);

  const { token } = useContext(AuthContext); 

// useEffect(() => {
//   fetch(`http://${myIP}:4000/HistoryDetail`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => setData(data));
// }, []);

const paymentHistoryData = useCallback(async () => {
  try {
    const response = await fetch(`http://${myIP}:4000/HistoryDetail`, {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`, // 로그인한 사용자의 토큰을 header에 포함시킵니다.
      },
    });
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.error(error);
  }
}, [myIP]);

useEffect(() => {
  paymentHistoryData();
}, [paymentHistoryData]);

useEffect(() => {
  const socket = io(`http://${myIP}:4000`);

  socket.on('paymentDataChanged', async () => {
    await paymentHistoryData();
  });

  return () => {
    socket.disconnect();
  };
}, [myIP, token]);


  return (
    <ScrollView
      style={ohstyles.main_container}
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      {data.map((item) => {
        const date = new Date(item.createdAt);
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
        const day = date.getDate();
        const week = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]; // 요일을 가져옵니다.
        return (
          <View style={ohstyles.card_list} key={item._id}>
            <Text style={ohstyles.date_txt}>{month}/{day} ({week})</Text>
            <TouchableOpacity onPress={() => navigation.push("주문 상세", { itemData: item })}>
              <HistoryCard item={item} />
            </TouchableOpacity>
          </View>
        )
      })}
    </ScrollView>
  );
}

export default OrderHistoryScreen;
