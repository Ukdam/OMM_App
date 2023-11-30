import React from "react";
import { View, Text, Button, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hstyles } from "../css/headercss";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

function Header({}) {
  const navigation = useNavigation();
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
    // Object.entries(productInfo).forEach(([category, products]) => {
    //   console.log(`Category: ${category}`);
    //   products.forEach((product, index) => {
    //     console.log(`Product ${index + 1}: ${JSON.stringify(product)}`);
    //   });
    // });
    console.log("------------------------");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 0,
        marginBottom: Platform.OS === "ios" ? 20 : 55,
      }}
    >
      <View style={hstyles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.openDrawer());
          }}
        >
          <Text style={hstyles.lefttxt}>
            <FontAwesomeIcon icon={["fas", "bars"]} size={25} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Main")}
          style={hstyles.titleContainer}
        >
          <Text style={hstyles.titletxt}>OMM</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={TestFunc} style={hstyles.rightContainer}>
          <Text style={hstyles.righttxt}>
            <FontAwesomeIcon icon={["fas", "bell"]} size={25} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Header;
