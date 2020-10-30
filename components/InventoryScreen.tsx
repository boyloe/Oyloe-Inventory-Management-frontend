import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, Button, TextInput} from 'react-native'
import { StackNavigator, NavigationScreenProp} from 'react-navigation'
import {Product} from '../types'

export interface InventoryScreenProps {
    navigation: NavigationScreenProp<any,any>;
    products: Product[]
}

const InventoryScreen: React.FC <InventoryScreenProps> = ({ navigation, products }) => {
    

    const [inventory, setInventory] = React.useState<Product[]>([{
        id: "zero",
        name: "",
        description: "",
        package: '',
        weight: 1,
        quantity: 0
    }])


    useEffect(() => setInventory(products as Product[]),[])

    const displayInventory = () => inventory.map(product => {
        {console.log(product.name)}
        return (
            <View style={{flex: 3, alignItems: 'flex-start', justifyContent:'center'}} key={product.id}>
                <Text style={{fontSize: 18}}>Product Name: {product.name}</Text>
                <Text style={{fontSize: 12}}>Description: {product.description}</Text>
            </View>
        )
    })

    return (
        <View>            
            {displayInventory()} 
            <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}} >
                <Button 
                title="Go Back Home"
                onPress={() => navigation.navigate('Home')}
                />
            </View>    
        </View>
        
    )
}

export default InventoryScreen