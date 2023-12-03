import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";

function HistoryDetailScreen({ route }) {

  const { itemData } = route.params;

  return (
    <ScrollView
      style={ohstyles.detail_container}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <View style={ohstyles.detail__container}>
        <View style={ohstyles.detail_box1}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>{itemData.p_store}</Text>
            <Text
              style={{
                fontSize: 18,
                backgroundColor: "#d8d9da",
                borderRadius: 8,
                width: 70,
                textAlign: "center",
                marginTop: 15,
              }}
            >
              {itemData.p_kind}
            </Text>
            <Text style={{ fontSize: 14, marginTop: 15, marginBottom: 15 }}>
              2023-11-12 / 10:20
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {itemData.p_payment}
            </Text>
            <Text style={{ fontSize: 14, marginTop: 15 }}>
              주문 번호 : 000001
            </Text>
          </View>
          <Text
            style={{
              fontSize: 24,
              width: 100,
              textAlign: "center",
              alignSelf: "center",
              height: "auto",
              letterSpacing: 2,
              borderWidth: 1.5,
              borderColor: "tomato",
              borderRadius: 10,
            }}
          >
            {itemData.p_state}
          </Text>
        </View>

        {/*  */}
        <View style={ohstyles.detail_box2}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            요청 사항
          </Text>
          <Text>
            {itemData.p_request}
          </Text>
        </View>

        {/*  */}

        <View style={[ohstyles.detail_box2, { marginBottom: 20 }]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            재료
          </Text>
          <Text>{itemData.p_ingredient}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default HistoryDetailScreen;
