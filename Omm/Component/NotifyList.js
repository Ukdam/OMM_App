import React, { Component, useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { IPContext } from "../contexts/IPContext";

const NotifyList = ({ title = "",store = "", description = "", img = "", onPress }) => {
  const { myIP } = useContext(IPContext);

  function translateImg(img) {
    switch (img) {
      case '주문 접수':
        return 'cooking.png';
      case '배달 중':
        return 'delivery.png';
      case '픽업 대기':
        return 'packaging.png';
      case '배달 완료':
        return 'flag.png';
      default:
        return img;
    }
  }

  return (
      <View style={styles.layout}>
        <View>
          <Image
            style={styles.imgBox}
            source={{
              uri: `http://${myIP}:4000/images/${translateImg(img)}`,
            }}
          />
        </View>
        
        <View style={styles.textBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{store}</Text>
          <Text style={styles.content}>{description}</Text>
        </View>
      </View>
  );
};

export default NotifyList;

const styles = StyleSheet.create({
  layout: {
    display:"flex",
    width: "100%",
    height: 80,
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:"center",
    marginBottom:10,
  },
  imgBox: {
    width:50,
    height:50,
    resizeMode:"cover",
    marginLeft:5,
    marginRight:5,
  },
  textBox:{
    display:"flex",
    width: "100%",
    height:80,
    justifyContent:"center",
  },
  title:{
    height:30,
    lineHeight:30,
    fontWeight:"bold",
    fontSize:18,
  },
  content:{
    height:20,
    lineHeight:20,
    color:"#a8a8a8",
  },
});
