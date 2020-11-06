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
            {displayProductsDelivered()}
            <Divider style={{backgroundColor: brownPalette.brown10,height:5}} />
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
    )

    
}

const styles= StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'flex-end',
        backgroundColor: brownPalette.brown1,
        paddingBottom: 20

    },
    titleText: {
        fontSize: 28, 
        textAlign: 'center',
        flex: 1,
        padding: 20


    },
    buttonStyle: {
        backgroundColor: brownPalette.brownBase,
        borderRadius: 12,
        width: 200, 
        padding:8, 
        margin:10
    },
    titleStyle: {
        fontFamily: 'Futura', 
        color: brownPalette.brown10
    }
})
    
export default DeliveryScreen
