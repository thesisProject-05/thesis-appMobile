import React from 'react'
import { TouchableOpacity,Text,StyleSheet ,Image, View} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown';
export default function OwnerView({navigation}) {
    const nav = (val) => {
        navigation.navigate(val)
    }
  return (
    <View style={styles.row}>
    
   <TouchableOpacity  onPress = {()=>{navigation.navigate("home")}}>
   
   <Image style={styles.logo} source={require("../../../assets/tofla.jpg")} autoPlay/>
   </TouchableOpacity>
   <ModalDropdown style={[styles.logOut]} defaultValue={"Option"}  options={['HouseOwner','logOut',"ActSet"]}>
  
   
   
   
   </ModalDropdown>

   <Text  style={[styles.owner]}> OwnerView</Text>
   
   
    

  <View  style={styles.row}>
    <TouchableOpacity  style={[styles.group]} onPress = {()=>{navigation.navigate("home")}}>
    <Text> Home</Text> 
    </TouchableOpacity>
    <TouchableOpacity  style={[styles.group]}  onPress = {()=>{navigation.navigate("chat")}}>
   <Text> Chat</Text>
   </TouchableOpacity>
   <TouchableOpacity style={[styles.group]} onPress = {()=>{navigation.navigate("blog")}}>
    <Text > Blog</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.group]} onPress = {()=>{navigation.navigate("login")}}>
    <Text> login</Text>
    </TouchableOpacity>
    
   </View>
   </View>
  )
}

const styles = StyleSheet.create({
    group: {
        flexDirection: "row",
    flexWrap: "wrap",
    rowReverse: "row",
    width: 90,
    height: 50,
    marginTop:"110%",
    color: '#000080',
},
 row:{

    flexDirection: "row",
    flexWrap: "wrap",
    
 }
   
    ,
    logo: {
        width: 50,
        height: 40,
        borderRadius: 40,
        marginTop:10,
        marginLeft:"88%"
      },
    owner: {
         color: 'blue',
         left:10,
         fontSize: 30,
         textAlign:"center",
         right:30,
         
        
    },
    

    logOut:{
        color: '#00BFFF',
        width: 80,
         height: 100,
        marginTop:10,
        marginLeft:"88%", 

    }
      


});   
  