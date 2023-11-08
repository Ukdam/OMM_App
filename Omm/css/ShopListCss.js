import { StyleSheet } from "react-native";

export const ShopListCss = StyleSheet.create({
    list: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    },
    item: {
        flexDirection: 'row',
        padding: 16,
    },

    text: {
        textAlign: "center",
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
});