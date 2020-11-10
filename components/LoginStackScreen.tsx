import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  LoginScreen from './LoginScreen'
import { brownPalette } from '../assets/ColorPalette'

export const LoginStackScreen = () =>{
    const LoginStack = createStackNavigator()
    return (
        <LoginStack.Navigator 
        screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily: 'Futura',
                fontSize: 24,
                fontWeight: '600',
                color: brownPalette.brown9
            },
            headerStyle: {
                backgroundColor: brownPalette.brown3
            }
    }}>
            <LoginStack.Screen name="Login" component={LoginScreen}/>
        </LoginStack.Navigator>
    )
} 