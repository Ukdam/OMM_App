import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { mpstyles } from "../css/MyProfileCss";
import JangBtn from "../Component/JangBtn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function MyProfileScreen() {
  const [idValue, setIdValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [adressValue, setAdressValue] = useState("");

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
          <View style={mpstyles.main_box}>
            <Text style={{ fontSize: 16 }}>아이디</Text>
          </View>
          <View style={mpstyles.sub_box}>
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ flex: 8, marginRight: 10 }}>
                <TextInput
                  editable={false}
                  maxLength={10}
                  onChangeText={(text) => setIdValue(text)}
                  value={idValue}
                  style={{
                    borderColor: "#aaaaaa",
                    borderWidth: 2,
                    width: "100%",
                    padding: 3,
                  }}
                  placeholder="아이디"
                />
              </View>
              <View style={{ flex: 1, opacity: 0 }}>
                <JangBtn title={"변경"} ver={"3"} />
              </View>
            </View>
          </View>
        </View>

        {/*
         비밀번호 
         */}

        <View style={mpstyles.__container}>
          <View style={mpstyles.main_box}>
            <Text style={{ fontSize: 16 }}>비밀번호</Text>
          </View>
          <View style={mpstyles.sub_box}>
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ flex: 8, marginRight: 10 }}>
                <TextInput
                  editable={true}
                  maxLength={10}
                  onChangeText={(text) => setPassValue(text)}
                  value={passValue}
                  style={{
                    borderColor: "#aaaaaa",
                    borderWidth: 2,
                    width: "100%",
                    padding: 3,
                  }}
                  placeholder="비밀번호"
                />
              </View>
              <View style={{ flex: 1 }}>
                <JangBtn title={"변경"} ver={"3"} />
              </View>
            </View>
          </View>
        </View>

        {/*
         이름 
         */}

        <View style={mpstyles.__container}>
          <View style={mpstyles.main_box}>
            <Text style={{ fontSize: 16 }}>이름</Text>
          </View>
          <View style={mpstyles.sub_box}>
            <Text>내용</Text>
          </View>
        </View>

        {/*
         이메일 
         */}

        <View style={mpstyles.__container}>
          <View style={mpstyles.main_box}>
            <Text style={{ fontSize: 16 }}>이메일</Text>
          </View>
          <View style={mpstyles.sub_box}>
            <Text>내용</Text>
          </View>
        </View>

        {/*
         연락처 
         */}

        <View style={mpstyles.__container}>
          <View style={mpstyles.main_box}>
            <Text style={{ fontSize: 16 }}>연락처</Text>
          </View>
          <View style={mpstyles.sub_box}>
            <Text>내용</Text>
          </View>
        </View>

        {/*
         주소 
         */}

        <View style={mpstyles.__container}>
          <View style={mpstyles.main_box}>
            <Text style={{ fontSize: 16 }}>주소</Text>
          </View>
          <View style={mpstyles.sub_box}>
            <Text>내용</Text>
          </View>
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
