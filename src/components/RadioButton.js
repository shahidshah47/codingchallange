import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ label, value, selectedValue, onValueChange, selected }) => {
  return (<TouchableOpacity style={styles.container} onPress={() => onValueChange(value)}>
    <View style={[styles.circle, selected]} />
    {label && <Text style={styles.label}>{label} </Text>}
  </TouchableOpacity>)
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  
  label: {
    fontSize: 14,
    color: '#fff',
  },
});

export default RadioButton;
