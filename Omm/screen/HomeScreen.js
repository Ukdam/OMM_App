import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import { styles } from "../css/css";
import Swiper from "react-native-swiper";
import ImgEvent1 from "../Image/Banner01.svg";
import ImgEvent2 from "../Image/Banner02.svg";
import ImgEvent3 from "../Image/Banner03.svg";
import CustomButton02 from "../Component/CustomButton02";
import ZzimCard from "../Component/ZzimCard";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { IPContext } from "../contexts/IPContext";
import Toast from "react-native-toast-message";

function HoemScreen({ navigation }) {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const { myIP } = useContext(IPContext);

  useEffect(() => {
    fetch(`http://${myIP}:4000/profile`, {
      credentials: "include",
    })
      .then((res) => {
        res.json().then((userInfo) => {
          setUserInfo(userInfo);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const username = userInfo?.username;
  const name = userInfo?.name;

  

  return (
    <View style={styles.container}>
      <View style={styles.banner_container}>
        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          loop
          // autoplay
          // autoplayTimeout={20}
          paginationStyle={{ bottom: 55 }}
        >
          <View style={styles.slide1}>
            <Text style={styles.slidetxt}>1/3</Text>
            <ImgEvent1 style={styles.img} />
          </View>
          <View style={styles.slide2}>
            <Text style={styles.slidetxt}>2/3</Text>
            <ImgEvent2 style={styles.img} />
          </View>
          <View style={styles.slide3}>
            <Text style={styles.slidetxt}>3/3</Text>
            <ImgEvent3 style={styles.img} />
          </View>
        </Swiper>
      </View>
      <View style={styles.main_container}>
        {username ? (
          <View style={styles.login_container}>
            <Text style={styles.login_txt1}>{name} 님</Text>
            <Text style={styles.login_txt2}>환영합니다.</Text>
          </View>
        ) : (
          <View style={styles.login_container}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.login_txt1}>로그인</Text>
            </TouchableOpacity>
            <Text style={styles.login_txt2}>해주세요.</Text>
          </View>
        )}

        <View style={styles.remain_container}>
          <View style={styles.point_container}>
            <View style={styles.point_box}>
              <Text style={styles.pointtxt}>0</Text>
              <Text style={styles.subtxt}>포인트</Text>
            </View>
            <View style={styles.point_box}>
              <Text style={styles.pointtxt}>0</Text>
              <Text style={styles.subtxt}>쿠폰</Text>
            </View>
          </View>
          <View style={styles.btn_container}>
            <View style={styles.btn_box}>
              <TouchableOpacity onPress={() => username ?  navigation.navigate("SearchShop") 
                : Toast.show({
                  type: "error",
                  text1: "로그인 후 가능합니다.",
                  position: "top",
                  bottomOffset: 20,
                  visibilityTime: 2000,
                })}>
                <View style={{
                  // backgroundColor:"#FFCEaa", 
                  borderColor: '#FFCEaa',
                  borderWidth: 3,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                  borderRadius: 15,
                  width: 100,
                  height: 100,
                }}>
                  <Image
                      style={{ width: 90, height: 90, resizeMode: "cover" }}
                      source={{ uri: `http://${myIP}:4000/images/fast-delivery.png`, }}
                    />
                </View>
              </TouchableOpacity>
              <Text style={styles.btntxt}>배달</Text>
            </View>
            <View style={styles.btn_box}>
            <TouchableOpacity onPress={() => username ?  navigation.navigate("SearchShop") 
                : Toast.show({
                  type: "error",
                  text1: "로그인 후 가능합니다.",
                  position: "top",
                  bottomOffset: 20,
                  visibilityTime: 2000,
                })}>
                <View style={{
                  borderColor: '#FFCEaa',
                  borderWidth: 3,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 10,
                  borderRadius: 15,
                  width: 100,
                  height: 100,
                }}>
                  <Image
                      style={{ width: 75, height: 75, resizeMode: "cover" }}
                      source={{ uri: `http://${myIP}:4000/images/food-delivery.png`, }}
                    />
                </View>
              </TouchableOpacity>
              <Text style={styles.btntxt}>포장</Text>
            </View>
          </View>
        </View>
        {/* ContentContainerStyle={styles.} */}
        {/* <ScrollView style={styles.zzim_container} horizontal>
          <ZzimCard />
          <ZzimCard />
          <ZzimCard />
        </ScrollView> */}
      </View>
    </View>
  );
}

export default HoemScreen;
