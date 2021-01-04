import React, {useState} from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../Components/ResultList';


const SearchScreen = () => {
  const[term, setTerm] = useState('');
  const [SearchApi, results, errormessage] = useResults();

  const filterResultsbyPrice = (price)=>{
    // price==='$' || '$$' || '$$$'
    return results.filter(results =>{
      return results.price === price;



    });

  };
 

  return (
    <>
    <SearchBar 
    term={term}
     onTermChange={setTerm}
       onTermSubmit = {() => {SearchApi(term)}}
     />
{ errormessage ? <Text>{errormessage}</Text> : null }
     
    
    <ScrollView>
     <ResultList results = {filterResultsbyPrice('$')}
      title = "Cost Effective"
        
      />
     <ResultList
      results = {filterResultsbyPrice('$$')}
      title = "Bit Pricier"
        
      />
     <ResultList 
     results = {filterResultsbyPrice('$$$')} 
     title = "Big Spender"
      
     />
     </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
