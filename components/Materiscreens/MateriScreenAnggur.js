import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';




export default function MateriScreenAnggur ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{display: 'block'}}>
         <Image
            source={require('../../assets/materi/MateriAnggur.png')}
            style={{ width: 500, height: 300, marginBottom: 10, marginTop: 50, resizeMode:'contain'}}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}  onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/button/buttonkiri.png')}
            style={{ width: 50, height: 100, marginBottom: 10, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}  onPress={() => navigation.navigate('Materialpukat')}>
          <Image
            source={require('../../assets/button/buttonkanan.png')}
            style={{ width: 50, height: 100, marginBottom: 10, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        
         
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: '1',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#FFF9B6',
    flexDirection: "row",
    flexWrap: "wrap",
  }
});

