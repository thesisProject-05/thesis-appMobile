import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OwnerRegistration from "./screens/homeOwner/auth/OwnerSignupForm";
import OwnerLoginForm from "./screens/homeOwner/auth/OwnerLoginForm";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnerView from './assets/screens/OunerView/OnerView'
import  Chat from './assets/screens/Chat'
import Home from "./assets/screens/Home";
import Blog from "./assets/screens/Blog";
import Login  from "./assets/screens/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="OwnerLoginForm"
          options={{
            title: "Login ",
            headerStyle: {
              backgroundColor: "#077871",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={OwnerLoginForm}
        ></Stack.Screen>
        <Stack.Screen
          name="OwnerRegistration"
          options={{
            title: "Registration ",
            headerStyle: {
              backgroundColor: "#077871",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={OwnerRegistration}
        ></Stack.Screen>

    {/* <NavigationContainer style={styles.container}> */}
    {/* <Stack.Navigator> */} 
   

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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
