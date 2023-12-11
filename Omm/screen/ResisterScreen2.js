import { ResisterCss2 } from "../css/ResisterCss2";
import React, { useContext } from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import CustomButton from "../Component/CustomButton";
import { IPContext } from "../contexts/IPContext";

function ResisterScreen2({ route, navigation }) {
  const { myIP } = useContext(IPContext);
  const [sideadress, setAdress] = useState("");

  const mainadress = `${route.params?.address} ${route.params?.defaultAddress}`;

  const { userData } = route.params;
  const { username, password, name, tel, email } = userData;

  const navigateToResister3 = () => {
    const userData2 = {
      username,
      password,
      name,
      tel,
      email,
      mainadress,
      sideadress,
    };
    navigation.navigate("Resister3", { userData2 });
  };

  return (
    <View style={ResisterCss2.container}>
      <Image
        source={{ uri: `http://${myIP}:4000/images/logo.png` }}
        style={{
          width: 150,
          height: 150,
          marginBottom: 10,
          marginTop: 60,
        }}
      />
      <View style={ResisterCss2.container2}>
        <View style={ResisterCss2.number_text}>
          <Text style={ResisterCss2.text}>{route.params?.zonecode}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={ResisterCss2.btn}
          onPress={() => navigation.push("주소찾기")}
        >
          <Text style={ResisterCss2.btn_text}>우편번호 찾기</Text>
        </TouchableOpacity>
      </View>

      <View style={ResisterCss2.address_text}>
        <Text style={ResisterCss2.text}>
          {route.params?.address + " " + route.params?.defaultAddress}
        </Text>
      </View>
      <TextInput
        style={ResisterCss2.textInput}
        placeholder="상세 주소를 입력하세요"
        value={sideadress}
        onChangeText={setAdress}
      />
      <CustomButton
        buttonColor={"#FF50C3"}
        title={"다음"}
        onPress={navigateToResister3}
      />
    </View>
  );
}

export default ResisterScreen2;
