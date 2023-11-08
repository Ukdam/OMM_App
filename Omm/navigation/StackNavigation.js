import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HoemScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";
import Header from "./Header";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "../screen/LoginScreen";
import PaymentScreen_D from "../screen/PaymentScreen_D";
import ResisterScreen from "../screen/ResisterScreen";
import ResisterScreen2 from "../screen/ResisterScreen2";
import SearchAddress from "../Component/SearchAddress";
import ResisterScreen3 from "../screen/ResisterScreen3";
import SearchShopScreen from "../screen/SearchShopScreen";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={HoemScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Resister"
        component={ResisterScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Payment_D"
        component={PaymentScreen_D}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="Resister2"
        component={ResisterScreen2}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen name="주소찾기" component={SearchAddress} />
      <Stack.Screen
        name="Resister3"
        component={ResisterScreen3}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="SearchShop"
        component={SearchShopScreen}
        options={{ header: () => <Header /> }}
      />
    </Stack.Navigator>
  );
};

export { StackNavigation };
