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
import PaymentScreen_P from "../screen/PaymentScreen_P"
import ResisterScreen from "../screen/ResisterScreen";
import ResisterScreen2 from "../screen/ResisterScreen2";
import SearchAddress from "../Component/SearchAddress";
import ResisterScreen3 from "../screen/ResisterScreen3";
import SearchShopScreen from "../screen/SearchShopScreen";
import SettingScreen from "../screen/SettingScreen";
import MyProfileScreen from "../screen/MyProfileScreen";
import IDEditScreen from "../screen/MyProfile/IDEditScreen";
import PASSEditScreen from "../screen/MyProfile/PASSEditScreen";
import NAMEEditScreen from "../screen/MyProfile/NAMEEditScreen";
import EMAILEditScreen from "../screen/MyProfile/EMAILEditScreen";
import PHONEEditScreen from "../screen/MyProfile/PHONEEditScreen";
import ADRESSEditScreen from "../screen/MyProfile/ADRESSEditScreen";
import OrderHistoryScreen from "../screen/OrderHistoryScreen";
import HistoryDetailScreen from "../screen/HistoryDetailScreen";
import SelectProductScreen from "../screen/SelectProductScreen";
import TossPayment from "../Component/TossPayment";
import P_SearchShopScreen from "../screen/P_SearchShopScreen";
import P_SelectProductScreen from "../screen/P_SelectProductScreen";

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
        name="P_SelectProduct"
        component={P_SelectProductScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="P_SearchShop"
        component={P_SearchShopScreen}
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
        name="Payment_P"
        component={PaymentScreen_P}
        options={{ header: () => <Header /> }}
      />

      {/* <Stack.Screen name="토스" component={TossPayment} /> */}

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
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen
        name="SelectProduct"
        component={SelectProductScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen name="주문 상세" component={HistoryDetailScreen} />

      {/* 
      내 정보 수정 관련
      */}
      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{ header: () => <Header /> }}
      />
      <Stack.Screen name="아이디 변경" component={IDEditScreen} />
      <Stack.Screen name="비밀번호 변경" component={PASSEditScreen} />
      <Stack.Screen name="이름 변경" component={NAMEEditScreen} />
      <Stack.Screen name="이메일 변경" component={EMAILEditScreen} />
      <Stack.Screen name="연락처 변경" component={PHONEEditScreen} />
      <Stack.Screen name="주소 변경" component={SearchAddress} />
      {/* <Stack.Screen name="주소 변경" component={ADRESSEditScreen} /> */}
    </Stack.Navigator>
  );
};

export { StackNavigation };
