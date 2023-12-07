import React from "react";

import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { StackNavigation } from "./StackNavigation";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, StyleSheet, Text, View } from "react-native";
import DrawerUI from "../Component/DrawerUI";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="front"
      screenOptions={{
        headerShown: false,
        // header: () => <Header />,
      }}
      drawerContent={({ navigation }) => (
        <SafeAreaView>
          <DrawerUI navigation={navigation} />
        </SafeAreaView>
      )}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigation}
        options={{ drawerLabel: "HOME" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
