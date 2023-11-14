import { StyleSheet } from "react-native";

export const SwiperProductCss = StyleSheet.create({

    ViewContainer: {
        height: "90%",
        width: "70%",
        marginLeft: "15%"
    },
    gridContainer: {
        justifyContent: 'center',
        alignItems: "center",
        marginTop: "15%"
    },
    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        margin: 5
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonText: {
        fontSize: 18,
        color: 'blue',
        padding: 10,
    },

})