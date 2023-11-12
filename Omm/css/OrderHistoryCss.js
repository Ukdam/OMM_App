import { StyleSheet } from "react-native";

export const ohstyles = StyleSheet.create({
  main_container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },

  //
  date_txt: {
    backgroundColor: "lightgray",
    width: "100%",
    textAlign: "right",
    height: 40,
    lineHeight: 35,
    fontSize: 16,
    paddingRight: 20,
    marginBottom: 10,
  },

  //
  card_list: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  //
  card_container: {
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#d8d9da",
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
  },

  __container: {
    height: 130,
    alignItems: "center",
    justifyContent: "center",
  },

  //
  //
  //

  detail_container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    borderTopWidth: 2,
    borderColor: "#d8d9da",
  },

  detail__container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  detail_box1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  detail_box2: {
    width: "90%",
    justifyContent: "space-between",
    marginTop: 40,
  },
});
