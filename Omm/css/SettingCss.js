import { StyleSheet } from "react-native";

export const setstyles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "white",
  },

  //
  //
  //

  __container: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderWidth: 2,
    borderColor: "#d8d9da",
    borderRadius: 15,
    marginTop: 20,
  },

  //
  //
  //

  sub_title: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },

  context_box: {
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginBottom: 10,
    // flexDirection: "row",
  },

  context_txt: {
    fontSize: 14,
    marginTop: 10,
    width: "80%",
  },
});
