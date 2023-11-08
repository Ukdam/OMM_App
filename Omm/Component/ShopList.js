import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ShopListCss } from "../css/ShopListCss"

function FlatListTest() {
    const todos = [
        { id: 1, text: '원대점' },
        { id: 2, text: '원대점2' },
        { id: 3, text: '원대점3' },
    ];

    return (
        <FlatList
            style={ShopListCss.list}
            data={todos}
            ItemSeparatorComponent={() => <View style={ShopListCss.separator} />}
            renderItem={({ item }) => (
                <View style={ShopListCss.item}>
                    <Text style={ShopListCss.text}>
                        {item.text}
                    </Text>
                </View>
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default FlatListTest;