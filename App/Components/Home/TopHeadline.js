import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions, StyleSheet } from 'react-native'

import Colors from '../../Shared/Colors';
import { useNavigation } from '@react-navigation/native';

export default function TopHeadline({ newsList }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={newsList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReadNews', { news: item })}
                        style={styles.newsCard}
                    >
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={styles.newsImage}
                        />
                        <Text numberOfLines={3} style={styles.newsTitle}>{item.title}</Text>
                        <Text style={styles.newsName}>{item.source?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    newsCard: { width: Dimensions.get('screen').width * 0.75, marginRight: 10, marginBottom: 20 },
    newsImage: { height: Dimensions.get('screen').width * 0.70, borderRadius: 20 },
    newsTitle: { marginTop: 10, fontWeight: 'bold', fontSize: 20 },
    newsName: { marginTop: 10, fontWeight: 'bold', fontSize: 18, color: Colors.Maroon }
})