// src/components/BottomSheet.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from '../components/RadioButton';
const BottomSheet = ({ onFetchData, type }) => {
  
  const [selectedIndex, setIndex] = useState(type);
  useEffect(() => {
    handleFetchData(type)
  }, []);
  const handleFetchData = (index) => {
    setIndex(index);
    if(index==0){
      onFetchData('todos');
    }else{
      onFetchData('posts');
    }
     // Fetch data action dispatched in the HomeScreen
  };

  return (
    <View style={{minHeight:160, borderTopColor: 'white',display:'flex',
    borderStyle: 'solid',
    borderTopWidth: 2,
    gap:10,
    paddingHorizontal:30,justifyContent:'center'}}>
      <RadioButton
        label="Fetch Todos"
        value="0"
        selectedValue={selectedIndex}
        onValueChange={handleFetchData}
        selected={selectedIndex==0?styles.selected:null}
      />
      <RadioButton
        label="Fetch Posts"
        value="1"
        selectedValue={selectedIndex}
        onValueChange={handleFetchData}
        selected={selectedIndex==1?styles.selected:null}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:10,
    color: 'white',
  },
  textWhite: {
    color: 'white'
  },
  textStyle: {
    width: "80%",
    alignSelf: 'center',
    paddingVertical:5,
    paddingHorizontal: 20,
    borderBottomColor: 'white',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  selected: {
    backgroundColor: 'blue',
  },
});
export default BottomSheet;
