import React from "react";
import { useState } from "react";
import { View, TextInput, Text, Image } from "react-native";
import { ResisterCss } from "../css/ResisterCss"
import CustomButton from "../Component/CustomButton";

function ResisterScreen({ navigation }) {

    const [username, onChangeID] = useState("");
    const [password, onChangePW] = useState("");
    const [name, onChangeName] = useState("");
    const [tel, onChangeTel] = useState("");
    const [email, onChangeEmail] = useState("");

    const navigateToResister2 = () => {
        const userData = { username, password, name, tel, email };
        navigation.navigate("Resister2", { userData });
    };

    return (
        <View style={ResisterCss.container}>
            <Image
                source={{ uri: 'http://172.20.10.2:4000/images/logo.png' }}
                style={{
                    width: 150, height: 150, marginBottom: 10, marginTop: 60
                }}
            />
            <Text style={ResisterCss.Text}>필수</Text>
            <TextInput
                style={ResisterCss.inputID}
                onChangeText={onChangeID}
                value={username}
                placeholder="아이디"
            />
            <TextInput
                style={ResisterCss.inputID}
                onChangeText={onChangePW}
                value={password}
                placeholder="비밀번호"
            />
            <TextInput
                style={ResisterCss.inputID}
                onChangeText={onChangeName}
                value={name}
                placeholder="이름"
            />
            <TextInput
                style={ResisterCss.inputID}
                onChangeText={onChangeTel}
                value={tel}
                placeholder="전화번호"
            />
            <Text style={ResisterCss.Text}>선택</Text>
            <TextInput
                style={ResisterCss.inputEM}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="이메일"
            />
            <CustomButton
                buttonColor={'#FF50C3'}
                title={'다음'}
                onPress={navigateToResister2}
            />
        </View>
    );
}

export default ResisterScreen;
