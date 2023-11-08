import React, { useState } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { pstyles } from "../css/PaymentDCss";
import JangBtnPay from "../Component/JangBtnPay";
import { CheckBox } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";

function PaymentScreen_P() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [radioIndex, setRadioIndex] = useState(0);

  // select
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [selectItems, setSelectItems] = useState([
    { label: "요청사항을 선택해주세요.", value: null },
    { label: "직접 입력", value: "직접 입력" },
  ]);

  // textarea
  const [textAValue, setTextAValue] = useState("");
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
          <Text style={{ fontSize: 12, opacity: 0 }}>포장 (30분)</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>원광대점</Text>
          <Text style={{ fontSize: 12, top: 10, marginLeft: 10 }}>
            포장 (30분)
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
          <Text style={{ fontSize: 12 }}>1층</Text>
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

        {/* 
          요청사항 
        */}

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
            <CheckBox
              checked={check1}
              onPress={() => setCheck1(!check1)}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              title="기본 반찬 주지 마세요"
            />
            <CheckBox
              checked={check2}
              onPress={() => setCheck2(!check2)}
              iconType="material-community"
              checkedIcon="checkbox-marked"
              uncheckedIcon="checkbox-blank-outline"
              title="일회용 수저, 포크가 필요해요"
            />
          </View>
          <View
            style={[
              pstyles.reqeust_selectbox,
              { height: selectOpen || selectValue === "직접 입력" ? 150 : 60 },
              // { height: selectValue === "직접 입력" ? 200 : 60 },
            ]}
          >
            <DropDownPicker
              open={selectOpen}
              value={selectValue}
              items={selectItems}
              setOpen={setSelectOpen}
              setValue={setSelectValue}
              setItems={setSelectItems}
              placeholder="요청 사항을 선택해주세요"
              dropDownContainerStyle={{
                borderColor: "#d8d9da",
                borderWidth: 2,
              }}
              style={{ borderColor: "#d8d9da", borderWidth: 2 }}
            />
            {selectValue === "직접 입력" ? (
              <>
                <TextInput
                  editable
                  multiline
                  numberOfLines={4}
                  maxLength={40}
                  onChangeText={(text) => setTextAValue(text)}
                  value={textAValue}
                  style={{
                    borderColor: "#d8d9da",
                    borderWidth: 2,
                    width: "100%",
                    padding: 5,
                    marginTop: 15,
                    borderRadius: 10,
                  }}
                  placeholder="직접 입력"
                />
                <Text
                  style={{
                    alignSelf: "flex-end",
                    color: "#61677a",
                    marginTop: 5,
                  }}
                >
                  {textAValue.length} / 40
                </Text>
              </>
            ) : null}
          </View>
        </View>
        {/* 결제수단 */}
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
            <CheckBox
              checked={radioIndex === 0}
              onPress={() => setRadioIndex(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="신용 카드"
            />
            <CheckBox
              checked={radioIndex === 1}
              onPress={() => setRadioIndex(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="현장 결제"
            />
          </View>
        </View>
        <View style={pstyles.amount_container}>
          <View style={pstyles.amount_contentbox}>
            <View style={pstyles.amount_contentflex}>
              <Text>상품 금액</Text>
              <Text>0 원</Text>
            </View>
            {/* <View style={pstyles.amount_contentflex}>
              <Text>추가 금액</Text>
              <Text>0 원</Text>
            </View>
            <View style={pstyles.amount_contentflex}>
              <Text>배달 요금</Text>
              <Text>0 원</Text>
            </View> */}
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

export default PaymentScreen_P;
