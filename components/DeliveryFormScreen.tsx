import React, {useState} from 'react';
import { TextInput, View, StyleSheet} from 'react-native';
import { Button, Divider, Icon, Input} from 'react-native-elements'
import { Formik, Field, Form } from 'formik';
import {  NavigationScreenProp } from 'react-navigation'
import { brownPalette } from '../assets/ColorPalette'
import { Product } from '../types'
import { Picker }  from '@react-native-picker/picker'
import DropDownPicker from 'react-native-dropdown-picker'
import { TouchableOpacity } from 'react-native';
import   { Entypo } from '@expo/vector-icons/'





export interface HomeScreenProps {
    navigation: NavigationScreenProp<any,any>;
    products: Product[]
}

export const DeliveryFormScreen:React.FC<HomeScreenProps> = ({navigation, products}) => {

    const [selectedProduct, setSelectedProduct] = useState('CyberMul')
    const [quantity, setQuantity] = useState('')


    const addProductToDelivery = () => {
        if (selectedProduct !== '') {
                navigation.navigate('Delivery', {
                    product: {
                        name: selectedProduct,
                        quantity: quantity
                    }
                })
                setSelectedProduct('')
                setQuantity('')
        } else {
            return null
        }
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
    // const getProductOptions = (products:Product[]) => {
    //     return products.map(product => {
    //         console.log(product.name)
    //         return {label: product.name, value: product.name, icon: () => <Entypo name='chevron-small-right' size={18} color={'#000'} />}
    //     })
    // }

    


    
    return (
            <View style={styles.container}> 
                <TouchableOpacity style={styles.pickerContainer}>
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
{/* 
                    <DropDownPicker 
                        items={getProductOptions(products)}
                        defaultValue={selectedProduct}
                        containerStyle={{height: 40, width: 200}}
                        onChangeItem={item => {
                            console.log(selectedProduct)
                            setSelectedProduct(item.value)}}
                    /> */}
                </TouchableOpacity>  
                <View style={styles.textInputContainer}>
                    <Input 
                        containerStyle={styles.textBox} 
                        label={'Enter Quantity'}
                        labelStyle={{color: brownPalette.brown9}}
                        leftIcon={<Entypo name='chevron-small-right' size={20} color={brownPalette.brown10}/>}
                        onChangeText={text => setQuantity(text)} >
                    </Input>
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
        backgroundColor: brownPalette.brown2,
        width: '40%',
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