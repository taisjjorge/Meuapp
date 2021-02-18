import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from  '@react-navigation/bottom-tabs'


import Login from '../Views/Login'
import Cadastro from '../Views/Cadastro'
import Home from '../Views/Home'

const routeTab = createBottomTabNavigator()

const Tab = () => {
    return(
        <routeTab.Navigator initialRouteName='TelaA' tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: { fontSize: 16}
        }}>
            <routeTab.Screen name = "Login" component={Login} />
            <routeTab.Screen name = "Cadastre-se" component={Cadastro} />
            <routeTab.Screen name = "Produtos" component={Home} />
        </routeTab.Navigator>
    )
}

export default Tab

const styles = StyleSheet.create({
    
})