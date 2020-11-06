import * as React from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native'
import { Button, Input } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'
import { brownPalette } from '../assets/ColorPalette'




export interface HomeScreenProps {
    navigation: NavigationScreenProp<any,any>;
}
export default function HomeScreen({navigation}:{navigation:any}) {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/images/OIMSLogo.png')}
                    style={styles.image} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        buttonStyle={styles.buttons}
                        title="Input New Delivery"
                        titleStyle={{fontFamily: 'Futura', color: brownPalette.brown10}}
                        onPress={() => navigation.navigate('Delivery')}
                    />
                    <Button 
                        buttonStyle={styles.buttons}
                        titleStyle={{fontFamily: 'Futura', color: brownPalette.brown10}}
                        title="Input Daily Inventory"
                        onPress={() => navigation.navigate('Inventory')}
                    />
                </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'center',
        backgroundColor: brownPalette.brown1

    },   
    buttons: {
        backgroundColor: brownPalette.brownBase,
        width: 100, 
        padding:4, 
        margin:10
    },
    buttonContainer: {
        flex:1,
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 1,
        paddingTop: 50, 

    }, 
    image: {
        height: 250,
        width: 250
    }
})