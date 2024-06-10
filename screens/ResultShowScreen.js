import { StyleSheet, Text, View ,FlatList, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import Yelp from '../Api/Yelp'
import { AntDesign } from '@expo/vector-icons';

export default function ResultShowScreen({route}) {
    const [result, setResult] = useState(null);
    const {item:id} = route.params

    const getResult =  async(id)=>{
        const response = await Yelp.get(`/${id}`);
        setResult(response.data);
    } 
    useEffect(() => {
      getResult(id);
    }, []);

    if(!result){
        return null;
    }
    
  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      {
        result.is_closed ? <AntDesign  style={styles.icon}name="close" size={30} color="red"/>:
        <AntDesign style={styles.icon} name="check" size={30} color="green" />
      }
      <FlatList
        data={result.photos}
        renderItem={({item})=>{
          return <Image style={styles.image} source={{uri:item}} />;
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({

  image:{
      height:180,
      margin:10,
      borderRadius:20
  },
  title:{
      alignSelf:"center",
      fontSize:25,
      marginVertical:10
  },
  phone:{
    alignSelf:"center",
    fontSize:20
  },
  icon:{
    alignSelf:"center",
    marginVertical:5,
    
  }

})