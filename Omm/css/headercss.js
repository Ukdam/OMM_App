import { StyleSheet } from "react-native";

export const hstyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    height: 55,
    backgroundColor: "#D6E7CB",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titletxt: {
    // flexGrow: 1,
    fontSize: 25,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
    letterSpacing: 2,
    lineHeight: 50,
  },
  lefttxt: {
    // flexGrow: 0.1,
    textAlign: "center",
    marginLeft: 10,
  },
  righttxt: {
    // flexGrow: 0.1,
    textAlign: "center",
    marginRight: 10,
  },
  titleContainer: {
    flexGrow: 1,
    textAlign: "center",
  },
});
