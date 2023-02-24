import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';




export default function MateriScreenAlpukat ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{display: 'block'}}>
      
         <Image
            source={require('../../assets/materi/MateriQuizAlpukat.png')}
            style={{ width: 300, height: 200, marginBottom: 5, marginTop: 30,  resizeMode:'contain'}}
          />
        </View>
        <TouchableOpacity
          
          activeOpacity={0.5}  onPress={() => navigation.navigate('Quizanggur')}>
          <Image
            source={require('../../assets/button/buttonquizavocado.png')}
            style={{ width: 110, height: 100, marginTop: 5, marginRight: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          >
          <Image
            source={require('../../assets/button/buttonquizbanana.png')}
            style={{ width: 110, height: 100, marginTop: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          >
          <Image
            source={require('../../assets/button/buttonquizwatermelon.png')}
            style={{ width: 110, height: 100, marginBottom: 100, marginRight: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/button/buttonquizpomegranate.png')}
            style={{ width: 110, height: 100, marginBottom: 100, resizeMode:'contain'}}
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

