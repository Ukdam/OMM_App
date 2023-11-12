import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";
import HistoryCard from "../Component/HistoryCard";

function OrderHistoryScreen({ navigation }) {
  return (
    <ScrollView
      style={ohstyles.main_container}
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      {/*  */}
      <View style={ohstyles.card_list}>
        <Text style={ohstyles.date_txt}>11/12 (일)</Text>
        <TouchableOpacity onPress={() => navigation.push("주문 상세")}>
          <HistoryCard />
        </TouchableOpacity>
      </View>
      {/*  */}
      <View style={ohstyles.card_list}>
        <Text style={ohstyles.date_txt}>11/11 (토)</Text>
        <TouchableOpacity onPress={() => navigation.push("주문 상세")}>
          <HistoryCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("주문 상세")}>
          <HistoryCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("주문 상세")}>
          <HistoryCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("주문 상세")}>
          <HistoryCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("주문 상세")}>
          <HistoryCard />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("주문 상세")}>
          <HistoryCard />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default OrderHistoryScreen;
