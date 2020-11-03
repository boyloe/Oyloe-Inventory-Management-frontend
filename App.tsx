
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Product } from './types'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './components/LoginScreen'
import Inventory from './components/Inventory'
import { DeliveryFormScreen } from './components/DeliveryFormScreen';
import HomeScreen from './components/HomeScreen';
import {dataBlueColors as Colors} from './assets/ColorPalette'
import {funColors} from './assets/ColorPalette'
import NewDeliveryScreen from './components/NewDeliveryScreen';


const baseURL = "https://oyloe-inventory-management.herokuapp.com"
export interface IAppProps {
  products: Product[]
}
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
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: funColors.Charcoal,
          }, 
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewDeliveryScreen" component={NewDeliveryScreen} />
          <Stack.Screen 
            name="Inventory" 
            options={{
              title:"Inventory Input",
    
              }}>
            {(props) => <Inventory products={products} {...props} />}
            </Stack.Screen>
          <Stack.Screen 
            name="DeliveryFormScreen" 
            options={{
              title:"Add Product To Delivery",    
              }}>
            {(props) => <DeliveryFormScreen products={products} {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
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
