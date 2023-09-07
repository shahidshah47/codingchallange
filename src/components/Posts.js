// src/components/Todos.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions/dataActions';

const Posts = ({ data, navigation }) => {
    return(
    <View style={styles.container}>
        {data.map((item) => (
        <TouchableOpacity onPress={() => navigation.navigate('ItemScreen',{info:item})} key={item.id}><Text style={[styles.textWhite,styles.textStyle]} key={item.id}>{item.title}</Text></TouchableOpacity>
        ))}
    </View>
    )
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
      }
  });
export default Posts;
