import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ShopListCss } from "../css/ShopListCss"

function FlatListTest({ navigation }) {
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
                <TouchableOpacity
                    style={ShopListCss.item}
                    onPress={() => navigation.navigate("P_SelectProduct", { todoText: item.text })}
                >
                    <Text style={ShopListCss.text}>
                        {item.text}
                    </Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default FlatListTest;