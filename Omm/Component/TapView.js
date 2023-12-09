import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import SwiperProduct from "../Component/SwiperProduct";
import JangBtnPay from "./JangBtnPay";
import SwiperProduct02 from "./SwiperProduct02";
import SwiperProduct03 from "./SwiperProduct03";
import SwiperProduct04 from "./SwiperProduct04";
import SwiperProduct05 from "./SwiperProduct05";
import { ProductContext } from "../contexts/ProductContext";

const FirstRoute = () => <SwiperProduct />;
const SecondRoute = () => <SwiperProduct02 />;
const ThirdRoute = () => <SwiperProduct03 />;
const FourRoute = () => <SwiperProduct04 />;
const FiveRoute = () => <SwiperProduct05 />;

export default class TabViewExample extends React.Component {
  static contextType = ProductContext; // contextType을 설정
  state = {
    index: 0,
    routes: [
      { key: "first", title: "채소" },
      { key: "second", title: "고기" },
      { key: "third", title: "밥/면" },
      { key: "four", title: "소스" },
      { key: "five", title: "추가" },
    ],
  };

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          const tabItemStyle = [
            styles.tabItem,
            i === props.navigationState.index
              ? styles.selectedTabItem
              : styles.unselectedTabItem,
          ];

          return (
            <TouchableOpacity
              style={tabItemStyle}
              onPress={() => {
                this.setState({ index: i });
                this.context.setSelectedTab(route.title); // setSelectedTab 사용
              }}
              key={route.key}
            >
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourRoute,
    five: FiveRoute,
  });

  _handleIndexChange = (index) => {
    this.setState({ index });
    this.context.setSelectedTab(this.state.routes[index].title); // setSelectedTab 사용
  };

  render() {
    return (
      <>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
        <View style={styles.btn_container}>
          <JangBtnPay
            title={"다음"}
            onPress={() => {
              if (this.state.index < this.state.routes.length - 1) {
                this._handleIndexChange(
                  (this.state.index + 1) % this.state.routes.length
                );
              } else {
                this.props.navigation.navigate("Payment_D");
              }
            }}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  selectedTabItem: {
    borderLeftWidth: 1, // 선택된 탭의 왼쪽 테두리
    borderTopWidth: 1, // 선택된 탭의 상단 테두리
    borderRightWidth: 1, // 선택된 탭의 오른쪽 테두리
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FFEFC8",
  },
  unselectedTabItem: {
    borderBottomWidth: 1,
  },
  btn_container: {
    alignItems: "center",
    justifyContent: "center",
    width: 240,
    height: 50,
    borderRadius: 12,
    backgroundColor: "white",
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
  },
});
