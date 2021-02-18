import React from 'react'
import { SafeAreaView, Text } from 'react-native' 
import { NavigationContainer } from '@react-navigation/native'

// import Drawer from './Drawer'
import Tab from './Tab'

const Routes = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                {/* <Drawer /> */}
                <Tab />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Routes