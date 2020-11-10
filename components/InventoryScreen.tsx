import * as React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StatusBar, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import { Button} from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import {Product} from '../types'

import { brownPalette } from '../assets/ColorPalette'
import { ScrollView } from 'react-native-gesture-handler'

export interface InventoryProps {
    navigation: NavigationScreenProp<any,any>;
    products: Product[]
}

const InventoryScreen: React.FC <InventoryProps> = ({ navigation,products }) => {    

    const [inventory, setInventory] = React.useState<Product[]>([{
        _id: "",
        name: "",
        description: "",
        package: '',
        weight: 1,
        quantity: 0
    }])

    const [currentQuantities, setCurrentQuantities] = useState([''])

    useEffect(() => {        
        setInventory(products as Product[])
    },[])

    const renderInventory = (inventory:Product[]) => (
        inventory.map((product:Product, index:number) => {
            return <Item name={product.name} quantity={product.quantity} key={product._id} description={product.description} index={index} />
        }
    ));

    const Item = ({ name ,quantity, description }:{name:string, quantity: number, description:string, index:number}) => (
        // <View style={styles.item} >
        //     <View style={styles.productInfoContainer}>
        //         <Text style={styles.name}>{name}</Text>
        //         <Text style={styles.description}>{description}</Text>
        //     </View>
        //     <View style={styles.countContainer}>
                // <View style={styles.currentCountContainer}>
                //     <Text style={styles.currentCount}>Current Count: </Text>
                    <TextInput style={styles.input}
                    />
                // </View>    
        //         <Text style={styles.previousCount}>Previous Count: {quantity}</Text>            
        //     </View>
        // </View>            
    );
        
    return (
        <SafeAreaView style={styles.container} >      
            
                {renderInventory(inventory)}
            
            <Button 
                buttonStyle={{
                    backgroundColor: brownPalette.brownBase,
                    padding: 10,
                    }}
                title="Submit Daily Inventory"
                titleStyle={{color: brownPalette.brown9, fontFamily: 'Futura'}}
                containerStyle={{borderRadius: 7, width: 300, alignSelf: 'center', marginVertical:50 }}
                onPress={() => navigation.navigate('Home')}
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
        height: 180,
        shadowOffset: {width:5, height: 5},
        shadowOpacity: 0.4,
        shadowColor: brownPalette.brown7
        

    },
    productInfoContainer: {
        
    },
    name: {
        fontSize: 34,
        fontFamily: 'Futura',
        color: brownPalette.brown10,
        alignSelf: 'flex-start'

    },
    input: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: brownPalette.brownBase,
        backgroundColor: brownPalette.brown1,
        width: 40,
        height: 30,
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
        flexDirection: 'row',
        
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