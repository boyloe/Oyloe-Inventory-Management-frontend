import * as React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { Button, Card, ListItem } from 'react-native-elements'
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
            const { product } = route.params
            setProductsDelivered([...productsDelivered, {name: product.name, quantity: product.quantity}])
            params = route.params
        } 
        
    }, [route.params])

    const displayProductsDelivered = () => {
        return productsDelivered.slice(1).map((product,index) => {
                // return <Text key={index}>{product.name}  {product.quantity}</Text>
                return <ListItem key={index} containerStyle={{backgroundColor:brownPalette.brown1}} topDivider={true} bottomDivider={true}>
                        <ListItem.Content>
                            <ListItem.Title style={{fontSize: 30, color: brownPalette.brown8}}>{product.name}</ListItem.Title>
                            <ListItem.Subtitle style={{fontStyle: 'italic', color: brownPalette.brown9}}>Quantity: {product.quantity}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
        })
    }

    const displayLogo = () => {
        return <Image 
                    source={require('../assets/images/OIMSLogo.png')}
                    style={styles.image} />
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
        setProductsDelivered([{ name:'', quantity: ''}])
        navigation.navigate('Home')       
    }
    return(
        <View style={styles.container}>
            <Text style={{fontFamily: 'Futura', 
                fontSize: 42, 
                color: brownPalette.brown9, 
                marginTop: 50, 
                marginLeft: 15,
                alignSelf: 'flex-start',
                textDecorationLine: 'underline'}}>Delivery Ticket</Text>
            <View style={{flex:1}}>
                {productsDelivered.length > 1 
                    ? <Card containerStyle={{padding:0, width: 400, backgroundColor: brownPalette.brown1, borderWidth:0}}>
                        {displayProductsDelivered()}
                        </Card>
                    : displayLogo()
                }
                
            </View>
            <Button 
                buttonStyle={styles.buttons}
                title="Add Product to Ticket"
                titleStyle={{fontFamily: 'Futura', color: brownPalette.brown10}}
                onPress={() => navigation.navigate('DeliveryForm')}
            />    
            <Button 
                buttonStyle={styles.buttons}
                titleStyle={{fontFamily: 'Futura', color: brownPalette.brown10}}
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
        justifyContent:'center',
        backgroundColor: brownPalette.brown1

    },
    titleText: {
        fontSize: 28, 
        textAlign: 'center',
        flex: 1,
        padding: 20


    },
    buttons: {
        backgroundColor: brownPalette.brownBase,
        borderRadius: 12,
        width: 200, 
        padding:4, 
        margin:10
    },
    imageContainer: {
        flex: 1,
        paddingTop: 50, 

    }, 
    image: {
        height: 250,
        width: 250,
        opacity: 0.6,
        alignSelf: 'center',
        marginTop: 100,
        backgroundColor: brownPalette.brown1
    },
})
    
export default DeliveryScreen
