import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button, Input } from 'react-native-elements'
import {  NavigationScreenProp } from 'react-navigation'



export interface HomeScreenProps {
    navigation: NavigationScreenProp<any,any>;
}
export default function HomeScreen({navigation}:{navigation:any}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Oyloe Inventory Management System</Text>
            
            <Button 
                style={styles.buttons}
                title="Input New Delivery"
                onPress={() => navigation.navigate('Delivery')}
            />
            <Button 
                style={styles.buttons}
                title="Input Daily Inventory"
                onPress={() => navigation.navigate('Inventory')}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent:'center'
    },
    titleText: {
        fontSize: 28, 
        textAlign: 'center',
        flex: 1,
        padding: 20


    },
    buttons: {
        width: 200, 
        padding:4, 
        margin:10}
})