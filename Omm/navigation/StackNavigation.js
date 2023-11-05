import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HoemScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";
import Header from "./Header";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "../screen/LoginScreen";
import CartScreen from "../screen/CartScreen";
import ResisterScreen from "../screen/ResisterScreen";
import ResisterScreen2 from "../screen/ResisterScreen2";
import SearchAddress from "../Component/SearchAddress";
import ResisterScreen3 from "../screen/ResisterScreen3";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={HoemScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Resister" component={ResisterScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Resister2" component={ResisterScreen2} />
      <Stack.Screen name="주소찾기" component={SearchAddress} />
      <Stack.Screen name="Resister3" component={ResisterScreen3} />
    </Stack.Navigator>
  );
};

export { StackNavigation };
