import { StyleSheet } from "react-native";

export const mpstyles = StyleSheet.create({
  //
  //   메인
  //

  main_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
  },

  //
  //   아바타
  //

  avatar_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%",
  },

  //
  //   테이블
  //

  table_container: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
  },
  __container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  main_box: {
    flex: 0.8,
    height: "100%",
    backgroundColor: "#aaaaaa",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 3,
    borderColor: "#d8d9da",
  },
  sub_box: {
    flex: 3,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 3,
    borderColor: "#d8d9da",
  },

  //
  //   나머지
  //

  remain_container: {
    flex: 0.4,
    alignItems: "flex-end",
    justifyContent: "center",
    width: "90%",
    paddingRight: 20,
    borderTopWidth: 3,
    borderColor: "#d8d9da",
  },
});
