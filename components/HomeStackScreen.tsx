import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen from './HomeScreen'
import {brownPalette} from '../assets/ColorPalette'

export const HomeStackScreen = () =>{
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'Futura',
                    fontSize: 24,
                    fontWeight: '600',
                    color: brownPalette.brown10
                },
                headerStyle: {
                    backgroundColor: brownPalette.brown3
                }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    )
} 