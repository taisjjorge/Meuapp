import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextCenter = ({text}) => {
    return (
        <div>
            <View style={css.container}>
                <Text style={css.text}>
                    {text}
                </Text>
            </View>
        </div>
    )
}

export default TextCenter;

const css = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#378efd'
    },
    text: {
        fontSize: 50,
        color: '#fff',
    }
})

