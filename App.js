import * as React from 'react';

import { Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SplashScreen from './components/screens/SplashScreen'
import HomeScreen from './components/screens/HomeScreen' 
import MateriScreenAnggur from './components/Materiscreens/MateriScreenAnggur'
import MateriScreenAlpukat from './components/Materiscreens/MateriScreenAlpukat'
import QuizScreenAlpukat from './components/Quizscreens/QuizScreenAlpukat'
import QuizScreenAnggur from './components/Quizscreens/QuizScreenAnggur'




export default function app() {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
      <Stack.Screen 
        name="Splashscreen" 
        component={SplashScreen} />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} />
    
        <Stack.Screen
          name="Quizalpukat"
          component={QuizScreenAlpukat}
        />
        <Stack.Screen
          name="Quizanggur"
          component={QuizScreenAnggur}
        />

        <Stack.Screen 
        name="Materialpukat" 
        component={MateriScreenAlpukat} />
      
      <Stack.Screen 
        name="Materianggur" 
        component={MateriScreenAnggur} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}