import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnerView from './assets/screens/OunerView/OnerView'
import  Chat from './assets/screens/Chat'
import Home from "./assets/screens/Home";
import Blog from "./assets/screens/Blog";
import Login  from "./assets/screens/Login"



export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer style={styles.container}>
    <Stack.Navigator>
   

    <Stack.Screen name="owner" component={OnerView} />
    <Stack.Screen name="chat" component={Chat} />
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="blog" component={Blog} />
    <Stack.Screen name="login" component={Login} />

    
    
    
   
      </Stack.Navigator>
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
});