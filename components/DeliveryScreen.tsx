import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button, Divider } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import { Product } from '../types'
import { useState, useEffect } from 'react'
import { brownPalette } from '../assets/ColorPalette'

const baseURL = "https://oyloe-inventory-management.herokuapp.com"

export interface DeliveryScreenProps {
    navigation: NavigationScreenProp<any,any>;
    route: any
    products: Product[]
}

const DeliveryScreen:React.FC<DeliveryScreenProps> = ({navigation,route}) => {

    const [productsDelivered, setProductsDelivered] = useState([{
        name: '',
        quantity: ''
    }])
    let params = route.params
    useEffect(() => {
        if (params != undefined || params != route.params) {
            const {product} = route.params
            setProductsDelivered([...productsDelivered, {name: product.name, quantity: product.quantity}])
            params = route.params
        } 
        
    }, [route.params])

    const displayProductsDelivered = () => {
        return productsDelivered.map((product,index) => {
                return <Text key={index}>{product.name} {product.quantity}</Text>
        })
    }
    //submits to delivery collection BE, updates Inventory collection BE,  and redirects to home}
    const handleDeliverySubmit = () => {
        fetch(`${baseURL}/deliveries`, {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({productsDelivered})
        })        
    }
    return(
        <View style={styles.container}>
            <View style={styles.productsDeliveredContainer}>
                {displayProductsDelivered()}
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    buttonStyle={styles.buttonStyle}
                    title="Add Product to Ticket"
                    titleStyle={styles.titleStyle}
                    onPress={() => navigation.navigate('DeliveryFormScreen')}
                />   
                <Button 
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    title="Submit Delivery Ticket"
                    onPress={handleDeliverySubmit}  
                />   
            </View>
        </View>
    )

    
}

const styles= StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'flex-end',
        backgroundColor: brownPalette.brown1,
        paddingVertical: 20

    },
    productsDeliveredContainer: {
        flex: 3,
        marginVertical:20,
        borderWidth:1,
        borderColor: '#000',
    },
    buttonStyle: {
        backgroundColor: brownPalette.brownBase,
        width: 240,  
        paddingVertical: 10,
        margin:10,
        borderRadius: 7
    },
    buttonContainer: {
        flex:1,
        borderWidth:1,
        borderColor: '#000',

        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    titleStyle: {
        fontFamily: 'Futura', 
        color: brownPalette.brown10
    }
})
    
export default DeliveryScreen
