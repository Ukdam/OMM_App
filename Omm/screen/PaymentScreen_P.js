import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { pstyles } from "../css/PaymentDCss";
import JangBtnPay from "../Component/JangBtnPay";
import { CheckBox } from "@rneui/themed";
import DropDownPicker from "react-native-dropdown-picker";
import { UserContext } from "../contexts/UserContext";
import { ProductContext } from "../contexts/ProductContext";
import { useEffect } from "react";
import { IPContext } from "../contexts/IPContext";
import Toast from "react-native-toast-message";

function PaymentScreen_P() {

  const { myIP } = useContext(IPContext);
  // 메뉴 재료 정보
  const { productInfo } = useContext(ProductContext);
  const [productList, setProductList] = useState("");
  const [addPrice, setAddPrice] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    const list = Object.values(productInfo).reduce((list, products) => {
      const productStr = products
        .map((product) => `${product.ProductName} x ${product.count}`)
        .join(", ");
      return list ? `${list}, ${productStr}` : productStr;
    }, "");

    setProductList(list);

    const total = Object.values(productInfo).reduce((total, products) => {
      return (
        total +
        products.reduce(
          (total, product) => total + product.Price * product.count,
          0
        )
      );
    }, 0);
    setGrandTotal(total);
  }, [productInfo]);

  useEffect(() => {
    const additionalPrice = grandTotal < 12000 ? 12000 - grandTotal : 0;
    setAddPrice(additionalPrice);
  }, [grandTotal]);
  // 회원 정보
  const { setUserInfo, userInfo } = useContext(UserContext);

  const mainadress = userInfo?.mainadress;
  const sideadress = userInfo?.sideadress;

  const userId = userInfo?.id;


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

  const p_store = "원광대점";
  const p_kind = "포장";
  const p_quantity = 1;
  const p_price = grandTotal + 2000 + addPrice;
  const p_adress = mainadress + " " + sideadress;
  const p_ingredient = productList;

  async function Payment(e) {
    e.preventDefault();
    let response;

    const requsetToSave = [];
    if (check1) {
      requsetToSave.push("문 앞에 놓고 문자주세요");
    }
    if (check2) {
      requsetToSave.push("일회용 수저, 포크가 필요해요");
    }
    if (!selectValue === "직접 입력") {
      requsetToSave.push(selectItems);
    } else {
      requsetToSave.push(textAValue);
    }

    const p_request = requsetToSave.join("_");

    let p_payment;
    switch (radioIndex) {
      case 0:
        p_payment = "카드 결제";
        break;
      case 1:
        p_payment = "현장 결제";
        break;
    }

    const p_userId = userId;

    try {
      response = await fetch(`http://${myIP}:4000/payment`, {
        method: "POST",
        body: JSON.stringify({
          p_store,
          p_kind,
          p_quantity,
          p_price,
          p_adress,
          p_request,
          p_ingredient,
          p_payment,
          p_state: "미 접수",
          p_userId,
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
    } catch (err) {
      console.log("err", err);
    }

    if (response && response.ok) {
      Toast.show({
        type: "success",
        text1: "결제 성공",
        position: "top",
        bottomOffset: 20,
        visibilityTime: 2000,
      });
      navigation.navigate('Main');
    } else {
      Toast.show({
                  type: "error",
                  text1: "결제 실패",
                  position: "top",
                  bottomOffset: 20,
                  visibilityTime: 2000,
                });
    }
  }

  //카트 영역에서 카테고리가 json에 영어로 저장되어 있어서 번역
  function translateCategory(category) {
    switch (category) {
      case 'vegetable':
        return '야채';
      case 'meat':
        return '고기';
      case 'rice':
        return '밥/면';
      case 'sauce':
        return '소스';
      case 'etc':
        return '추가';
      default:
        return category;
    }
  }

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
            <Text style={{width:"100%", fontSize:18, fontWeight:"bold", height:50, lineHeight:40, marginBottom:10}}>메뉴</Text>
            {Object.entries(productInfo).map(([category, products]) => {
              const totalPrice = products.reduce(
                (total, product) => total + product.Price * product.count,
                0
              );
              return (
                <View key={category} style={pstyles.cart_menulayout}>
                  <Text style={pstyles.cart_categoryText}>{translateCategory(category)}</Text>
                  <View style={pstyles.__cart_menulayout}>
                  {products.map((product, index) => (
                    <View key={index} style={pstyles.__cart_text}>
                      <Text style={{fontSize:16,fontWeight:"bold"}}>{`${product.ProductName}`}</Text>
                      <Text style={{alignSelf:"flex-end"}}>{` x${product.count}`}</Text>
                    </View>
                  ))}
                </View>
                  </View>
                  
              );
            })}
            <Text style={{textAlign:"right", width:"100%",height:30}}>{`총 가격: ${grandTotal}`}</Text>
          </View>
          <View style={pstyles.cart_addmenu}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
                color: "#3182ce",
              }}
            >
              메뉴 변경하기
            </Text>
            </TouchableOpacity>
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
              { height: selectOpen || selectValue === "직접 입력" ? 200 : 60 },
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
              listMode="SCROLLVIEW"
              dropDownDirection="BOTTOM"
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
              <Text>{grandTotal} 원</Text>
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
              {grandTotal + 0 + addPrice} 원
            </Text>
          </View>
        </View>
        <View style={pstyles.blank}></View>
      </ScrollView>
      <View style={pstyles.btn_container}>
        <JangBtnPay title={"결제 하기"} onPress={Payment}/>
      </View>
    </>
  );
}

export default PaymentScreen_P;
