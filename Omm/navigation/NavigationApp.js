import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HoemScreen from "../screen/HomeScreen";
import DetailScreen from "../screen/DetailScreen";
<<<<<<< Updated upstream
import Header from "./Header";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
=======
import LoginScreen from "../screen/LoginScreen";
>>>>>>> Stashed changes

const NavigationApp = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <Header />,
        }}
      >
        <Stack.Screen name="Home" component={HoemScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationApp;
