import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hstyles } from "../css/headercss";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

function Header({}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 0, paddingBottom: 0 }}>
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

        <TouchableOpacity
          onPress={() => navigation.navigate("Cart")}
          style={hstyles.rightContainer}
        >
          <Text style={hstyles.righttxt}>
            <FontAwesomeIcon icon={["fas", "cart-shopping"]} size={25} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Header;
