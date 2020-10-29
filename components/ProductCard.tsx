import * as React from 'react';
import { Product } from '../types'
import {View,StyleSheet, TextInput} from 'react-native'
import {Text} from 'react-native-elements'

export interface IProductCardProps {
    key: string;
    product: Product;
}

const ProductCard: React.FC<IProductCardProps> = ({product}) => {
    return (
        <View style={styles.container}>
            <Text h4 style={styles.textBox}>Product: {product.name.charAt(0).toUpperCase() + product.name.slice(1)}

            </Text>
            <Text h4 style={styles.textBox} >Description: {product.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        borderStyle: 'solid',
        color: '#888',   

    },
    quantityBox: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10
    }
})

export default ProductCard