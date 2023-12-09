import { StyleSheet } from "react-native";

export const SelectProductCss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    ImageContainer: {
        justifyContent: "center",
        width: "100%",
        height: "40%",
        resizeMode: "contain"
    },
    ProductContainer: {
        flex: 1,
        backgroundColor: "#FFEFC8",
        width: "100%",
        height: "100%",
        borderRadius: 30,

    },
    ButtonContainer: {
        marginLeft: "15%",
        marginBottom: "7%"
    }

})