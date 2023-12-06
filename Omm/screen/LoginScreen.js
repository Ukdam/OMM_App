import React, { useContext, useEffect } from "react";
import { View, TextInput, Alert, Image } from "react-native";
import { LoginCss } from "../css/LoginCss";
import { useState } from "react";
import CustomButton from "../Component/CustomButton";
import { UserContext } from "../contexts/UserContext";
import { Input } from "react-native-elements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { IPContext } from "../contexts/IPContext";
import { AuthContext } from "../contexts/AuthContext";

function LoginScreen({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);
  const { myIP } = useContext(IPContext);
  const { setToken } = useContext(AuthContext);

  async function login(e) {
    e.preventDefault();
    let response;


    try {
      response = await fetch(`http://${myIP}:4000/login`, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json", },
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status); 
      }
    } catch (err) {
      console.log("err", err);
    }

    if (response && response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setToken(userInfo.token);
        setRedirect(true);
      });
    } else {
      Alert.alert("로그인 실패");
    }
  }

  useEffect(() => {
    if (redirect) {
      navigation.navigate("Main");
    }
  }, [redirect]);

  return (
    <View style={LoginCss.container}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={Platform.OS === "ios"}
        resetScrollToCoords={{ x: 0, y: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1.2, alignItems: "center" }}>
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

        <View style={LoginCss.loginView01}>
          <View style={LoginCss.loginView02}>
            <FontAwesomeIcon icon={["fas", "user"]} size={20} color="gray" />
          </View>

          <TextInput
            style={LoginCss.inputID}
            onChangeText={setUserName}
            value={username}
            placeholder="아이디"
          />
        </View>

        <View style={LoginCss.loginView01}>
          <View style={LoginCss.loginView02}>
            <FontAwesomeIcon icon={["fas", "lock"]} size={20} color="gray" />
          </View>
          <TextInput
            style={LoginCss.inputPW}
            onChangeText={setPassword}
            value={password}
            placeholder="패스워드"
            secureTextEntry={true}
          />
        </View>

        <View style={{ flex: 1.5, marginTop: 60 }}>
          <CustomButton
            buttonColor={"#FFCE50"}
            title={"로그인"}
            onPress={login}
          />
          <CustomButton
            buttonColor={"#FF50C3"}
            title={"회원가입"}
            onPress={() => navigation.navigate("Resister")}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default LoginScreen;
