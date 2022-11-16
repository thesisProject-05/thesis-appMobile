import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:`#faebd7`
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            studentView 
          </Text>
          <Button
            title="Reset navigator state to Third Page"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'ThirdPage',
                    params: { someParam: 'reset' },
                  },
                ],
              })
            }
          />
          
          
          
        </View>
      
      </View>
    </SafeAreaView>
  );
}

export default SecondPage;