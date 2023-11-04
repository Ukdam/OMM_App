import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigation } from "./StackNavigation";
import DetailScreen from "../screen/DetailScreen";
import Header from "./Header";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerType="front"
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackNavigation}
        options={{ drawerLabel: "HOME" }}
      />
      <Drawer.Screen
        name="About"
        component={DetailScreen}
        options={{ drawerLabel: "ABOUT" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
