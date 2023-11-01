import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hstyles } from "../css/headercss";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FontAwesome } from "@expo/vector-icons";
{
  /* <FontAwesome name="bars" size={30} color="#900" /> */
}

function Header() {
  return (
    <SafeAreaView>
      <View style={hstyles.container}>
        <Text style={hstyles.lefttxt}>
          <FontAwesomeIcon icon={["fas", "bars"]} size={20} />
        </Text>
        <Text style={hstyles.titletxt}>OMM</Text>
        <Text style={hstyles.righttxt}>
          <FontAwesomeIcon icon={["fas", "cart-shopping"]} size={20} />
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default Header;
