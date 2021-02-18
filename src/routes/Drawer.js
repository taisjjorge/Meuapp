import React from 'react'
import { createDrawerNavigator } from  '@react-navigation/drawer'

import Login from '../Views/Login'
import Home from '../Views/HomeHome'
import Cadastro from '../Views/Cadastro'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
    return (
        // initial carrega Login de início
        <routeDrawer.Navigator initialRouteName="Login">
            {/* .Screen realiza a navegação de fato */}
            <routeDrawer.Sreen name= "Login" component={Login}/>
            <routeDrawer.Sreen name= "Cadastre-se" component={Cadastro}/>
            <routeDrawer.Sreen name= "Produtos" component={Home}/>
        </routeDrawer.Navigator>
    )
}

export default Drawer