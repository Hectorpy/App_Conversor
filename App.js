import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Conversor from './src/Conversor';


export default class App extends Component{
  render(){
  return (
    <View style={styles.container}>

      <Image
      source={require('./img/LogoConvertorr.png')}
      style={styles.logo}
      />

      <Conversor moeadaA='USD' moeadaB='BRL'/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8c00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    top: 130
  },
});
