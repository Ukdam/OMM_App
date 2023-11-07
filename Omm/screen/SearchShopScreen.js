import React from "react";
import { View, Text } from "react-native";
import { SearchShopCss } from "../css/SearchShopCss";
import GoogleMap from "../Component/GoogleMap";

function SearchShopScreen() {

    return (
        <View style={SearchShopCss.container}>
            <View style={SearchShopCss.MapContainer}>
                <GoogleMap />
            </View>
        </View>
    );
}

export default SearchShopScreen;