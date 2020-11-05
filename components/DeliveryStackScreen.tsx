import * as React from 'react';
import { Button, Text, View } from 'react-native';
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
                headerStyle: {
                backgroundColor: brownPalette.brown6
            }
    }}
        >
            <DeliveryStack.Screen name="Delivery" component={NewDeliveryScreen} />
            <DeliveryStack.Screen name="DeliveryFormScreen" component={DeliveryFormScreen} />
        </DeliveryStack.Navigator>
    )
} 