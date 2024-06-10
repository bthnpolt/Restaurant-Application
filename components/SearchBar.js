import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({onTermChange,onTermSumbit,term}) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign  style={styles.iconStyle} name="search1" size={30} color="black" />
      <TextInput style={styles.inputStyle} placeholder='Ara' autoCapitalize='none' autoCorrect={false} value={term} onChangeText={onTermChange} onEndEditing={onTermSumbit}/>
    </View>
  )
}

const styles = StyleSheet.create({

    backgroundStyle:{
        flexDirection:"row",
        backgroundColor:"lightgray",
        margin:20,
        height:50,
        alignItems:"center",
        borderRadius:50
    },
    iconStyle:{
        marginHorizontal:15
    },
    inputStyle:{
        flex:1
    }
})