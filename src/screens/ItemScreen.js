// src/components/ItemScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemScreen = ({ route, navigation }) => {
  const { info } = route.params;
  console.log(info)

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom:40, color:'#fff',fontSize:18}}>Item Page</Text>
      <Text style={styles.textwhite}>{info.title}</Text>
      {info.body!=undefined&&<Text style={styles.textwhite}>{info.body}</Text>}
      {info.completed!=undefined&&<Text style={styles.textwhite}>Completed: {info.completed==false?'No':'Yes'}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textwhite: {
    fontSize: 15,
    marginBottom: 20,
    paddingHorizontal:20,
    textAlign:'center',
    color: '#fff'
  },
});
export default ItemScreen;
