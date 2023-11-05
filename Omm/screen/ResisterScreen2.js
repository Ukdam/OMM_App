import { ResisterCss2 } from "../css/ResisterCss2";
import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Logo from "../Image/logo.svg";
import CustomButton from "../Component/CustomButton";

function ResisterScreen2({ route, navigation }) {
    const [Address, setAdress] = useState("");
    return (
        <View style={ResisterCss2.container}>
            <Logo style={ResisterCss2.tinyLogo} />
            <View style={ResisterCss2.container2}>
                <View style={ResisterCss2.number_text}>
                    <Text style={ResisterCss2.text}>{route.params?.zonecode}</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={ResisterCss2.btn}
                    onPress={() => navigation.navigate('주소찾기')}>
                    <Text style={ResisterCss2.btn_text}>우편번호 찾기</Text>
                </TouchableOpacity>
            </View>

            <View style={ResisterCss2.address_text}>
                <Text style={ResisterCss2.text}>{route.params?.address + ' ' + route.params?.defaultAddress}</Text>
            </View>
            <TextInput style={ResisterCss2.textInput}
                placeholder="상세 주소를 입력하세요"
                value={Address}
                onChange={setAdress}
            />
            <CustomButton
                buttonColor={'#FF50C3'}
                title={'다음'}
                onPress={() => navigation.navigate("Resister3")}
            />
        </View>
    );
}

export default ResisterScreen2;
