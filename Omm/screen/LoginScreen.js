import React from "react";
import { View, TextInput } from "react-native";
import { LoginCss } from "../css/LoginCss";
import { useState } from "react";
import Logo from "../Image/logo.svg";
import CustomButton from "../Component/CustomButton";

function LoginScreen({ navigation }) {
    const [IDtext, onChangeIDText] = useState("");
    const [PWtext, onChangePWText] = useState("");

    return (
        <View style={LoginCss.container}>
            <Logo style={LoginCss.tinyLogo} />
            <TextInput
                style={LoginCss.inputID}
                onChangeText={onChangeIDText}
                value={IDtext}
                placeholder="아이디"
            />
            <TextInput
                style={LoginCss.inputPW}
                onChangeText={onChangePWText}
                value={PWtext}
                placeholder="페스워드"
                secureTextEntry={true}
            />
            <CustomButton
                buttonColor={'#FFCE50'}
                title={'로그인'}
            />
            <CustomButton
                buttonColor={'#FF50C3'}
                title={'회원가입'}
                onPress={() => navigation.navigate("Resister")}
            />
        </View>
    );
}

export default LoginScreen;
