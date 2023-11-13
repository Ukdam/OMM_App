import React from "react";
import { View, Text } from "react-native";
import { SelectProductCss } from "../css/SelectProductCss";
import Dish from "../Image/dish.svg"

function SelectProductScreen() {
    return (
        <View style={SelectProductCss.container}>
            <View style={SelectProductCss.ImageContainer}>
                <Dish />
            </View>
            <View style={SelectProductCss.ProductContainer}>

            </View>
        </View>
    )
}

export default SelectProductScreen;