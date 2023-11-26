import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { mpstyles } from "../css/MyProfileCss";
import JangBtn from "../Component/JangBtn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function MyProfileScreen({ navigation }) {
  const { setUserInfo, userInfo } = useContext(UserContext);

  const username = userInfo?.username;
  const pw = userInfo?.password;
  const name = userInfo?.name;
  const email = userInfo?.email;
  const tel = userInfo?.tel;
  const mainadress = userInfo?.mainadress;

  const maskPassword = (pw) => {
    const firstChar = pw.charAt(0);
    const masked = `${firstChar}${"*".repeat(pw.length - 1)}`;
    return masked;
  };

  return (
    <View style={mpstyles.main_container}>
      <View style={mpstyles.avatar_container}>
        <FontAwesomeIcon
          icon={["fas", "circle-user"]}
          size={110}
          style={{ color: "lightgray" }}
        />
        <JangBtn title={"프로필 수정"} ver={"2"} />
      </View>
      <View style={mpstyles.table_container}>
        {/*
         아이디 
         */}

        <View style={mpstyles.__container}>
          <Text style={mpstyles.titleTxt}>아이디</Text>
          <TouchableOpacity
            onPress={() => navigation.push("아이디 변경")}
            style={{ flexDirection: "row", marginRight: 3 }}
          >
            <Text style={{ marginRight: 5, color: "darkgray" }}>
              {username}
            </Text>
            <FontAwesomeIcon
              icon={["fas", "caret-right"]}
              size={25}
              style={{ color: "gray" }}
            />
          </TouchableOpacity>
        </View>

        {/*
         비밀번호 
         */}

        <View style={mpstyles.__container}>
          <Text style={mpstyles.titleTxt}>비밀번호</Text>
          <TouchableOpacity
            onPress={() => navigation.push("비밀번호 변경")}
            style={{ flexDirection: "row", marginRight: 3 }}
          >
            <Text style={{ marginRight: 5, color: "darkgray" }}>
              {maskPassword(pw)}
            </Text>
            <FontAwesomeIcon
              icon={["fas", "caret-right"]}
              size={25}
              style={{ color: "gray" }}
            />
          </TouchableOpacity>
        </View>

        {/*
         이름 
         */}

        <View style={mpstyles.__container}>
          <Text style={mpstyles.titleTxt}>이름</Text>
          <TouchableOpacity
            onPress={() => navigation.push("이름 변경")}
            style={{ flexDirection: "row", marginRight: 3 }}
          >
            <Text style={{ marginRight: 5, color: "darkgray" }}>{name}</Text>
            <FontAwesomeIcon
              icon={["fas", "caret-right"]}
              size={25}
              style={{ color: "gray" }}
            />
          </TouchableOpacity>
        </View>

        {/*
         이메일 
         */}

        <View style={mpstyles.__container}>
          <Text style={mpstyles.titleTxt}>이메일</Text>
          <TouchableOpacity
            onPress={() => navigation.push("이메일 변경")}
            style={{ flexDirection: "row", marginRight: 3 }}
          >
            <Text style={{ marginRight: 5, color: "darkgray" }}>{email}</Text>
            <FontAwesomeIcon
              icon={["fas", "caret-right"]}
              size={25}
              style={{ color: "gray" }}
            />
          </TouchableOpacity>
        </View>

        {/*
         연락처 
         */}

        <View style={mpstyles.__container}>
          <Text style={mpstyles.titleTxt}>연락처</Text>
          <TouchableOpacity
            onPress={() => navigation.push("연락처 변경")}
            style={{ flexDirection: "row", marginRight: 3 }}
          >
            <Text style={{ marginRight: 5, color: "darkgray" }}>{tel}</Text>
            <FontAwesomeIcon
              icon={["fas", "caret-right"]}
              size={25}
              style={{ color: "gray" }}
            />
          </TouchableOpacity>
        </View>

        {/*
         주소 
         */}

        <View style={mpstyles.__containerlast}>
          <Text style={mpstyles.titleTxt}>주소</Text>
          <TouchableOpacity
            onPress={() => navigation.push("주소 변경")}
            style={{ flexDirection: "row", marginRight: 3 }}
          >
            <Text
              style={{
                marginRight: 5,
                color: "darkgray",
                width: 200,
              }}
            >
              {mainadress}
            </Text>
            <FontAwesomeIcon
              icon={["fas", "caret-right"]}
              size={25}
              style={{ color: "gray" }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/*
         탈퇴 
      */}

      <View style={mpstyles.remain_container}>
        <Text style={{ color: "tomato" }}>회원 탈퇴</Text>
      </View>
    </View>
  );
}

export default MyProfileScreen;
