import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";

function HistoryCard({ item }) {

  const date = new Date(item.createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return (
    <View style={ohstyles.card_container}>
      <View style={[ohstyles.__container, { flex: 0.7 }]}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          {item.p_store}
        </Text>
        <Text
          style={{
            fontSize: 16,
            backgroundColor: "#d8d9da",
            borderRadius: 8,
            width: 70,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          {item.p_kind}
        </Text>
        <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 10 }}>
          {year}-{month}-{day} / {hour}:{minutes}
        </Text>
      </View>

      {/*  */}

      <View style={[ohstyles.__container, { flex: 1 }]}>
        <Text>{item.p_ingredient}</Text>
      </View>

      {/*  */}

      <View style={[ohstyles.__container, { flex: 0.4 }]}>
        <Text style={{ fontSize: 20 }}>{item.p_state}</Text>
      </View>
    </View>
  );
}

export default HistoryCard;
