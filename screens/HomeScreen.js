import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image, Alert, TouchableOpacity, ImageBackground } from 'react-native';

const FirstPage = ({ navigation }) => {
  const image = require('../assets/student.png')
  const image2 = require('../assets/icons8-house-100.png')
  const back = require('../assets/tesrt.png')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>

        <View
          style={{
            // flex: 5,
            // alignItems: 'center',
            // justifyContent: 'center',
            // display:'flex'
            flexDirection: 'row',
            flexWrap: 'wrap',
            // rowReverse:'row'

          }}>
          <ImageBackground source={back}
            style={{ height: 710, width: 400 }}>

            <Text
              style={{
                fontSize: 22,
                textAlign: 'center',
                marginBottom: 60
              }}>
              Hello this our first application to help students for a better experince in their university life and provide them with a interface for renting
            </Text>
            <View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 120
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}  >
                <Image
                  source={image}
                  style={{ width: 160, height: 150 }}
                />
                <Text style={{ fontSize: 20, margin: 40 }}>Student?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('OwnerLoginForm')}>
                <Image
                  source={image2}
                  style={{ width: 160, height: 150, marginLeft: 60 }}
                />
                <Text style={{ fontSize: 20, margin: 42, marginLeft: 63 }}>House Owner?</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default FirstPage;