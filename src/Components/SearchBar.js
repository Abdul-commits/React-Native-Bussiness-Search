import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    
  return (
    <View style={styles.background}>
    <Feather name="search" size={50} />
      <TextInput 
      autoCapitalize="none"
      autoCorrect={false}
      style = {styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText ={onTermChange}
      onEndEditing = {onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
background: {
    marginTop: 15,
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10

},
inputStyle: {
    fontSize: 30,
    borderColor: 'white',
    borderWidth: 1,
    flex: 1

}

});

export default SearchBar;
