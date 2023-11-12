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
    flex: 1.3,
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
    width: "90%",
    borderColor: "#d8d9da",
    borderWidth: 1,
    borderRadius: 15,
  },
  __container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#d8d9da",
  },
  __containerlast: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleTxt: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
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
    flex: 0.8,
    alignItems: "flex-end",
    justifyContent: "center",
    width: "90%",
    paddingRight: 20,
    borderColor: "#d8d9da",
  },

  //
  // 수정 페이지
  //

  edit_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "white",
    borderTopWidth: 2,
    borderColor: "#d8d9da",
  },
  EMedit_container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderTopWidth: 2,
    borderColor: "#d8d9da",
  },
});
