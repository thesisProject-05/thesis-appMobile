import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import axios from "axios";
export default function OwnerView({ navigation }) {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.52.99:3001/owner/all")
      .then((response) => setPhoto(response.data), console.log(photo))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        <Image
          style={styles.logo}
          source={require("../../assets/tofla.jpg")}
          autoPlay
        />
        <Text style={[styles.owner]}> OwnerView</Text>
        <ModalDropdown
          style={[styles.logOut]}
          defaultValue={"Option"}
          options={["HouseOwner", "logOut", "ActSet"]}
        ></ModalDropdown>
      </TouchableOpacity>

      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
        <View style={styles.categoriesItemContainer}>
          <Image
            style={styles.categoriesPhoto}
            source={{
              uri: "https://immoneuftunisie.com/wp-content/uploads/2016/12/listing_photo1018_9891913301426501776.jpg",
            }}
          />
          <Text style={styles.categoriesName}>name</Text>
          <Text style={styles.categoriesInfo}>location</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
        <View style={styles.categoriesItemContainer}>
          <Image
            style={styles.categoriesPhoto}
            source={{
              uri: "https://lh3.googleusercontent.com/p/AF1QipNh6Hbha39YAigIgZxXD_A4z6W2w64IY-jXBVTM=s680-w680-h510",
            }}
          />
          <Text style={styles.categoriesName}>name</Text>
          <Text style={styles.categoriesInfo}>location</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
        <View style={styles.categoriesItemContainer}>
          <Image
            style={styles.categoriesPhoto}
            source={{
              uri: "https://lh3.googleusercontent.com/p/AF1QipOGO2fHJf0MqVsEGLQlj5bwKekD-1f57tSlwJmc=s680-w680-h510",
            }}
          />
          <Text style={styles.categoriesName}>name</Text>
          <Text style={styles.categoriesInfo}>location</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="rgba(73,182,77,0.9)">
        <View style={styles.categoriesItemContainer}>
          <Image
            style={styles.categoriesPhoto}
            source={{
              uri: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/376840256.jpg?k=5a96be849cd1ccc0b0cd767e3bd95236a246355ea4599e4df338308be50ddca1&o=&hp=1",
            }}
          />
          <Text style={styles.categoriesName}>name</Text>
          <Text style={styles.categoriesInfo}>location</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.group]}
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Text> Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.group]}
          onPress={() => {
            navigation.navigate("chat");
          }}
        >
          <Text> Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.group]}
          onPress={() => {
            navigation.navigate("blog");
          }}
        >
          <Text> Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.group]}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text> login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowReverse: "row",
    width: 90,
    height: 50,
    marginTop: "30%",
    color: "#000080",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  logo: {
    width: 50,
    height:45,
    borderRadius: 40,
    marginTop: 40,
    marginLeft: "85%",
  },
  owner: {
    color: "blue",
    left:10,
    fontSize: 30,
    textAlign: "center",
    right: 20,
    marginTop:-40,
    marginLeft:30,
    
  },

  logOut: {
    color: "#00BFFF",
    width: 70,
    height: 100,
    marginTop: 2,
    marginLeft: "90%", 
   
       
  },
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    padding: "auto",
    width: "100%",
    height: 120,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3, 
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    marginTop: 8,
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5,
  },
});
