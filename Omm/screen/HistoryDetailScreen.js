import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ohstyles } from "../css/OrderHistoryCss";

function HistoryDetailScreen() {
  return (
    <ScrollView
      style={ohstyles.detail_container}
      contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
    >
      <View style={ohstyles.detail__container}>
        <View style={ohstyles.detail_box1}>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold" }}>원광대점</Text>
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
              배달
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
              카드 결제
            </Text>
            <Text style={{ fontSize: 14, marginTop: 15 }}>
              주문 번호 : 000001
            </Text>
          </View>
          <Text
            style={{
              fontSize: 24,
              width: 70,
              textAlign: "center",
              alignSelf: "center",
              height: "auto",
              letterSpacing: 2,
              borderWidth: 1.5,
              borderColor: "tomato",
              borderRadius: 10,
            }}
          >
            배달 완료
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
            문 앞에 놓고 문자주세요. 도착 후 전화주시면 직접 받으러 갈게요.
            일회용 수저, 포크가 필요해요.
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
          <Text>재료재료재료재료재료재료재료재료재료재료재료</Text>
          <Text>재료재료재료재료재료재료재료재료재료재료재료</Text>
          <Text>재료재료재료재료재료재료재료재료재료재료재료</Text>
          <Text>재료재료재료재료재료재료재료재료재료재료재료</Text>
          <Text>재료재료재료재료재료재료재료재료재료재료재료</Text>
          <Text>재료재료재료재료재료재료재료재료재료재료재료</Text>
          <Text>재료재료재료재료재료재료재료재료재료재료재료</Text>
          <Text>재료재료재료재료재료재료재료재료재료재료재료</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default HistoryDetailScreen;
