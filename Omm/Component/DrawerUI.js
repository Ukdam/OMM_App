import { DrawerItemList } from "@react-navigation/drawer";
import React, { useContext } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import JangBtn from "./JangBtn";
import { color } from "react-native-elements/dist/helpers";
import { UserContext } from "../contexts/UserContext";
import { DrawerActions } from "@react-navigation/native";

function DrawerUI({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: "#fff",
    },
    // -------------------
    profile_container: {
      width: "100%",
      height: "30%",
    },
    profile_container2: {
      flex: 1,
      flexDirection: "row",
    },
    profile_container3: {
      flex: 0.5,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    profile_box: {
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    profile_box2: {
      flex: 1,
      alignItems: "center",
    },
    // -------------------------------
    list_container: {
      width: "90%",
      height: "25%",
      alignSelf: "center",
      borderTopWidth: 2,
      borderColor: "darkgray",
    },
    list_adressbox: {
      flex: 1,
      alignItems: "center",
    },
    list_historybox: {
      flex: 0.5,
      flexDirection: "row",
      alignItems: "flex-start",
      marginLeft: 12,
    },
    list_settingbox: {
      flex: 0.5,
      flexDirection: "row",
      alignItems: "flex-start",
      marginLeft: 12,
    },
    remain_container: {
      width: "100%",
      height: "45%",
      justifyContent: "flex-end",
    },
    logout_btn: {
      width: 70,
      height: 30,
      backgroundColor: "tomato",
      borderRadius: 10,
      textAlign: "center",
      alignSelf: "center",
      lineHeight: 25,
      color: "white",
      marginBottom: 20,
    },
  });

  const { setUserInfo, userInfo } = useContext(UserContext);

  const username = userInfo?.username;
  const name = userInfo?.name;
  const mainadress = userInfo?.mainadress;
  const sideadress = userInfo?.sideadress;

  function logout() {
    fetch("http://192.168.35.2:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    navigation.dispatch(DrawerActions.closeDrawer());
    setUserInfo(null);
  }

  return (
    <>
      <View style={styles.container}>
        {/* 
        
        프로필 영역 
    
        */}
        <View style={styles.profile_container}>
          <View style={styles.profile_container2}>
            <View style={styles.profile_box}>
              <FontAwesomeIcon
                icon={["fas", "circle-user"]}
                size={100}
                style={{ color: "lightgray" }}
              />
              <JangBtn
                title={"내 정보"}
                onPress={() => navigation.navigate("MyProfile")}
                ver={"1"}
              />
            </View>
            <View style={styles.profile_box}>
              <Text style={{ fontSize: 22 }}>{username ? "VIP" : "등급"}</Text>

              <Text style={{ fontSize: 22 }}>{username ? name : "이름"}</Text>
            </View>
          </View>
          <View style={styles.profile_container3}>
            <View style={styles.profile_box2}>
              <Text style={{ fontSize: 25, color: "gray", fontWeight: "bold" }}>
                0
              </Text>
              <Text style={{ fontSize: 14 }}>포인트</Text>
            </View>
            <View style={styles.profile_box2}>
              <Text style={{ fontSize: 25, color: "gray", fontWeight: "bold" }}>
                0
              </Text>
              <Text style={{ fontSize: 14 }}>쿠폰</Text>
            </View>
          </View>
        </View>
        {/* 
        
        리스트 영역 
    
        */}
        <View style={styles.list_container}>
          <View style={styles.list_adressbox}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>주소</Text>
            <Text style={{ fontSize: 12, textDecorationLine: "underline" }}>
              {username ? mainadress : "---- 로그인 해주세요 ----"}
            </Text>
            <Text style={{ fontSize: 11, color: "gray" }}>
              {username ? sideadress : " 자세한 주소"}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.list_historybox}
            onPress={() => navigation.navigate("History")}
          >
            <FontAwesomeIcon
              icon={["fas", "receipt"]}
              size={25}
              style={{ color: "gray", marginRight: 5 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>주문내역</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list_settingbox}
            onPress={() => navigation.navigate("Setting")}
          >
            <FontAwesomeIcon
              icon={["fas", "gear"]}
              size={25}
              style={{ color: "gray", marginRight: 5 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>환경설정</Text>
          </TouchableOpacity>
        </View>
        {/* 
        
        나머지 빈 영역 
    
        */}
        <View style={styles.remain_container}>
          {username ? (
            <TouchableOpacity onPress={logout}>
              <Text style={styles.logout_btn}>로그아웃</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </View>
    </>
  );
}

export default DrawerUI;
