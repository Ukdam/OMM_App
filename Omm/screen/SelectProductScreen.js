import React from "react";
import { View, Text } from "react-native";
import { SelectProductCss } from "../css/SelectProductCss";
import Dish from "../Image/dish.svg"
import TapView from "../Component/TapView"
import CustomButton from "../Component/CustomButton"


function SelectProductScreen() {
    return (
        <View style={SelectProductCss.container}>
            <View style={SelectProductCss.ImageContainer}>
                <Dish />
            </View>
            <View style={SelectProductCss.ProductContainer}>
                <TapView />
                <View style={SelectProductCss.ButtonContainer}>
                    <CustomButton />
                </View>

            </View>
        </View>
    )
}

export default SelectProductScreen;