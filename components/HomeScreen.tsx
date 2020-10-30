import * as React from 'react'
import {View, Text, Button} from 'react-native'


export default function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text style={{fontSize: 28}}>My Home Screen</Text>
            <Button 
                title="Go to Inventory"
                onPress={() => navigation.navigate('Inventory')}
            />
        </View>
    )
}