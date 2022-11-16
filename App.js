import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OwnerRegistration from "./screens/homeOwner/auth/OwnerSignupForm";
import OwnerLoginForm from "./screens/homeOwner/auth/OwnerLoginForm";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Pressable, Text,Modal, View,Button,LogoTitle } from 'react-native';

import FirstPage from "./screens/HomeScreen";
import SecondPage from "./screens/students/ItntoPage";
import ThirdPage from "./screens/students/ThirdPage";

import OnerView from './screens/OunerView/OnerView'
import  Chat from './screens/Chat'
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Login  from "./screens/Login";



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
    
    {/* <NavigationContainer style={styles.container}> */}
      
      {/* <Stack.Navigator initialRouteName="FirstPage"> */}
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'rootsIt', //Set Header Title
            headerStyle: {
              backgroundColor: '#833471', //Set Header color
            },
            headerTintColor: '#F0FFF', //Set Header text color
            // headerTitleStyle: {
            //   fontWeight: 'bold', //Set Header text style
            // },
            // headerTitle: (props) => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            )
          }}
          
        />
        
      
    
         <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Second Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
         <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            title: 'Third Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />

    
   

    <Stack.Screen name="owner" component={OnerView} />
    <Stack.Screen name="chat" component={Chat} />
    <Stack.Screen name="home" component={Home} />
    <Stack.Screen name="blog" component={Blog} />
    <Stack.Screen name="login" component={Login} />

    
    
    
   

      </Stack.Navigator>
      
    </NavigationContainer>
  
  )
        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
  },
    shadowOffset: {
      width: 0,
      height: 2,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

});
