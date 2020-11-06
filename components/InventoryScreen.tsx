import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { Button} from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import {Product} from '../types'
import { TextInput} from 'react-native-gesture-handler'
import { brownPalette } from '../assets/ColorPalette'

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

    useEffect(() => {        
        const sortedProducts =  products.sort(function(a, b) {
            let nameProductA = a.name.toUpperCase(); // ignore upper and lowercase
            let nameProductB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameProductA < nameProductB) {
                return -1;
            }
            if (nameProductA > nameProductB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
        setInventory(sortedProducts as Product[])
    },[])

    const renderInventory = ({ item }:{item:Product}) => (
        <Item name={item.name} quantity={item.quantity} key={item._id} description={item.description}/>
    );

    const Item = ({ name ,quantity, description }:{name:string, quantity: number, description:string}) => (
        <View style={styles.item} >
            <View style={styles.productInfoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
                <View style={styles.countContainer}>
                    <View style={styles.currentCountContainer}>
                        <Text style={styles.currentCount}>Current Count: </Text>
                        <TextInput style={styles.Input} defaultValue={`${quantity}`}/>
                    </View>    
                    <Text style={styles.previousCount}>Previous Count: {quantity}</Text>            
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
                ListFooterComponent={<Button 
                                        buttonStyle={{
                                            backgroundColor: brownPalette.brownBase,
                                            padding: 10,
                                            }}
                                        title="Submit Daily Inventory"
                                        titleStyle={{color: brownPalette.brown1}}
                                        containerStyle={{borderRadius: 10, width: 150, alignSelf: 'center', marginBottom:40 }}
                                        />}
            />               
        </SafeAreaView>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: brownPalette.brown1,
        
    },
    item: {
        backgroundColor: brownPalette.brown4,
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRadius: 10,
        height: 250,
        shadowOffset: {width: 7, height: 7},
        shadowOpacity: 0.4,
        shadowColor: brownPalette.brown9
        

    },
    productInfoContainer: {
        
    },
    name: {
        fontSize: 34,
        fontFamily: 'Futura',
        color: brownPalette.brown10,
        alignSelf: 'flex-start'

    },
    Input: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: brownPalette.brownBase,
        backgroundColor: brownPalette.brown1,
        width: 40,
        textAlign: 'center',
        alignSelf: 'flex-end',

        
        
    },
    description: {
        fontSize:20,
        fontFamily:'Futura', 
        color: brownPalette.brown8,
        alignSelf: 'flex-start'
    },
    countContainer: {
        alignSelf: 'flex-end'
    },
    currentCountContainer: {
        flexDirection: 'row'
    },
    currentCount: {
        fontSize:20,
        fontFamily:'Futura', 
        color: brownPalette.brown8
    },
    previousCount: {
        fontSize:20,
        fontFamily:'Futura', 
        color: brownPalette.brown8
    }
});

export default InventoryScreen