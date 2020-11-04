import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  InventoryScreen from './InventoryScreen'
import { Product } from '../types'

export interface InventoryProps {
    products: Product[]
}

export const InventoryStackScreen:React.FC<InventoryProps> = ({ products }) =>{
    const InventoryScreenStack = createStackNavigator()
    return (
        <InventoryScreenStack.Navigator>
            <InventoryScreenStack.Screen name="Inventory" 
                options={{
                    title:"Inventory",
                    }}>
                {(props:any) => <InventoryScreen products={products} {...props} />}
            </InventoryScreenStack.Screen>
        </InventoryScreenStack.Navigator>
    )
} 