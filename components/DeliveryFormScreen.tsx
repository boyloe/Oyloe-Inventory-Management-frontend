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

    const [selectedProduct, setSelectedProduct] = useState('')
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
            return <Picker.Item label={product.name} value={product.name} key={product._id} />
        })
    }

    


    
    return (
            <View style={styles.container}> 
                <View style={styles.pickerContainer}>
                    <Picker 
                        selectedValue={selectedProduct}
                        style={{height: 80, width: 200}}
                        itemStyle={{height: 150, borderWidth:2, backgroundColor: brownPalette.brown3, borderRadius: 12}}
                        onValueChange={(value, key) => {
                            setSelectedProduct(value)
                        }}
                    >
                        {getProductOptions(products)}
                    </Picker>
                </View>      
                <TextInput 
                    style={styles.textBox} 
                    onChangeText={text => setQuantity(text)} >
                </TextInput>
                <Button 
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.buttonTitleStyle}
                    title='Add Product to Ticket'
                    onPress={addProductToDelivery}
                >
                    
                </Button>
            </View>
                
                
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
        flex:1,
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
    pickerContainer:{
        flex:1
    }
});