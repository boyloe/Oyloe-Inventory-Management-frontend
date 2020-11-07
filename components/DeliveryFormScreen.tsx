import React, {useState} from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import { Button, Divider} from 'react-native-elements'
import {Picker} from 'react-native'
import { Formik, Field, Form } from 'formik';
import {  NavigationScreenProp } from 'react-navigation'
import { brownPalette } from '../assets/ColorPalette'
import { Product } from '../types'
import   DropDownPicker from 'react-native-dropdown-picker'



export interface HomeScreenProps {
    navigation: NavigationScreenProp<any,any>;
    products: Product[]
}

export const DeliveryFormScreen:React.FC<HomeScreenProps> = ({navigation, products}) => {

    


    const addProductToDelivery = (values:{}) => {
        navigation.navigate('Delivery', {
            product: values
        })
    }

    const getProductOptions = (products:Product[]) => {
        return products.map(product => {
            return {label: product.name, value: product.name}
        })
    }


    
    return (
        <Formik
            initialValues={{ name: products[0].name, quantity: '0'}}
            onSubmit={values => addProductToDelivery(values)}
                        
        >
            
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
            <View style={styles.container}>                         
                <Picker 
                    selectedValue={values.name}
                    style={{height:60, width: 200, color:brownPalette.brown9, backgroundColor: brownPalette.brown2}}
                    onValueChange={value => setFieldValue('name', value)}
                >
                    {getProductOptions(products)}
                </Picker>
                
                <TextInput
                style={styles.textBox}
                placeholder="Enter Quantity"
                onChangeText={handleChange('quantity')}
                onBlur={handleBlur('quantity')}
                value={values.quantity}
                />
                {/* Need another button to add product to delivery, and one to search for existing product(maybe drop down) */}
                <Button buttonStyle={styles.buttonStyle}
                        titleStyle={styles.buttonTitleStyle}
                        onPress={handleSubmit as any} title="Add Product To Delivery Ticket" />
            </View>
            )}
        </Formik>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: brownPalette.brown1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        borderStyle: 'solid',
        borderRadius: 8,
        borderColor: brownPalette.brown8,
        borderWidth: 5,
        width: '50%',
        padding: 10,
        margin: 10
    },
    buttonTitleStyle: {
        fontFamily: 'Futura', 
        color: brownPalette.brown10,
        fontWeight: '700'
    },
    buttonStyle: {
        backgroundColor: brownPalette.brownBase,
        width: 240,  
        paddingVertical: 10,
        margin:10,
        borderRadius: 7
    },
});