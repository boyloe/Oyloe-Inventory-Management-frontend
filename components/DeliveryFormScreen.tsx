import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Text, SafeAreaView} from 'react-native';
import { Button, Divider, Icon, Input} from 'react-native-elements'
import { Formik, Field, Form } from 'formik';
import {  NavigationScreenProp } from 'react-navigation'
import { brownPalette } from '../assets/ColorPalette'
import { Product } from '../types'
import { Picker }  from '@react-native-picker/picker'
import DropDownPicker from 'react-native-dropdown-picker'
import { TouchableOpacity } from 'react-native';
import   { Entypo, Feather } from '@expo/vector-icons/'





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
                setSelectedProduct('CyberMul')
                setQuantity('')
        } else {
            return null
        }
    }

    // const getProductOptions = (products:Product[]) => {
    //     return products.map(product => {
    //         return <Picker.Item 
    //                 label={product.name} 
    //                 value={product.name} 
    //                 color={brownPalette.brown10}
    //                 key={product._id} />
    //     })
    // }
    const getProductOptions = (products:Product[]) => {
        return products.map(product => {
            return {label: product.name, value: product.name, icon: () => <Entypo name='chevron-small-right' size={18} color={'#000'} />}
        })
    }

    


    
    return (
            <SafeAreaView style={styles.container}> 
                <View style={styles.pickerContainer}>
                    <Text style={{fontFamily:'Futura', fontSize: 42, marginVertical:10}}>Select a Product</Text>
                    {/* <Picker 
                        selectedValue={selectedProduct}
                        itemStyle={styles.pickerItemStyle}
                        onValueChange={(value:any, key) => {
                            setSelectedProduct(value)
                        }}
                        
                        
                    >   
                        {getProductOptions(products)}
                    </Picker> */}

                    <DropDownPicker 
                        items={getProductOptions(products)}
                        defaultValue={selectedProduct}
                        containerStyle={{height: 40, width: 200}}
                        onChangeItem={item => {
                            return setSelectedProduct(item.value)}}
                    />
                </View>  
                <View style={styles.textInputContainer}>
                    <Text style={{fontFamily:'Futura', fontSize: 42, marginVertical:10}}>Enter Quantity</Text>
                    <Input 
                        containerStyle={styles.textBox} 
                        label={'Quantity'}
                        labelStyle={{color: brownPalette.brown9}}
                        // leftIcon={<Entypo name='chevron-right' size={20} color={brownPalette.brown10}/>}
                        leftIcon={<Feather name='hash' size={15} color={brownPalette.brown10}/>}
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
                
            </SafeAreaView>
                
                
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
        width: '45%',
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
        borderRadius: 8
    },
    pickerContainer:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 40
        
    },
    pickerItemStyle: {
        height: '80%', 
        width: 180,
        backgroundColor: brownPalette.brown2, 
        borderRadius: 8,       

    }
});