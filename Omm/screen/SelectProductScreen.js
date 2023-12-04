import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SelectProductCss } from "../css/SelectProductCss";
import TapView from "../Component/TapView";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ProductContext } from "../contexts/ProductContext";

function SelectProductScreen({ navigation, route }) {
  const { todoText } = route.params;
  // console.log(todoText);

  const { productInfo, setProductInfo } = useContext(ProductContext);
  function TestFunc() {
    console.log("------------------------");
    Object.entries(productInfo).forEach(([category, products]) => {
      console.log(`Category: ${category}`);

      products.forEach((product, index) => {
        console.log(
          ` >>> ${product.ProductName} : 개수 ${product.count} 가격 ${product.Price}`
        );
      });
    });
  }

  return (
    <View style={SelectProductCss.container}>
      <View style={SelectProductCss.ImageContainer}>
        <TouchableOpacity onPress={TestFunc}>
          <Text>
            <FontAwesomeIcon icon={["fas", "bag-shopping"]} size={25} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={SelectProductCss.ProductContainer}>
        <TapView navigation={navigation} />
      </View>
    </View>
  );
}

export default SelectProductScreen;
