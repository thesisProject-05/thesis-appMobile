import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  Pressable,
  ScrollView,
}from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import LottieView from "lottie-react-native";
import { useTogglePasswordVisibility } from "../../../hooks/TogglePassword";

export default function OwnerRegistration({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [city, setCity] = useState("");
  const [cin, setCin] = useState();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  
    const newOwner = {
      fullName: fullName,
      email: email,
      password: password,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      city: city,
      cin: cin,
    };
    
    const register = () => {
        
       axios.post(`http://192.168.11.218:3001/owner/register`, newOwner)
     .then((response) => {
         navigation.navigate("OwnerLoginForm");
       console.log(response.data, " welcome");
      })
       .catch((error) => {

        console.log(error, "<=====3leeh>");
      })
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.NameStyle}>
          <View style={styles.viewforInputName}>
            <TextInput
              styles={styles.TextInput}
              placeholder="Full Name"
              placeholderTextColor="black"
              onChangeText={(fullName) => setFullName(fullName)}
            ></TextInput>
          </View>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(email) => setEmail(email)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            autoCapitalize="none"
            enablesReturnKeyAutomatically={true}
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={passwordVisibility}
            placeholderTextColor="black"
            onChangeText={(password) => setPassword(password)}
          ></TextInput>
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons
              name={rightIcon}
              size={22}
              color="#232344"
            />
          </Pressable>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Date Of Birth"
            placeholderTextColor="black"
            onChangeText={(dateOfBirth) => setDateOfBirth(dateOfBirth)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Phone Number"
            placeholderTextColor="black"
            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="CITY"
            placeholderTextColor="black"
            onChangeText={(city) => setCity(city)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="CIN"
            placeholderTextColor="black"
            onChangeText={(cin) => setCin(cin)}
          ></TextInput>
        </View>
        <TouchableOpacity
          //navigate to sign up screen for Doctor
          onPress={() => {
            navigation.navigate("OwnerRegistration", { id: id });
          }}
        >
          <Text style={styles.forgot_button}>Signup here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={register}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#44b3cc",
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 200,
  },
  loginText: {
    color: "#ffffff",
  },
  containerScroll: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  NameStyle: {
    display: "flex",
    flexDirection: "row",
  },
  viewforInputName: {
    backgroundColor: "#F6F6F6",
    borderRadius: 30,
    width: 150,
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderColor: "#44b3cc",
    borderWidth: 2,
    marginHorizontal: 10,
  },
  textButton: {
    color: "#ffffff",
  },
});
