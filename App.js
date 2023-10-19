import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {HOME,QuizTab} from './Screen/CustomNavigation';
import prism from './Screen/Prism';
import pyramid from './Screen/Pyramid';
import cylinder from './Screen/Cylinder';
import funnel from './Screen/Funnel';
import ball from './Screen/Ball';

const Tab = createBottomTabNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }} name='HOME' component={HOME}></Tab.Screen>
        <Tab.Screen options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document-edit-outline" size={size} color={color} />
          ),
        }} name='แบบสอบถาม' component={QuizTab}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImCon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Im: {
    width: 120,
    height: 120,
    margin: 20,
    justifyContent: 'center',
  }
  

});
