import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { setstyles } from "../css/SettingCss";

function SettingScreen() {
  // 로그인 스위치
  const [loginOnoff, setLoginOnoff] = useState(false);
  const login01Switch = () => setLoginOnoff((previousState) => !previousState);

  // 알림 스위치
  const [Notify01Onoff, setNotify01Onoff] = useState(false);
  const Notify01Switch = () =>
    setNotify01Onoff((previousState) => !previousState);
  const [Notify02Onoff, setNotify02Onoff] = useState(false);
  const Notify02Switch = () =>
    setNotify02Onoff((previousState) => !previousState);
  const [Notify03Onoff, setNotify03Onoff] = useState(false);
  const Notify03Switch = () =>
    setNotify03Onoff((previousState) => !previousState);
  const [Notify04Onoff, setNotify04Onoff] = useState(false);
  const Notify04Switch = () =>
    setNotify04Onoff((previousState) => !previousState);

  // 서비스 스위치
  const [Service01Onoff, setService01Onoff] = useState(false);
  const Service01Switch = () =>
    setService01Onoff((previousState) => !previousState);
  const [Service02Onoff, setService02Onoff] = useState(false);
  const Service02Switch = () =>
    setService02Onoff((previousState) => !previousState);
  return (
    <View style={setstyles.main_container}>
      {/* 
        로그인
      */}
      <View style={setstyles.__container}>
        <Text style={setstyles.sub_title}>로그인</Text>
        <View style={setstyles.context_box}>
          <View style={{ flexDirection: "row" }}>
            <Text style={setstyles.context_txt}>로그인 상태 유지</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={loginOnoff ? "#0089F2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={login01Switch}
              value={loginOnoff}
              style={{ width: "20%" }}
            />
          </View>
        </View>
      </View>

      {/* 
        알림
      */}

      <View style={setstyles.__container}>
        <Text style={setstyles.sub_title}>알림</Text>
        <View style={setstyles.context_box}>
          {/* 이벤트 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={setstyles.context_txt}>이벤트</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={Notify01Onoff ? "#0089F2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Notify01Switch}
              value={Notify01Onoff}
              style={{ width: "20%" }}
            />
          </View>

          {/* 배달 현황 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={setstyles.context_txt}>배달 현황</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={Notify02Onoff ? "#0089F2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Notify02Switch}
              value={Notify02Onoff}
              style={{ width: "20%" }}
            />
          </View>

          {/* 리뷰 작성 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={setstyles.context_txt}>리뷰 작성</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={Notify03Onoff ? "#0089F2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Notify03Switch}
              value={Notify03Onoff}
              style={{ width: "20%" }}
            />
          </View>

          {/* 리뷰 답글 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={setstyles.context_txt}>리뷰 답글</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={Notify04Onoff ? "#0089F2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Notify04Switch}
              value={Notify04Onoff}
              style={{ width: "20%" }}
            />
          </View>
        </View>
      </View>

      {/* 
        서비스
      */}

      <View style={setstyles.__container}>
        <Text style={setstyles.sub_title}>서비스</Text>
        <View style={setstyles.context_box}>
          <View style={{ flexDirection: "row" }}>
            {/* 개인정보 활용 수신 */}
            <Text style={setstyles.context_txt}>개인정보 활용 수신</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={Service01Onoff ? "#0089F2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Service01Switch}
              value={Service01Onoff}
              style={{ width: "20%" }}
            />
          </View>

          {/* 마케팅 정보 수신 */}
          <View style={{ flexDirection: "row" }}>
            <Text style={setstyles.context_txt}>마케팅 정보 수신</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={Service02Onoff ? "#0089F2" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={Service02Switch}
              value={Service02Onoff}
              style={{ width: "20%" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default SettingScreen;
