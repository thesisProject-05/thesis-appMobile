import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {
    StyleSheet,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
  } from "react-native";
import LottieView from "lottie-react-native";
import link from "../../../Adress";


const HomeOwnerVerificationScreen = ({navigation,route}) => {
  const [verify,setVerify]=useState("");
  const checkCode= ()=>{
    let verificationBody = {
        id: route.params.id,
        activationCode:verify
    }
    console.log(verificationBody);
    axios.post(`${link}/owner/check`,verificationBody).then((result)=>{
        navigation.navigate("OwnerLoginForm")
        alert("welcome to our platform, thank you for choosing us")
    }).catch((err)=>{console.log(err)})
  }
  return (
    <ScrollView style={styles.containerScroll}>
    <LottieView 
     style={styles.logo}
     source={require("../../../assets/str.png")}
     autoPlay
    />
    <Text style={styles.text}>Write the code here</Text>
    <View style={styles.inputView}>
    <TextInput
            styles={styles.TextInput}
            placeholder="Verification Code"
            placeholderTextColor="black"
            onChangeText={(text) => {setVerify(text)}}
          ></TextInput>
    </View>
    <TouchableOpacity style={styles.loginBtn}  onPress={() =>{checkCode()}}>
            <Text style={styles.loginText}>Submit</Text>
</TouchableOpacity>
    </ScrollView>
  )
}



  
const styles = StyleSheet.create({
    logo: {
      width: 150,
      height: 200,
      top: 10,
      borderRadius: 0,
      left: 40,
    },
    containerScroll: {
      flex: 1,
    },
    text: {
      fontSize: 20,
      color: "#44b3cc",
      marginHorizontal: 90,
    },
    inputView: {
      backgroundColor: "#F6F6F6",
      borderRadius: 30,
      width: "90%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
      borderColor: "#44b3cc",
      borderWidth: 2,
      marginHorizontal: 18,
      marginVertical: 50,
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 20,
      marginLeft: 20,
      marginTop: 10,
    },
    loginBtn: {
      width: "90%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      backgroundColor: "#44b3cc",
      marginTop: 10,
      marginHorizontal: 18,
    },
    loginText: {
      color: "#ffffff",
    },
  });

export default HomeOwnerVerificationScreen