import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, FlatList } from 'react-native';


import Produto from '../../components/Produto'

import Celulares from '../../assets/celular.jpg'
import Nokia from '../../assets/img01.jpg'
import Siemens from '../../assets/img02.jpg'
import Sonyericsson from '../../assets/img03.jpg'
import StarTAC from '../../assets/img05.jpg'
import Sonyeric from '../../assets/img06.png'

const dados = [
  {
    id: Math.random(),
    produto: "Nokia Tijolão",
    descricao: "Snake Game e muito mais!",
    preco: "99,90",
    imagem: <img src={Nokia} style={{width: 160, height: 100}}/> ,
  },
  {
    id: Math.random(),
    produto: "Siemens",
    descricao: "Celular da Xuxa",
    preco: "79,90",
    imagem: <img src={Siemens} style={{width: 100, height: 100}}/> ,
  },
  {
    id: Math.random(),
    produto: "SonyEricsson",
    descricao: "Mais desejados!",
    preco: "99,90",
    imagem: <img src={Sonyericsson} style={{width: 100, height: 100}}/> ,
  },
  {
    id: Math.random(),
    produto: "Motorola Antigo",
    descricao: "Relíquia",
    preco: "89,90",
    imagem: <img src={StarTAC} style={{width: 100, height: 100}}/> ,
  },
  {
    id: Math.random(),
    produto: "SonyEricsson",
    descricao: "Maior custo/benefício",
    preco: "89,90",
    imagem: <img src={Sonyeric} style={{width: 100, height: 100}}/> ,
  },

]

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background}
        source={Celulares}>
          <Text style={styles.h1}>
            Confira nossas ofertas
          </Text>
      </ImageBackground>
      <View style={styles.containerProd}>
          <FlatList 
              data={dados}
              keyExtractor={(item) => `${item.id}`}
              renderItem={({item}) => (
                <Produto produto={item.produto} descricao={item.descricao} preco={item.preco} imagem={item.imagem}/>
              )}/>

       </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63c2d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 360,
  },
  h1: {
    fontSize: 18,
    fontWeight: 'bolder',
    color: '#fff',
    backgroundColor: '#ff0033',
    shadowColor: "#378edf",
    shadowOpacity: 0.75,
    shadowRadius: 20,
    shadowOffset: {
    height: 15,
    width: 0,
    },
  },
  containerProd: {
    flex: 7,

  },
  
});
