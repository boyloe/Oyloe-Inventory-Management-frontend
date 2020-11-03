import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button, Input, ListItem } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import { Product } from '../types'
import { useState, useEffect } from 'react'

export interface NewDeliveryScreenProps {
    navigation: NavigationScreenProp<any,any>;
    route: any
    products: Product[]
}

const NewDeliveryScreen:React.FC<NewDeliveryScreenProps> = ({navigation,route}) => {

    const [productsDelivered, setProductsDelivered] = useState([{
        name: '',
        quantity: 1
    }])
    
    useEffect(() => {

    }, [route.params])

    const displayProductsDelivered = () => {
        
    }


    return(
        <View style={styles.container}>
            {displayProductsDelivered()}
            <Button 
                style={styles.buttons}
                title="Add Product to Delivery"
                onPress={() => navigation.navigate('DeliveryFormScreen')}
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
    
export default NewDeliveryScreen
