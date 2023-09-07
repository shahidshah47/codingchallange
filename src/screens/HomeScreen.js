// src/components/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions/dataActions';
import BottomSheet from '../components/BottomSheet';
import Todos from '../components/Todos';
import Posts from '../components/Posts';
import { ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const type = useSelector((state) => state.data.type);
  const data = useSelector((state) => state.data.data); 
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [is_todos, setTodos] = useState(true);
  const [is_posts, setPosts] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
      if (!isAuthenticated) {
        navigation.navigate("LoginScreen");
      }
    }, [isAuthenticated]);

  const getTimeOfDayGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 12) {
      return 'Good morning';
    } else if (hour >= 12 && hour < 16) {
      return 'Good afternoon';
    } else {
      return 'Good night';
    }
  };

  const handleShowBottomSheet = () => {
    setBottomSheetOpen(true);
  };

  const handleFetchData = (type) => {
    if(type=='todos'){
      setPosts(false);
      setTodos(true);
    }else{
      setPosts(true);
      setTodos(false);
    }
    setLoading(true);
    dispatch(fetchData(type));
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText,styles.textWhite]}>{`${getTimeOfDayGreeting()} ${user?.fullName}`}</Text>
      </View>
      <ScrollView>
      {isLoading && <ActivityIndicator size="large" />}
      {is_todos && (
        <Todos data={data} navigation={navigation} />
      )}
      {is_posts && (
        <Posts data={data} navigation={navigation} />
      )}
      </ScrollView>
      
      <BottomSheet
        onFetchData={handleFetchData}
        type={type}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
  },
  textWhite: {
    color: 'white'
  },
  header: {
    marginTop: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 16,
  },
  footer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  footerText: {
    fontSize: 16,
  },
});

export default HomeScreen;
