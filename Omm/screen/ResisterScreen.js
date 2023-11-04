import React from "react";
import { useState } from "react";
import { View, TextInput, Text } from "react-native";
import Logo from "../Image/logo.svg";
import { ResisterCss } from "../css/ResisterCss"
import CustomButton from "../Component/CustomButton";

function ResisterScreen({ navigation }) {
    const [ID, onChangeID] = useState("");
    const [PW, onChangePW] = useState("");
    const [Name, onChangeName] = useState("");
    const [Tel, onChangeTel] = useState("");
    const [Email, onChangeEmail] = useState("");
    return (
        <View style={ResisterCss.container}>
            <Logo style={ResisterCss.tinyLogo} />
            <Text style={ResisterCss.Text}>필수</Text>
            <TextInput
                style={ResisterCss.inputID}
                onChangeText={onChangeID}
                value={ID}
                placeholder="아이디"
            />
            <TextInput
                style={ResisterCss.inputID}
                onChangeText={onChangePW}
                value={PW}
                placeholder="비밀번호"
            />
            <TextInput
                style={ResisterCss.inputID}
                onChangeText={onChangeName}
                value={Name}
                placeholder="이름"
            />
            <TextInput
                style={ResisterCss.inputID}
                onChangeText={onChangeTel}
                value={Tel}
                placeholder="전화번호"
            />
            <Text style={ResisterCss.Text}>선택</Text>
            <TextInput
                style={ResisterCss.inputEM}
                onChangeText={onChangeEmail}
                value={Email}
                placeholder="이메일"
            />
            <CustomButton
                buttonColor={'#FF50C3'}
                title={'다음'}
                onPress={() => navigation.navigate("Resister2")}
            />
        </View>
    );
}

export default ResisterScreen;
