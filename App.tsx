
import React, {useState, useEffect} from 'react';
import { StyleSheet} from 'react-native';
import { Product } from './types'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import {brownPalette} from './assets/ColorPalette'
import {grayPalette} from './assets/ColorPalette'
import { HomeStackScreen } from './components/HomeStackScreen';
import { DeliveryStackScreen } from './components/DeliveryStackScreen';
import { InventoryStackScreen } from './components/InventoryStackScreen';
import { LoginStackScreen } from './components/LoginStackScreen';

import   { MaterialCommunityIcons } from '@expo/vector-icons/'
import   { FontAwesome5 } from '@expo/vector-icons/'




export const baseURL = "https://oyloe-inventory-management.herokuapp.com"
export interface IAppProps {
  products: Product[]
}
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const App: React.FC<IAppProps> = () => {

  const [products, setProducts] = useState([{
    _id: "",
    name: "",
    description: "",
    package: '',
    weight: 1,
    quantity: 0
  }])


  useEffect(() => {
    fetch(`${baseURL}/products`)
    .then(response => response.json())
    .then((products) => setProducts(products))
  }, [])

    return (
      <NavigationContainer>      
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home'
              } else if (route.name === 'Delivery') {
                iconName = 'truck-delivery'
              } else if (route.name === 'Login') {
                iconName = 'login'
              } else {
                iconName = 'boxes'
                return <FontAwesome5 name={iconName} color={brownPalette.brown10} size={24} />
              }
              return <MaterialCommunityIcons name={iconName} color={brownPalette.brown10} size={24} />
            }, 
          })}
          tabBarOptions={{
            style: {backgroundColor: brownPalette.brown3},
            activeTintColor: brownPalette.brown8,
            inactiveTintColor: grayPalette.gray9,
            labelStyle: {
              fontSize:14,
              fontFamily: 'Futura'
            },
            keyboardHidesTabBar: true
            
          }}  
        >
          <Tab.Screen name="Login" component={LoginStackScreen}  />
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Delivery" component={DeliveryStackScreen} />
          <Tab.Screen name="Inventory" 
                options={{
                    title:"Inventory",
                    
                    }}>
                {(props:any) => <InventoryStackScreen products={products} {...props} /> }
          </Tab.Screen>              
        </Tab.Navigator>
      </NavigationContainer>
    );


  }
  export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: brownPalette.brown1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
