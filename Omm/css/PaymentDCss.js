import { StyleSheet } from "react-native";

export const pstyles = StyleSheet.create({
  //
  //   지점
  //

  title_container: {
    // flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 80,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#d8d9da",
  },

  //
  //   주소
  //

  adress_container: {
    // flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 60,
    marginBottom: 20,
  },

  //
  //   카트
  //

  cart_container: {
    // flex: 2,
    minHeight: 240,
    height: "auto",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#d8d9da",
  },
  cart_menubox: {
    minHeight: 180,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  cart_addmenu: {
    minHeight: 60,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderTopWidth: 2,
    borderColor: "#d8d9da",
  },

  cart_menulayout: {
    flex : 1,
    flexDirection : "row",
    width: "100%",
    height:"auto",
    minHeight:60,
    display:"flex",
    marginBottom:20,
  },

  cart_categoryText: {
    width:"30%",
    textAlign:"center",
    borderRightWidth:1,
    borderColor:"lightgray",
    fontSize:16,
    fontWeight:"bold",
  },

  __cart_menulayout:{
    width:"70%",
    flexDirection : "row",
    marginRight : 10,
    display:"flex",
    justifyContent:"space-evenly",
    flexWrap:"wrap",
  },
  __cart_text: {
    height:"auto",
    flexDirection : "row",
  },


  //
  //   요청사항
  //

  reqeust_container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    minHeight: 160,
    height: "auto",
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#d8d9da",
  },
  reqeust_titlebox: {
    minHeight: 60,
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
  },
  reqeust_checkbox: {
    minHeight: 120,
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "90%",
  },
  reqeust_selectbox: {
    minHeight: 60,
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "90%",
  },

  //
  //   결제수단
  //

  payment_container: {
    // flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 150,
    borderWidth: 2,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#d8d9da",
  },
  payment_titlebox: {
    minHeight: 60,
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "90%",
  },
  payment_checkbox: {
    minHeight: 90,
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
  },

  //
  //   총긍맥
  //

  amount_container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 160,
  },
  amount_contentbox: {
    minHeight: 120,
    height: "auto",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "90%",
    borderBottomWidth: 2,
    borderColor: "#d8d9da",
  },
  amount_contentflex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  amount_amoutbox: {
    minHeight: 40,
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },

  //
  //   버튼
  //

  btn_container: {
    alignItems: "center",
    justifyContent: "center",
    width: 240,
    height: 50,
    borderRadius: 12,
    backgroundColor: "white",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },

  //
  //   공백
  //

  blank: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,
  },
});
