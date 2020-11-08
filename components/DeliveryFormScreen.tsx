import React, {useState} from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import { Button, Divider} from 'react-native-elements'
import { Formik, Field, Form } from 'formik';
import {  NavigationScreenProp } from 'react-navigation'
import { brownPalette } from '../assets/ColorPalette'
import { Product } from '../types'
import { Picker }  from 'react-native'




export interface HomeScreenProps {
    navigation: NavigationScreenProp<any,any>;
    products: Product[]
}

export const DeliveryFormScreen:React.FC<HomeScreenProps> = ({navigation, products}) => {

    const [selectedProduct, setSelectedProduct] = useState('CyberMul')
    const [quantity, setQuantity] = useState('')


    const addProductToDelivery = () => {
        navigation.navigate('Delivery', {
            product: {
                name: selectedProduct,
                quantity: quantity
            }
        })
    }

    const getProductOptions = (products:Product[]) => {
        return products.map(product => {
            return <Picker.Item 
                    label={product.name} 
                    value={product.name} 
                    color={brownPalette.brown10}
                    key={product._id} />
        })
    }

    


    
    return (
            <View style={styles.container}> 
                <View style={styles.pickerContainer}>
                    <Picker 
                        selectedValue={selectedProduct}
                        style={styles.pickerStyle}
                        itemStyle={styles.pickerItemStyle}
                        onValueChange={(value, key) => {
                            setSelectedProduct(value)
                        }}
                        
                        
                    >   
                        {getProductOptions(products)}
                    </Picker>
                </View>  
                <View style={styles.textInputContainer}>
                    <TextInput 
                        style={styles.textBox} 
                        onChangeText={text => setQuantity(text)} >
                    </TextInput>
                </View> 
                <View style={styles.buttonContainer}>
                    <Button 
                        buttonStyle={styles.buttonStyle}
                        titleStyle={styles.buttonTitleStyle}
                        title='Add Product to Ticket'
                        onPress={addProductToDelivery}
                    />                  
                </View>   
                
            </View>
                
                
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faf5ef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputContainer: {
        flex:1,
        width: 400,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBox: {
        borderRadius: 8,
        backgroundColor: brownPalette.brown3,
        width: '80%',
        padding: 10,
        margin: 10
    },
    buttonContainer: {
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
    buttonTitleStyle: {
        fontFamily: 'Futura', 
        color: brownPalette.brown10,
        fontWeight: '700'
    },
    buttonStyle: {
        backgroundColor: brownPalette.brownBase,  
        paddingVertical: 10,
        width: 300,
        margin:10,
        borderRadius: 7
    },
    pickerContainer:{
        flex:1,
        justifyContent: 'center'
    },
    pickerStyle: {
        height: 50, 
        width: 200,        
    },
    pickerItemStyle: {
        height: 120, 
        width: 180,
        backgroundColor: '#f0e3d0', 
        borderRadius: 12,       

    }
});