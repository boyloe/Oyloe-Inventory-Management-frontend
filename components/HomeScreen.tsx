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
            <Input
                placeholder='Username'
                leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
            />
            <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'chevron-right' }}
            />
            <Button 
                containerStyle={{width: 200}}
                title="Login"
                onPress={() => navigation.navigate('DeliveryFormScreen')}
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
        textAlign: 'center'
    }
})