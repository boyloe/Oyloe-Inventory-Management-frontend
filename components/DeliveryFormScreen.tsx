import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Button, colors } from 'react-native-elements'
import { Formik, prepareDataForValidation } from 'formik';
import {  NavigationScreenProp } from 'react-navigation'
import {dataBlueColors as Colors, brownPalette} from '../assets/ColorPalette'
import {funColors} from '../assets/ColorPalette'
import { Product } from '../types'


export interface HomeScreenProps {
    navigation: NavigationScreenProp<any,any>;
    products: Product[]
}

export const DeliveryFormScreen:React.FC<HomeScreenProps> = ({navigation, products}) => {


//     //_onPress = (country, country_code, calling_code) => {
//   const { navigation, route } = this.props;
//   navigation.navigate('NameOfThePreviousScreen', {
//     selection: {
//       country_name: country,
//       country_code: country_code,
//       calling_code: calling_code
//     }
//   });
// };
    const addProductToDelivery = (values:{}) => {
        navigation.navigate('Delivery', {
            product: values
        })
    }


    
    return (
        <Formik
            initialValues={{ name: '', quantity: ''}}
            onSubmit={values => addProductToDelivery(values)}
                        
        >
            
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
                <TextInput
                style={styles.textBox}
                placeholder='Enter Product Name'
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                />
                <TextInput
                style={styles.textBox}
                placeholder="Enter Quantity"
                onChangeText={handleChange('quantity')}
                onBlur={handleBlur('quantity')}
                value={values.quantity}
                />
                {/* Need another button to add product to delivery, and one to search for existing product(maybe drop down) */}
                <Button buttonStyle={{backgroundColor: brownPalette.brownBase}}
                        titleStyle={{fontFamily: 'Futura'}}
                        onPress={handleSubmit as any} title="Add Product To Delivery" />
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
    }
});