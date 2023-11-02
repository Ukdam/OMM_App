import { StyleSheet } from "react-native";

export const hstyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 55,
    backgroundColor: "#D6E7CB",
    alignItems: "center",
    justifyContent: "space-between",
  },
  titletxt: {
    fontSize: 25,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 2,
    lineHeight: 50,
  },
  lefttxt: {
    textAlign: "center",
    marginLeft: 10,
  },
  righttxt: {
    textAlign: "center",
    marginRight: 10,
  },
  titleContainer: {
    textAlign: "center",
  },
  rightContainer: {
    textAlign: "center",
  },
});
