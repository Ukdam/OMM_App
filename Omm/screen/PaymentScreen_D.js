import React from "react";
import { View, Text, ScrollView, SafeAreaView, Button } from "react-native";
import { pstyles } from "../css/PaymentDCss";
import JangBtnPay from "../Component/JangBtnPay";

function PaymentScreen_D() {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <View style={pstyles.title_container}>
          <Text style={{ fontSize: 12, opacity: 0 }}>배달 (30분)</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>원광대점</Text>
          <Text style={{ fontSize: 12, top: 10, marginLeft: 10 }}>
            배달 (30분)
          </Text>
        </View>
        <View style={pstyles.adress_container}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textDecorationLine: "underline",
            }}
          >
            익산대로 11번길 14
          </Text>
          <Text style={{ fontSize: 12 }}>101동 101호</Text>
        </View>
        <View style={pstyles.cart_container}>
          <View style={pstyles.cart_menubox}>
            <Text>메뉴</Text>
          </View>
          <View style={pstyles.cart_addmenu}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#3182ce",
              }}
            >
              메뉴 추가하기
            </Text>
          </View>
        </View>
        <View style={pstyles.reqeust_container}>
          <View style={pstyles.reqeust_titlebox}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              요청 사항
            </Text>
          </View>
          <View style={pstyles.reqeust_checkbox}>
            <Text>문 앞에 놓고 문자주세요</Text>
            <Text>일회용 수저, 포크가 필요해요</Text>
          </View>
          <View style={pstyles.reqeust_selectbox}>
            <Text>요청 사항을 선택해주세요</Text>
          </View>
        </View>
        <View style={pstyles.payment_container}>
          <View style={pstyles.payment_titlebox}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              결제 수단
            </Text>
          </View>
          <View style={pstyles.payment_checkbox}>
            <Text>신용 카드</Text>
            <Text>현장 결제</Text>
          </View>
        </View>
        <View style={pstyles.amount_container}>
          <View style={pstyles.amount_contentbox}>
            <View style={pstyles.amount_contentflex}>
              <Text>상품 금액</Text>
              <Text>0 원</Text>
            </View>
            <View style={pstyles.amount_contentflex}>
              <Text>추가 금액</Text>
              <Text>0 원</Text>
            </View>
            <View style={pstyles.amount_contentflex}>
              <Text>배달 요금</Text>
              <Text>0 원</Text>
            </View>
          </View>
          <View style={pstyles.amount_amoutbox}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              총 결제금액
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              0 원
            </Text>
          </View>
        </View>
        <View style={pstyles.blank}></View>
      </ScrollView>
      <View style={pstyles.btn_container}>
        <JangBtnPay title={"결제 하기"} />
      </View>
    </>
  );
}

export default PaymentScreen_D;
