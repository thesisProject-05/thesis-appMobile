import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useTogglePasswordVisibility } from "../../../hooks/TogglePassword";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import LottieView from "lottie-react-native";

// home owner's login screen :
const OwnerLoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [id, setId] = useState("");
  const login = async () => {
    try {
      // home owner's email and password
      const owner = {
        email: email,
        password: password,
      };
      const sendingInfo = await axios.post(
        "http://localhost:3001/owner/login"
        ,
        owner,
        {
          withCredentials: true,
        }
      );
      console.log(sendingInfo);
      navigation.navigate("owner");
    } catch (err) {
      console.log(err);
    }
  };

  // owner's  login screen
  return (
    <ScrollView style={styles.container1}>


      <View style={styles.container}>
        <Text style={styles.titleofApp}>Roost It</Text>
        <View style={styles.inputView}>
          <TextInput
            styles={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="black"
            onChangeText={(e) => setEmail(e)}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <View style={styles.inputViewPassword}>
            <TextInput
              styles={styles.TextInput}
              placeholder="Password"
              secureTextEntry={passwordVisibility}
              placeholderTextColor="black"
              onChangeText={(e) => setPassword(e)}
            ></TextInput>
            <Pressable style={styles.eye} onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="#44b3cc"
              />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //navigate to sign up screen for Doctor
          onPress={() => {
            navigation.navigate("OwnerRegistration", { id: id });
          }}
        >
          <Text style={styles.forgot_button}>Signup here</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          //button who activate the login function
          onPress={()=>navigation.navigate('owner')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default OwnerLoginForm;
//style for the login screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  //styling

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
    padding: 10,
    marginLeft: 20,
    marginTop: 100,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontSize: 18,
    color: "#44b3cc",
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
  },
  container1: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 200,
    height: 250,
    top: 10,
    borderRadius: 0,
    left: 28,
  },
  loginText: {
    color: "#ffffff",
  },
  eye: {
    left: 40,
    top: 5,
  },
  inputViewPassword: {
    display: "flex",
    flexDirection: "row",
  },
  titleofApp: {
    fontSize: 50,
    paddingBottom: 20,
    color: "#046B82",
  },
});
