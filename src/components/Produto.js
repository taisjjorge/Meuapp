import React from 'react';
import { View , Text, StyleSheet } from 'react-native';


const Produto = ({produto, descricao, preco, imagem}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.h3}>Produto: {produto}</Text>
        <Text style={styles.h3}>Descrição: {descricao}</Text>
        <Text style={styles.h3}>Preço: {preco}</Text>
        <Text style={styles.h3}>Imagem: {imagem}</Text>
      </View>
  )
}

export default Produto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  h1: {
    fontSize: 15,
    marginTop: 10,
    color: '#252525'
    
  }

})