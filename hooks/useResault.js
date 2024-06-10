import { useEffect, useState } from "react";
import Yelp from "../Api/Yelp";

export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi= async(searchTerm)=>{
        try {
            const response =await Yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'İstanbul',
                }
                
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Bağlantı Hatası');
            
        }
    }

    useEffect(()=>{
        searchApi('Kebap');
    },[])

    return [searchApi,results];
};