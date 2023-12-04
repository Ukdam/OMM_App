import React, { useEffect, useState } from "react";
import { View, Text, Button, TouchableOpacity, Platform, Animated, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { hstyles } from "../css/headercss";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import NotifySection from "../Component/NotifySection";
import { Badge } from "react-native-paper";
import { NotifyContext } from "../contexts/NotifyContext";


function Header({}) {
  const navigation = useNavigation();
  const { productInfo, setProductInfo } = useContext(ProductContext);
  const { isUpdate, setIsUpdate } = useContext(NotifyContext);

  return (
    <>
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
            setIsUpdate(false);
          }}
        >
          
          {isUpdate ? <Badge style={{position: 'absolute', top: -5, left: 32}} size={10}/> : <></>}
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


        <TouchableOpacity style={hstyles.rightContainer}>
          <Text style={hstyles.righttxt}>
            <FontAwesomeIcon icon={["fas", "cart-shopping"]} size={25} />
          </Text>
        </TouchableOpacity>
      </View>

      
    </SafeAreaView>
    </>
  );
}

export default Header;
