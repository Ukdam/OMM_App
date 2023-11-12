import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";

function HistoryCard() {
  return (
    <View style={ohstyles.card_container}>
      <View style={[ohstyles.__container, { flex: 0.7 }]}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          원광대점
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
          배달
        </Text>
        <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 10 }}>
          2023-11-12 / 10:20
        </Text>
      </View>

      {/*  */}

      <View style={[ohstyles.__container, { flex: 1 }]}>
        <Text>재료</Text>
      </View>

      {/*  */}

      <View style={[ohstyles.__container, { flex: 0.4 }]}>
        <Text style={{ fontSize: 20 }}>배달 완료</Text>
      </View>
    </View>
  );
}

export default HistoryCard;
