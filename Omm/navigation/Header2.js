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


function Header2({}) {
  const navigation = useNavigation();
  const { productInfo, setProductInfo } = useContext(ProductContext);
  const { isUpdate, setIsUpdate } = useContext(NotifyContext);

  return (
    <>
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 0,
        marginBottom: Platform.OS === "ios" ? 20 : 0,
        // backgroundColor: "#D6E7CB",
        backgroundColor: "white",
      }}
    >
    </SafeAreaView>
    </>
  );
}

export default Header2;
