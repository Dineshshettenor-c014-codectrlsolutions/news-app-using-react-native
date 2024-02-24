import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Shared/Colors';

export default function CategoryTextSlider({ selectCategory }) {
    const [active, setActive] = useState(1);

    const categoryList = [
        {
            id: 1,
            name: 'Latest'
        },
        {
            id: 2,
            name: 'World'
        },
        {
            id: 3,
            name: 'Business'
        },
        {
            id: 4,
            name: 'Sports'
        },
        {
            id: 5,
            name: 'Life'
        },
        {
            id: 6,
            name: 'Movie'
        },
        {
            id: 7,
            name: 'Entertainment'
        },
        {
            id: 8,
            name: 'General'
        },
        {
            id: 9,
            name: 'Health'
        },
        {
            id: 10,
            name: 'science'
        }
    ]

    const onCategoryClick = (itemId) => {
        setActive(itemId);
    }

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={categoryList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            onCategoryClick(item.id);
                            selectCategory(item.name);
                        }}>
                            <Text style={item.id == active ? styles.selectedText : styles.unSelectedText}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                }}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    selectedText: {
        marginRight: 10,
        fontWeight: '700',
        fontSize: 20,
        color: Colors.Blue,
        paddingBottom: 5
    },
    unSelectedText: {
        marginRight: 10,
        fontWeight: '700',
        fontSize: 20,
        color: Colors.Gray,
        paddingBottom: 5
    }
})