import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  LoginScreen from './LoginScreen'

export const LoginStackScreen = () =>{
    const LoginStack = createStackNavigator()
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="Login" component={LoginScreen} />
        </LoginStack.Navigator>
    )
} 