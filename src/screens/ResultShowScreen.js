import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import { color } from 'react-native-reanimated';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) =>{
    const [result, setResult] = useState(null);
   const id = navigation.getParam('id');

   const getResult = async(id) => {
       const response = await yelp.get(`/${id}`);
      setResult (response.data);

   };
   useEffect(()=>{

    getResult(id);

 }, []);

 if (!result) {
     return null;
 }

    return <>

        <Text style = {styles.text}>{result.name}</Text>
        <Text style = {styles.text}> {result.phone}</Text> 
        

     
        <FlatList
        data = {result.photos}
        keyExtractor={(photo) => photo}
        renderItem = {({item}) => {
            return <Image style = {styles.image} source ={{uri: item}}/>
            
          } }
          

        

        />
    </>

    


};
const styles = StyleSheet.create({
    image:{
        height:200,
        width: 300,
        alignItems: 'center',
        marginLeft: 50
        
    },
    text: {

        fontWeight: 'bold',
        color: 'black',
        fontSize: 40,
        marginLeft: 10,
        textAlign: 'center'

    }


});
export default ResultShowScreen;