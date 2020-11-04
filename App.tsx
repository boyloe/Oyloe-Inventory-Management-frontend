
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Product } from './types'
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './components/LoginScreen'
import Inventory from './components/Inventory'
import { DeliveryFormScreen } from './components/DeliveryFormScreen';
import HomeScreen from './components/HomeScreen';
import {dataBlueColors as Colors} from './assets/ColorPalette'
import {funColors} from './assets/ColorPalette'
import NewDeliveryScreen from './components/NewDeliveryScreen';
import { HomeStackScreen } from './components/HomeStackScreen';


const baseURL = "https://oyloe-inventory-management.herokuapp.com"
export interface IAppProps {
  products: Product[]
}
const Tab = createBottomTabNavigator()
const stack = createStackNavigator()

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
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          }}  
        >
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="NewDeliveryScreen" component={NewDeliveryScreen} options={{title:"Delivery"}} />
          <Tab.Screen 
            name="Inventory" 
            options={{
              title:"Inventory",
              }}>
            {(props:any) => <Inventory products={products} {...props} />}
            </Tab.Screen>
          <Tab.Screen 
            name="DeliveryFormScreen" 
            options={{
              title:"Delivery",    
              }}>
            {(props:any) => <DeliveryFormScreen products={products} {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );


  }
  export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000501',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
