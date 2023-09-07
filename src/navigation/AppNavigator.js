// src/navigation/AppNavigator.js
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';
import BackComponent from '../components/BackComponent';
import TabBarLabel from '../components/TabBarLabel';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
    text: '#ffffff',
  },
};
// Create a stack navigator for the Home tab
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{ headerShown: false }}
      />
      <HomeStack.Screen 
      name="ItemScreen" 
      component={ItemScreen} 
      options={{
        headerStyle: { backgroundColor: 'black' },
        headerTitle: '',  // This will remove the title
        headerLeft: (props) => <BackComponent {...props} />,
      }} 
      />
    </HomeStack.Navigator>
  );
}

// Create the main stack navigator
const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="LoginScreen" component={LoginScreen} />
      <MainStack.Screen name="MainTabs" component={MainTabNavigator} />
    </MainStack.Navigator>
  );
};

// Create bottom tab navigator for Home and Profile
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <BottomTabBar {...props} style={{ backgroundColor: 'blue' }} />
      )}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black'
        },
        tabBarIconStyle: { display: "none"},
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center'
        }
      }}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} 
      options={{
        tabBarLabel: ({ focused, color }) => (
          <TabBarLabel label="Show" focused={focused} color={color} />
        )
      }}
      />
      <Tab.Screen name="ProfileTab" component={ProfileScreen} 
      options={{
        tabBarLabel: ({ focused, color }) => (
          <TabBarLabel label="Profile" focused={focused} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
        <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;