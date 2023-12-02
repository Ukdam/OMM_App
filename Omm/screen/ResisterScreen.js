import React from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { ResisterCss } from "../css/ResisterCss";
import CustomButton from "../Component/CustomButton";
import { useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IPContext } from "../contexts/IPContext";

function ResisterScreen({ navigation }) {
  const { myIP } = useContext(IPContext);

  const [username, onChangeID] = useState("");
  const [password, onChangePW] = useState("");
  const [name, onChangeName] = useState("");
  const [tel, onChangeTel] = useState("");
  const [email, onChangeEmail] = useState("");

  const navigateToResister2 = () => {
    const userData = { username, password, name, tel, email };
    navigation.navigate("Resister2", { userData });
  };

  const onChangePhoneNumber = (text) => {
    let cleaned = ("" + text).replace(/\D/g, "");
    let match = cleaned.match(/^(1|)?(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      let intlCode = match[1] ? "+1 " : "",
        number = [intlCode, match[2], "-", match[3], "-", match[4]].join("");

      onChangeTel(number);
      return;
    }

    onChangeTel(text);
  };

  return (
    <View style={ResisterCss.container}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === "ios"}
        resetScrollToCoords={{ x: 0, y: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: `http://${myIP}:4000/images/logo.png` }}
            style={{
              width: 150,
              height: 150,
              marginBottom: 10,
              marginTop: 60,
            }}
          />
        </View>
        <Text style={ResisterCss.Text}>필수</Text>

        <View style={ResisterCss.inputView01}>
          <View style={ResisterCss.inputView02}>
            <FontAwesomeIcon icon={["fas", "user"]} size={20} color="gray" />
          </View>
          <TextInput
            style={ResisterCss.inputID}
            onChangeText={onChangeID}
            value={username}
            placeholder="아이디"
          />
        </View>

        <View style={ResisterCss.inputView01}>
          <View style={ResisterCss.inputView02}>
            <FontAwesomeIcon icon={["fas", "lock"]} size={20} color="gray" />
          </View>
          <TextInput
            style={ResisterCss.inputID}
            onChangeText={onChangePW}
            value={password}
            placeholder="비밀번호"
            secureTextEntry
          />
        </View>

        <View style={ResisterCss.inputView01}>
          <View style={ResisterCss.inputView02}>
            <FontAwesomeIcon icon={["fas", "user"]} size={20} color="gray" />
          </View>
          <TextInput
            style={ResisterCss.inputID}
            onChangeText={onChangeName}
            value={name}
            placeholder="이름"
          />
        </View>

        <View style={ResisterCss.inputView01}>
          <View style={ResisterCss.inputView02}>
            <FontAwesomeIcon icon={["fas", "mobile"]} size={20} color="gray" />
          </View>
          <TextInput
            style={ResisterCss.inputID}
            onChangeText={(text) => onChangePhoneNumber(text)}
            value={tel}
            placeholder="전화번호"
            keyboardType="numeric"
          />
        </View>

        <Text style={ResisterCss.Text}>선택</Text>

        <View style={ResisterCss.inputView01}>
          <View style={ResisterCss.inputView02}>
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              size={20}
              color="gray"
            />
          </View>
          <TextInput
            style={ResisterCss.inputEM}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="이메일"
            keyboardType="email-address"
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <CustomButton
            buttonColor={"#FF50C3"}
            title={"다음"}
            onPress={navigateToResister2}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default ResisterScreen;
