import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import userinfo from '../assets/user.json';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Username and Password are required.');
      return;
    }
    if(userinfo.username != username || userinfo.password != password){
      Alert.alert('Validation Error', 'Invalid username or password.');
      return;
    }
    const user = { username: username, fullName: 'John Doe' };
    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    navigation.navigate('MainTabs');
  };

  const handleLoginWithGoogle = async () => {
      GoogleSignin.configure({
          androidClientId: '891615878073-6kkus2aq955si5il55dh22fsrntrhskd.apps.googleusercontent.com'
      });
      GoogleSignin.hasPlayServices().then((hasPlayService) => {
        if (hasPlayService) {
            GoogleSignin.signIn().then((userInfo) => {

              console.log(JSON.stringify(userInfo))
              const user = { username: username, fullName: userInfo.user.name };
              dispatch({ type: 'LOGIN_SUCCESS', payload: user });
              navigation.navigate('MainTabs');

            }).catch((e) => {

              console.log("ERROR IS: " + JSON.stringify(e));
            })
        }
      }).catch((e) => {
        console.log("ERROR IS: " + JSON.stringify(e));
      })

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button
        title="Login"
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
        onPress={handleLogin}
      />
            <View style={styles.or_value}>
              <Text style={{ color: '#ffffff' }}>OR</Text>
            </View>

      <Button
        title="Login with Google"
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
        onPress={handleLoginWithGoogle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#ffffff'
  },
  loginBtn: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  or_value: {
    padding:'40px', 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    width:'100%',
    color: '#ffffff' 
  },
});
export default LoginScreen;
