import React, { useContext, useEffect } from "react";
import { View, TextInput, Alert } from "react-native";
import { LoginCss } from "../css/LoginCss";
import { useState } from "react";
import Logo from "../Image/logo.svg";
import CustomButton from "../Component/CustomButton";
import { UserContext } from "../contexts/UserContext";

function LoginScreen({ navigation }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  async function login(e) {
    e.preventDefault();
    let response;

    try {
      response = await fetch("http://192.168.35.2:4000/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
    } catch (err) {
      console.log("err", err);
    }

    if (response && response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      Alert.alert("로그인 실패");
    }
  }

  if (redirect) {
    navigation.navigate("Main");
    return null;
  }

  return (
    <View style={LoginCss.container}>
      <Logo style={LoginCss.tinyLogo} />
      <TextInput
        style={LoginCss.inputID}
        onChangeText={setUserName}
        value={username}
        placeholder="아이디"
      />
      <TextInput
        style={LoginCss.inputPW}
        onChangeText={setPassword}
        value={password}
        placeholder="패스워드"
        secureTextEntry={true}
      />
      <CustomButton buttonColor={"#FFCE50"} title={"로그인"} onPress={login} />
      <CustomButton
        buttonColor={"#FF50C3"}
        title={"회원가입"}
        onPress={() => navigation.navigate("Resister")}
      />
    </View>
  );
}

export default LoginScreen;
