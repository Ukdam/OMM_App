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

const NavigationApp = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
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
          name="Cart"
          component={CartScreen}
          options={{ header: () => <Header /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
