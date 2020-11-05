import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import { Product } from '../types'
import { useState, useEffect } from 'react'

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
        console.log({params})
        if (params != undefined || params != route.params) {
            const {product} = route.params
            setProductsDelivered([...productsDelivered, {name: product.name, quantity: product.quantity}])
            params = route.params
        } 
        
    }, [route.params])

    const displayProductsDelivered = () => {
        console.log({productsDelivered})
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
        }).then(console.log)         
    }
    return(
        <View style={styles.container}>
            {displayProductsDelivered()}
            <Button 
                style={styles.buttons}
                title="Add Product to Ticket"
                onPress={() => navigation.navigate('DeliveryFormScreen')}
            />    
            <Button 
                style={styles.buttons}
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
        justifyContent:'center'
    },
    titleText: {
        fontSize: 28, 
        textAlign: 'center',
        flex: 1,
        padding: 20


    },
    buttons: {
        width: 200, 
        padding:4, 
        margin:10}
})
    
export default DeliveryScreen
