import * as React from "react";
import { Image, StyleSheet, Text, View} from "react-native";

const WelcomeLogin = () => {
  return (
    <View style={styles.welcomeLoginView}>
      <Image
        style={styles.undrawChoosingHouseRe1rv7Icon}
        resizeMode="cover"
        source={require("../../assets/undrawChoosingHouseRe1rv7Icon.png")}
      />
      <Text style={styles.welcomeText1}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      
      <Text style={styles.signInText}>sign in</Text>
      <View style={styles.rectangleView2} />
     
      <Text style={styles.yourEmailText}>Your email</Text>
      <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      <Text style={styles.passwordText}>Password</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../../assets/Vector.png")}
      />
      <Text style={styles.dontHaveAnyAccountSignu}>
        <Text style={styles.dontHaveAny}>{`Don’t have any account ? `}</Text>
        <Text style={styles.signupText}>signup</Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../assets/Ellipse 11.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../../assets/Ellipse 12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  undrawChoosingHouseRe1rv7Icon: {
    position: "absolute",
    top: 152,
    left: 59,
    width: 262,
    height: 193,
    overflow:"hidden",
  },
  welcomeText: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
  welcomeText1: {
    position: "absolute",
    top: 381,
    left: 145,
    fontWeight: "700",
    fontFamily: "Lato",
    color: "#696969",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 438,
    left: 42,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 310,
    height: 51,
  },
  rectangleView1: {
    position: "absolute",
    top: 640,
    left: 42,
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: 310,
    height: 51,
  },
  signInText: {
    position: "absolute",
    top: 652,
    left: 163,
    fontSize: 24,
    fontFamily: "Lato",
    color: "#fff",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 528,
    left: 42,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 310,
    height: 51,
  },
  yourEmailText: {
    position: "absolute",
    top: 458,
    left: 56,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#000",
    textAlign: "left",
  },
  forgetPasswordText: {
    position: "absolute",
    top: 588,
    left: 247,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#0092bf",
    textAlign: "left",
  },
  passwordText: {
    position: "absolute",
    top: 544,
    left: 56,
    fontSize: 14,
    fontFamily: "Lato",
    color: "#a1a1a1",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "1.96%",
    width: "6.36%",
    top: "67.85%",
    right: "13.74%",
    bottom: "34.19%",
    left: "74.9%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dontHaveAny: {
    color: "#000",
  },
  signupText: {
    color: "#0092bf",
  },
  dontHaveAnyAccountSignu: {
    position: "absolute",
    top: 731,
    left: 104,
    fontSize: 14,
    fontFamily: "Lato",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 46,
    left: 0,
    width: 75,
    height: 80,
  },
  welcomeLoginView: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default WelcomeLogin;
