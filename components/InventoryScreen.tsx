import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, FlatList, StyleSheet} from 'react-native'
import {  NavigationScreenProp } from 'react-navigation'
import {Product} from '../types'
import { TextInput } from 'react-native-gesture-handler'

export interface InventoryScreenProps {
    navigation: NavigationScreenProp<any,any>;
    products: Product[]
}

const InventoryScreen: React.FC <InventoryScreenProps> = ({ navigation, products }) => {
    

    const [inventory, setInventory] = React.useState<Product[]>([{
        id: "z",
        name: "",
        description: "",
        package: '',
        weight: 1,
        quantity: 0
    }])


    useEffect(() => setInventory(products as Product[]),[])

    // const displayInventory = () => inventory.map(product => {
    //         return <View key={product.id} style={{flex: 3, alignItems: 'flex-start', justifyContent:'center'}} >
    //                 <Text style={{fontSize: 18}}>Product Name: {product.name}</Text>
    //                 <Text style={{fontSize: 12}}>Description: {product.description}</Text>
    //             </View>
        
    // })
        const renderItem = ({ item }) => (
            <Item name={item.name as Product[]} />
        );

    const Item = ({ name }) => (
        <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
            <TextInput style={styles.textInput} placeholder="Enter Quantity" />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={inventory}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#888',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between'

    },
    name: {
      fontSize: 32,
    },
    textInput: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000',
        backgroundColor: '#fff'
    }
  });

export default InventoryScreen