import React, { useState} from 'react'
import { StyleSheet, TextInput, View, Text, Image, Alert, StatusBar, TouchableOpacity } from "react-native";

import User from '../../assets/user.png'

export default function Cadastro() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const cadastrar =() => {
        Alert(nome)
        Alert(sobrenome)
        Alert(telefone)
        Alert(email)
        Alert(senha)
    }

    return(
         
        <View style={styles.container}>
            <StatusBar hidden />

            <Text style={styles.h1}>Cadastre-se</Text>

            <Image source={User} 
                style={styles.logo}/>
            <TextInput placeholder="Nome" style={styles.input} 
                onChangeText={text=> setNome(text)}/>
            <TextInput placeholder="Sobrenome" style={styles.input}
                onChangeText={text=> setSobrenome(text)}/>
            <TextInput placeholder="Telefone" style={styles.input}
                onChangeText={text=> setTelefone(text)}/>
            <TextInput placeholder="Email" style={styles.input}
                oncChangeText={text=> setEmail(text)}/>
            <TextInput placeholder="Senha" style={styles.input}
                secureTextEntry={true} onChangeText={text=> setSenha(text)}/>


            <TouchableOpacity style={styles.btn} onPress={() => cadastrar()}>
                <Text style={styles.btnp}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63c2d1',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo:{
        width:50,
        height:50,   
      },
    input: {
        border: 'solid 2px #378edf',
        margin: 10,
        padding: 12,
        width: 200,
        backgroundColor:'#fff',
        fontSize:15,
        borderRadius: 5,
        textAlign: 'center', 

    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around'
        
    },
    btn: {
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#252525',
        width:100,
        height:30,
        
    },
    btnp: {
        color:'#fff',
        fontWeight: 'bold'
        
    },
    h1: {
        fontSize: 25,
        fontWeight: 'bolder',
        color: '#fff',
        backgroundColor: '#ff0033',
        width: '100%',
        height: 35,
        marginBottom: '30px',
        textAlign: 'center'
    }
});