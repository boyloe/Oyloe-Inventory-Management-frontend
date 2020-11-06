import * as React from 'react';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  HomeScreen from './HomeScreen'
import NewDeliveryScreen from './DeliveryScreen';
import { DeliveryFormScreen } from './DeliveryFormScreen';
import { brownPalette} from '../assets/ColorPalette'

export const DeliveryStackScreen = () =>{
    const DeliveryStack = createStackNavigator()
    return (
        <DeliveryStack.Navigator
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
        }}
        >
            <DeliveryStack.Screen name="Delivery" component={NewDeliveryScreen} />
            <DeliveryStack.Screen name="DeliveryFormScreen" component={DeliveryFormScreen} />
        </DeliveryStack.Navigator>
    )
} 