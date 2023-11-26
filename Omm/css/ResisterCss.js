import { StyleSheet } from "react-native";

export const ResisterCss = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "green",
    borderWidth: 1,
  },

  inputID: {
    height: 40,
    width: 300,
    // margin: 5,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 15,
  },
  inputEM: {
    height: 40,
    width: 300,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 15,
  },
  Text: {
    marginBottom: 10,
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: 10,
  },

  inputView01: {
    flex: 0.5,
    width: 300,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  inputView02: {
    borderBottomWidth: 1,
    borderColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
  },
});
