import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

export default function ResultsDetail({result}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri:result.image_url}}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Yıldızlı Restoran , {result.review_count} Değerlendirme</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        height:120,
        width:250,
        borderRadius:8,
        marginBottom:5
    },
    name:{
        fontWeight:"bold"
    },
})