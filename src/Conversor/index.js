import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import api from './Services/api';



//currency/USD_BRL?token=4220|dot5AOGI6WFu0RodK2NQB4gxqqHrM89W
export default class Conversor extends Component{

    constructor(props){
        super(props)
        this.state = { 
            moeadaA: props.moeadaA,
            moeadaB: props.moeadaB,
            moeadaB_valor: 0,
            valorConvertido: 0,
        };

        this.converter = this.converter.bind(this);

    }

    async converter(){
        let de_para = this.state.moeadaA + '_' + this.state.moeadaB;
        const response = await api.get(`currency/${de_para}?token=4220|dot5AOGI6WFu0RodK2NQB4gxqqHrM89W`);
        let cotacao = response.data[de_para];

        let resultado = (cotacao * parseFloat(this.state.moeadaB_valor));

        this.setState({
            valorConvertido: resultado.toFixed(2)
        });

        Keyboard.dismiss();

    }

  render(){

    const {moeadaA, moeadaB} = this.props;

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>{moeadaA} PARA {moeadaB}</Text>

        <TextInput
        placeholder='Valor a ser convertido'
        style={styles.areaInput}
        onChangeText={(moeadaB_valor)=> this.setState({moeadaB_valor})}
        keyboardType='numeric'
        />

        <TouchableOpacity style={styles.btnArea} onPress={this.converter}>
            <Text style={styles.textBtn}>Converter</Text>
        </TouchableOpacity>

        <Text style={styles.valor}>{(this.state.valorConvertido === 0) ? '' : this.state.valorConvertido }</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 30,
    top: -70,
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    color: '#000',
    borderRadius: 5,
    top: -70,
  },
  btnArea: {
    width: 280,
    height: 45,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 15,
    top: -70,
  },
  textBtn: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  valor: {
    color: '#000',
    fontSize: 30,
    top: -60,
  },
});
