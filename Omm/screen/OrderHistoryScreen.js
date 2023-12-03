import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";
import HistoryCard from "../Component/HistoryCard";
import { IPContext } from "../contexts/IPContext";

function OrderHistoryScreen({ navigation }) {

  const { myIP } = useContext(IPContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://${myIP}:4000/HistoryDetail`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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
