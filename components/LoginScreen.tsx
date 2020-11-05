import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Input, Button } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import { brownPalette } from '../assets/ColorPalette'




export interface LoginScreenProps {
    navigation: NavigationScreenProp<any,any>;
}
export default function LoginScreen({navigation}:{navigation:any}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Oyloe Inventory Management System</Text>
            <Input
                placeholder='Username'
                placeholderTextColor={brownPalette.brown7}
                leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
            />
            <Input
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor={brownPalette.brown7}
                leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
            />
            <Button 
                buttonStyle={styles.button}                
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
        color: brownPalette.brown10
        
    },
    button: {
        backgroundColor: brownPalette.brownBase,
        width: 200
    },
    input: {

    }
    
})