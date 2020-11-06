import * as React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { Input, Button } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import { brownPalette } from '../assets/ColorPalette'




export interface LoginScreenProps {
    navigation: NavigationScreenProp<any,any>;
}
export default function LoginScreen({navigation}:{navigation:any}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/OIMSLogo.png')}
                    style={styles.image} />
            </View>
            <Input
                placeholder='Username'
                placeholderTextColor={brownPalette.brown7}
                leftIcon={{ type: 'font-awesome', name: 'chevron-right', color: brownPalette.brownBase}}
            />
            <Input
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor={brownPalette.brown7}
                leftIcon={{ type: 'font-awesome', name: 'chevron-right', color: brownPalette.brownBase}}
            />
            <Button 
                buttonStyle={styles.button}
                titleStyle={{fontFamily: 'Futura', color: brownPalette.brown10}}
                title="Login"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'center',
        backgroundColor: brownPalette.brown1        
        
    },
    titleText: {
        fontSize: 28, 
        textAlign: 'center',
        
    },
    button: {
        backgroundColor: brownPalette.brownBase,
        width: 200,
        color: brownPalette.brownBase
    },
    input: {

    },
    imageContainer: {

    },
    image: {
        
    }
    
})