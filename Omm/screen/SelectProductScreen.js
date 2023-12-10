import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SelectProductCss } from "../css/SelectProductCss";
import TapView from "../Component/TapView";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ProductContext } from "../contexts/ProductContext";
import { IPContext } from "../contexts/IPContext";

function SelectProductScreen({ navigation, route }) {
  const { todoText } = route.params;
  const { myIP } = useContext(IPContext);
  const { productInfo, setProductInfo, selectedTab } = useContext(ProductContext); // selectedTab 추가

  let imageSource;
  if (selectedTab === "채소") {
    imageSource = "001(500x400).png";
  } else if (selectedTab === "고기") {
    imageSource = "002(500x400).png";
  } else if (selectedTab === "밥/면") {
    imageSource = "003(500x400).png";
  } else if (selectedTab === "소스") {
    imageSource = "004(500x400).png";
  } else {
    imageSource = "005(500x400).png"
  }


  return (
    <View style={SelectProductCss.container}>
      <View style={SelectProductCss.ImageContainer}>
        <Image alt="사진" source={{ uri: `http://${myIP}:4000/images/${imageSource}` }} 
        style={{ width: "100%", height: "100%"}}></Image>
      </View>
      <View style={SelectProductCss.ProductContainer}>
        <TapView navigation={navigation} />
      </View>
    </View>
  );
}

export default SelectProductScreen;
