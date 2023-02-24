import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';




export default function MateriScreenAlpukat ({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{display: 'block'}}>
      
         <Image
            source={require('../../assets/materi/MateriQuizAnggur.png')}
            style={{ width: 300, height: 200, marginBottom: 5, marginTop: 30,  resizeMode:'contain'}}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonTenseStyle}
          activeOpacity={0.5}  onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/button/buttonquizgrape.png')}
            style={{ width: 110, height: 100, marginTop: 5, marginRight: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTenseStyle}>
          <Image
            source={require('../../assets/button/buttonquizpinapple.png')}
            style={{ width: 110, height: 100, marginTop: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTenseStyle}>
          <Image
            source={require('../../assets/button/buttonquizpear.png')}
            style={{ width: 110, height: 100, marginBottom: 100, marginRight: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/button/buttonquizorange.png')}
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

