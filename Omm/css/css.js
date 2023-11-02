import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a7a7a7",
    alignItems: "center",
    justifyContent: "center",
  },
  banner_container: {
    flex: 1.4,
    backgroundColor: "#a7a7a7",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    top: 40,
  },
  main_container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: "scroll",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
    position: "relative",
    overflow: "hidden",
    objectFit: "cover",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
    position: "relative",
    overflow: "hidden",
    objectFit: "cover",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
    position: "relative",
    overflow: "hidden",
    objectFit: "cover",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  slidetxt: {
    width: 50,
    height: 25,
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 1,
    top: 25,
    right: 10,
    textAlign: "center",
    lineHeight: 22,
    letterSpacing: 1,
    borderRadius: 15,
  },
  login_container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    maxHeight: 50,
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  login_txt1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
  },
  login_txt2: {
    fontSize: 13,
    marginLeft: 15,
    marginTop: 10,
  },
  remain_container: {
    flex: 1,
    width: "100%",
    textAlign: "center",
    alignItems: "center",
  },
  btn_container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  btn_box: {
    width: 100,
    textAlign: "center",
  },
  btn: {
    width: 100,
    height: 100,
  },
  btntxt: {
    textAlign: "center",
  },
  point_container: {
    flex: 0.5,
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    marginTop: 10,
    // backgroundColor: "lightskyblue",
  },
  point_box: {
    width: 100,
    textAlign: "center",
  },
  pointtxt: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#a7a7a7",
    textAlign: "center",
  },
  subtxt: {
    marginTop: 5,
    fontSize: 15,
    textAlign: "center",
  },
  zzim_container: {
    flex: 0.1,
    width: "100%",
    backgroundColor: "#575757",
  },
});

// export default styles;
