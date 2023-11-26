import { StyleSheet } from "react-native";

export const LoginCss = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  inputID: {
    height: 40,
    width: 270,
    // margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 15,
  },
  inputPW: {
    height: 40,
    width: 270,
    // margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 15,
    // marginBottom: 90,
    // marginTop: 90,
  },
  tinyLogo: {
    height: 150,
    width: 150,
    marginBottom: 50,
    marginTop: 60,
  },
  loginView01: {
    flex: 0.5,
    width: 300,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
  },
  loginView02: {
    borderBottomWidth: 1,
    borderColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
  },
});
