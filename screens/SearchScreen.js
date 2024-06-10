import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResault from '../hooks/useResault'
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResault();
  const [term, setTerm] = useState('');
  console.log(results);
  const filterResultsByPrice = (price) => {

    return results.filter((result) => {
      return result.price === price
    })

  }
  return (
    <View>
      <SearchBar onTermChange={setTerm} term={term}
        onTermSumbit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {results.length == 0 ? <Text style={{alignSelf:"center",fontSize:25,fontVariant:"bold"}}>Uygun Restoran Bulunamadı</Text> : <>
        <ResultsList title={'Ucuz Restoranlar'} results={filterResultsByPrice('₺')} />
        <ResultsList title={'Uygun Restoranlar'} results={filterResultsByPrice('₺₺')} />
        <ResultsList title={'Pahalı Restoranlar'} results={filterResultsByPrice('₺₺₺')} /> 
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({

})