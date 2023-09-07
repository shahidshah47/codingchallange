// src/components/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { Button } from '@rneui/themed';

const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textwhite}>User Profile</Text>
      <Text style={styles.textwhite}>{user?.fullName}</Text>
      <Text style={styles.textwhite}>{user?.username}</Text>
      <Button
        title="Logout"
        buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ color: 'white', marginHorizontal: 20 }}
        onPress={handleLogout}
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
  textwhite: {
    fontSize: 15,
    marginBottom: 20,
    paddingHorizontal:20,
    textAlign:'center',
    color: '#fff'
  },
});
export default ProfileScreen;
