import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewDeliveryScreen from './DeliveryScreen';
import { DeliveryFormScreen } from './DeliveryFormScreen';
import { brownPalette} from '../assets/ColorPalette'
import { FontAwesome5 } from '@expo/vector-icons/'


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
            },
            headerBackImage: () => <FontAwesome5 name='chevron-left' size={24} color={brownPalette.brown7}/>,
            headerBackTitle: 'Back',           
            headerBackTitleStyle: {
                color: brownPalette.brown7
            }
        }}
        >
            <DeliveryStack.Screen name="Delivery" component={NewDeliveryScreen} />
            <DeliveryStack.Screen name="DeliveryFormScreen" component={DeliveryFormScreen} />
        </DeliveryStack.Navigator>
    )
} 