import { DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import JangBtn from "./JangBtn";
import { color } from "react-native-elements/dist/helpers";

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
    },
  });

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
                style={{ color: "gray" }}
              />
              <JangBtn
                title={"내 정보"}
                onPress={() => navigation.navigate("MyProfile")}
                ver={"1"}
              />
            </View>
            <View style={styles.profile_box}>
              <Text style={{ fontSize: 22 }}>등급</Text>
              <Text style={{ fontSize: 22 }}>이름</Text>
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
              서울 특별시 종로구 청화대로
            </Text>
            <Text style={{ fontSize: 10, color: "gray" }}>자세한 주소</Text>
          </View>
          <View style={styles.list_historybox}>
            <FontAwesomeIcon
              icon={["fas", "receipt"]}
              size={25}
              style={{ color: "gray", marginRight: 5 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>주문내역</Text>
          </View>
          <View style={styles.list_settingbox}>
            <FontAwesomeIcon
              icon={["fas", "gear"]}
              size={25}
              style={{ color: "gray", marginRight: 5 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>환경설정</Text>
          </View>
        </View>
        {/* 
        
        나머지 빈 영역 
    
        */}
        <View style={styles.remain_container}>
          <Text>빈 공간</Text>
        </View>
      </View>
    </>
  );
}

export default DrawerUI;
