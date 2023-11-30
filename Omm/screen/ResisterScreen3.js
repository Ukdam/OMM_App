import { ResisterCss3 } from "../css/ResisterCss3";
import {
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import Checkbox from "expo-checkbox";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import CustomButton from "../Component/CustomButton";
import { UserContext } from "../contexts/UserContext";

function ResisterScreen3({ route, navigation }) {
  const [Check1, setCheck1] = useState(false);
  const [Check2, setCheck2] = useState(false);
  const [Check3, setCheck3] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const { userData2 } = route.params;
  const { username, password, name, tel, email, mainadress, sideadress } =
    userData2;

  async function Resister(e) {
    e.preventDefault();
    let response;

    try {
      response = await fetch("http://172.20.10.2:4000/register", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          name,
          tel,
          email,
          mainadress,
          sideadress,
          Check1,
          Check2,
          Check3,
        }),
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
      Alert.alert("회원가입 실패");
    }
  }

  useEffect(() => {
    if (redirect) {
      navigation.navigate("Login");
    }
  }, [redirect]); // redirect 상태가 변경될 때에만 실행

  return (
    <View style={ResisterCss3.container}>
      <Image
        source={{ uri: "http://172.20.10.2:4000/images/logo.png" }}
        style={{
          width: 150,
          height: 150,
          marginBottom: 10,
          marginTop: 60,
        }}
      />
      <View>
        <Collapse>
          <CollapseHeader>
            <View style={ResisterCss3.CollHeaderStyle}>
              <Checkbox
                style={ResisterCss3.CollHeaderStyleCheck}
                value={Check1}
                onValueChange={setCheck1}
              />
              <Text style={ResisterCss3.CollHeaderStyleText}>약관동의</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={ResisterCss3.CollBodyStyle}>
              <Text>약관 내용</Text>
            </View>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader>
            <View style={ResisterCss3.CollHeaderStyle}>
              <Checkbox
                style={ResisterCss3.CollHeaderStyleCheck}
                value={Check2}
                onValueChange={setCheck2}
              />
              <Text style={ResisterCss3.CollHeaderStyleText}>약관동의</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={ResisterCss3.CollBodyStyle}>
              <Text>약관 내용</Text>
            </View>
          </CollapseBody>
        </Collapse>
        <Collapse>
          <CollapseHeader>
            <View style={ResisterCss3.CollHeaderStyle}>
              <Checkbox
                style={ResisterCss3.CollHeaderStyleCheck}
                value={Check3}
                onValueChange={setCheck3}
              />
              <Text style={ResisterCss3.CollHeaderStyleText}>약관동의</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View style={ResisterCss3.CollBodyStyle}>
              <Text>약관 내용</Text>
            </View>
          </CollapseBody>
        </Collapse>
      </View>
      <View style={ResisterCss3.btnContainer}>
        <CustomButton
          buttonColor={"#FF50C3"}
          title={"완료"}
          onPress={Resister}
        />
      </View>
    </View>
  );
}

export default ResisterScreen3;
