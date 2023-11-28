import React from "react";
import { View, Text } from "react-native";
import { SelectProductCss } from "../css/SelectProductCss";
import TapView from "../Component/P_TapView";

function SelectProductScreen({ navigation, route }) {
  const { todoText } = route.params;
  console.log(todoText);

  return (
    <View style={SelectProductCss.container}>
      <View style={SelectProductCss.ImageContainer}></View>
      <View style={SelectProductCss.ProductContainer}>
        <TapView navigation={navigation} />
      </View>
    </View>
  );
}

export default SelectProductScreen;
