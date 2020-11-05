import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, FlatList, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import {Product} from '../types'
import { TextInput } from 'react-native-gesture-handler'
import {funColors, brownPalette} from '../assets/ColorPalette'

export interface InventoryProps {
    navigation: NavigationScreenProp<any,any>;
    products: Product[]
}

const InventoryScreen: React.FC <InventoryProps> = ({ products }) => {    

    const [inventory, setInventory] = React.useState<Product[]>([{
        _id: "",
        name: "",
        description: "",
        package: '',
        weight: 1,
        quantity: 0
    }])

    useEffect(() => setInventory(products as Product[]),[])

    const renderInventory = ({ item }:{item:Product}) => (
        <Item name={item.name} quantity={item.quantity} key={item._id} description={item.description}/>
    );

    const Item = ({ name ,quantity, description }:{name:string, quantity: number, description:string}) => (
        <View style={styles.item} >
            <View style={styles.productInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.description}>Current Count: </Text>
                    <TextInput style={styles.textInput} defaultValue={`${quantity}`}/>
                </View>
                <Text style={styles.description}>Previous Count: {quantity}</Text>
            </View>
        </View>
    );
        
    return (
        <SafeAreaView style={styles.container} >
            <FlatList
                data={inventory}
                renderItem={renderInventory}
                keyExtractor={(product) => {
                    return product._id}
                }
            />
            <Button buttonStyle={{backgroundColor: brownPalette.brownBase}} title="Submit Daily Inventory" />
        </SafeAreaView>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 
        // '#003f5c'
        // '#7a5195' Purple
        // "#ef5675"
        '#888'
    },
    item: {
        backgroundColor: brownPalette.brown1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10

    },
    name: {
        fontSize: 18,
        fontFamily: 'Futura'

    },
    textInput: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#fff',
        width: 40,
        textAlign: 'center',
        alignSelf: 'flex-end'
        
    },
    description: {
        fontSize:16,
        fontFamily:'Futura'
    },
    productInfo: {
        width: 150
    }
});

export default InventoryScreen