import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import Colors from '../Shared/Colors'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import HeadlineList from '../Components/Home/HeadlineList'
import TopHeadline from '../Components/Home/TopHeadline'
import GlobalApi from '../Services/GlobalApi'

export default function Home() {

    const [newsList, setNewsList] = useState([]);
    const [isLoding, setIsLoding] = useState(true);

    useEffect(() => {
        getByCategory('latest');
    }, [])

    const getTopHeadLine = async () => {
        const result = (await GlobalApi.getTopHeadLine).data;
        setNewsList(result.articles);
    }
    const getByCategory = async (category) => {
        setIsLoding(true);
        const result = (await GlobalApi.getByCategory(category)).data;
        setNewsList(result.articles);
        setIsLoding(false);
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    NEWS APP
                </Text>
                <Ionicons name="notifications" size={30} color="black" />
            </View>
            <CategoryTextSlider selectCategory={(category) => {
                getByCategory(category)
            }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {isLoding ? (
                    <ActivityIndicator
                        size={80}
                        color={Colors.Blue}
                        style={styles.activityIndicator} />
                ) : (
                    <View>
                        <TopHeadline newsList={newsList} />
                        <HeadlineList newsList={newsList} />
                    </View>
                )}

            </ScrollView>
        </View>
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
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.Black
    },
    activityIndicator: { flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: Dimensions.get('screen').height * 0.4 },
})