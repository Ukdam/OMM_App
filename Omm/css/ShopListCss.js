import { StyleSheet } from "react-native";

export const ShopListCss = StyleSheet.create({
    list: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#f0f0f0',
        height: 1,
    },
    item: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 1,
    },

    text: {
        textAlign: "center",
        flex: 1,
        fontSize: 16,
        color: '#212121',
    },
});