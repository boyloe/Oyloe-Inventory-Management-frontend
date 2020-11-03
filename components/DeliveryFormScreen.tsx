import React, {useState} from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Button, colors } from 'react-native-elements'
import { Formik } from 'formik';
import {  NavigationScreenProp } from 'react-navigation'
import {dataBlueColors as Colors} from '../assets/ColorPalette'
import {funColors} from '../assets/ColorPalette'


export interface HomeScreenProps {
    navigation: NavigationScreenProp<any,any>;
}

export default function DeliveryFormScreen({navigation}:{navigation:any}) {

    const [productsDelivered, setProductsDelivered] = useState({})
    return (
        //Some form of display to show what is already in the delivery, and a way to delete items 
        <Formik
            initialValues={{ name: '', quantity: ''}}
            onSubmit={values => console.log(values)}
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
                <Button buttonStyle={{backgroundColor: funColors.Charcoal}} onPress={handleSubmit as any} title="Create Delivery Ticket" />
            </View>
            )}
        </Formik>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.darkGray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        borderStyle: 'solid',
        borderRadius: 8,
        borderColor: funColors.Charcoal,
        borderWidth: 5,
        width: '50%',
        padding: 10,
        margin: 10
    }
});