import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'

import Colors from '../../Shared/Colors'
import { useNavigation } from '@react-navigation/native';

export default function HeadlineList({ newsList }) {

  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={newsList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <View style={{ height: 1, backgroundColor: 'lightgray', marginVertical: 15 }} />
            <TouchableOpacity onPress={() => navigation.navigate('ReadNews', { news: item })}
              style={styles.newsCard}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.newsImage}
              />
              <View style={{ marginRight: 100 }}>
                <Text numberOfLines={3} style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsName}>{item.source?.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  newsCard: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
  newsImage: { height: 120, width: 120, borderRadius: 10, marginRight: 10 },
  newsTitle: { marginTop: 10, fontWeight: 'bold', fontSize: 18 },
  newsName: { marginTop: 10, fontWeight: 'bold', fontSize: 16, color: Colors.Maroon }
})