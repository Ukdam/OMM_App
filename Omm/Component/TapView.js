import * as React from 'react';
import {
    Animated,
    View,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import SwiperProduct from "../Component/SwiperProduct";

const FirstRoute = () => (
    <SwiperProduct />
);
const SecondRoute = () => (
    <SwiperProduct />
);

export default class TabViewExample extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: '채소' },
            { key: 'second', title: '고기' },
        ],
    };

    _handleIndexChange = (index) => this.setState({ index });

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
                        i === props.navigationState.index ? styles.selectedTabItem : styles.unselectedTabItem,
                    ];

                    return (
                        <TouchableOpacity
                            style={tabItemStyle}
                            onPress={() => this.setState({ index: i })}
                            key={route.key} >
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
    });

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={this._renderScene}
                renderTabBar={this._renderTabBar}
                onIndexChange={this._handleIndexChange}
                swipeEnabled={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',

    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16
    },
    selectedTabItem: {
        borderLeftWidth: 1, // 선택된 탭의 왼쪽 테두리
        borderTopWidth: 1, // 선택된 탭의 상단 테두리
        borderRightWidth: 1, // 선택된 탭의 오른쪽 테두리
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#FFEFC8"

    },
    unselectedTabItem: {
        borderBottomWidth: 1,
    },
});