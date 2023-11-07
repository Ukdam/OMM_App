import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "../css/css";
import Swiper from "react-native-swiper";
import ImgEvent1 from "../Image/Banner01.svg";
import ImgEvent2 from "../Image/Banner02.svg";
import ImgEvent3 from "../Image/Banner03.svg";
import CustomButton02 from "../Component/CustomButton02";
import ZzimCard from "../Component/ZzimCard";

function HoemScreen({ navigation }) {
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
      <ScrollView style={styles.main_container}>
        <View style={styles.login_container}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.login_txt1}>로그인</Text>
          </TouchableOpacity>
          <Text style={styles.login_txt2}>해주세요.</Text>
        </View>
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
              <CustomButton02 buttonColor={"#FFCEaa"} title={"배달"} onPress={() => navigation.navigate("SearchShop")} />
              <Text style={styles.btntxt}>배달</Text>
            </View>
            <View style={styles.btn_box}>
              <CustomButton02 buttonColor={"#FFCEaa"} title={"포장"} />
              <Text style={styles.btntxt}>포장</Text>
            </View>
          </View>
        </View>
        {/* ContentContainerStyle={styles.} */}
        <ScrollView style={styles.zzim_container} horizontal>
          <ZzimCard />
          <ZzimCard />
          <ZzimCard />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

export default HoemScreen;
