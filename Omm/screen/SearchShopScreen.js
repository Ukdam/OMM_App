import React from "react";
import { View, Text } from "react-native";
import { SearchShopCss } from "../css/SearchShopCss";
import GoogleMap from "../Component/GoogleMap";
import ShopList from "../Component/ShopList";

function SearchShopScreen() {
  return (
    <View style={SearchShopCss.container}>
      <View style={SearchShopCss.MapContainer}>
        <GoogleMap />
      </View>
      <Text style={SearchShopCss.SText}>주문 매장을 선택해 주세요!</Text>
      <View style={SearchShopCss.ListContainer}>
        <Text style={SearchShopCss.Ltext}>매장 목록</Text>
        <ShopList />
      </View>
    </View>
  );
}

export default SearchShopScreen;
