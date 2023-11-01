import { StyleSheet } from "react-native";

export const hstyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    height: 40,
    backgroundColor: "#D6E7CB",
    alignItems: "center",
    justifyContent: "center",
  },
  titletxt: {
    flexGrow: 1,
    fontSize: 25,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  lefttxt: {
    flexGrow: 0.1,
    textAlign: "center",
  },
  righttxt: {
    flexGrow: 0.1,
    textAlign: "center",
  },
});
