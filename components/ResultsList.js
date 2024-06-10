import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'
import { useNavigation } from '@react-navigation/native'


export default function ResultsList({title,results}) {

  const navigation=useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({item})=>{
          return(
            <TouchableOpacity onPress={()=>{
              navigation.navigate("ResultShow",{item :item.id});
            }}>
                <ResultsDetail result={item}/>
            </TouchableOpacity>
          )
        }} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom:15,
  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    marginLeft:15,
    marginBottom:5,

  },
})