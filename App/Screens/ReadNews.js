import React from 'react'
import { View, Text, Dimensions, Image, Share, ScrollView, StyleSheet } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../Shared/Colors'

const ReadNews = () => {
    const navigation = useNavigation();
    const detailNews = useRoute().params.news;

    const shareNews = () => {
        Share.share({
            message: detailNews.title + "\nRead More" + detailNews.description
        })
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => shareNews()}>
                    <FontAwesome name="share" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <Image
                source={{ uri: detailNews.urlToImage }}
                style={styles.image}
            />
            <Text numberOfLines={3} style={styles.newsTitle}>{detailNews.title}</Text>
            <Text style={styles.newsName}>{detailNews.source?.name}</Text>
            <Text style={styles.newsDesc}>
                {detailNews.description}
            </Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.White
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    image: {
        height: Dimensions.get('screen').width * 0.80, borderRadius: 20
    },
    newsTitle: { marginTop: 10, fontWeight: '700', fontSize: 24 },
    newsName: { marginTop: 10, fontWeight: 'bold', fontSize: 22, color: Colors.Maroon },
    newsDesc: { marginTop: 20, fontWeight: '400', fontSize: 18, lineHeight: 27 }
})
export default ReadNews;