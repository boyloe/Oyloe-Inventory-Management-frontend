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
            <View style={styles.inputContainer}>
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
        flex: 1,
        backgroundColor: brownPalette.brownBase,
        width: 200,
        color: brownPalette.brownBase,
        margin: 50,
        
    },
    input: {
        width: 300
    },
    imageContainer: {
        flex: 1,
        paddingTop: 50, 

    }, 
    image: {
        height: 250,
        width: 250
    },
    inputContainer: {
        flex: 1,
        width: 300,
        justifyContent: 'flex-start'
    }
    
})