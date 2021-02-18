import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { 
    Container,
    InputArea, 
    CustomButton, 
    CustomButtonText, 
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonBold

} from './styles'

import SignInput from '../../components/SignInput'


export default () => {
    return(
        <Container>
            <Image source={require('../../assets/logofull.png')}
             style={styles.logo}/>
            
            <InputArea>
                <SignInput 
                placeholder="Digite seu email"/>
                
                <SignInput 
                    placeholder="Digite sua senha"
                    password={true}/>

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

            </InputArea>
            <SignMessageButton>
                <SignMessageButtonText>
                    Ainda não possui uma conta?
                </SignMessageButtonText>
                <SignMessageButtonBold>
                    Cadastre-se
                </SignMessageButtonBold>
            </SignMessageButton>
        </Container>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:330,
        height:160,

      },
})