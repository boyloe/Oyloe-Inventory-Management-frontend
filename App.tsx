
import React, {useState, useEffect} from 'react';
import { StyleSheet} from 'react-native';
import { Product } from './types'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import {brownPalette} from './assets/ColorPalette'
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
    .then((products) => products.sort(function(a:Product, b:Product) {
      let nameProductA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameProductB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameProductA < nameProductB) {
          return -1;
      }
      if (nameProductA > nameProductB) {
          return 1;
      }
      // names must be equal
      return 0;
    }))
    .then(sortedProducts => setProducts(sortedProducts))
    // .then(sortedProducts => setProducts(sortedProducts))
    ,[]
  });

  

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
                return <FontAwesome5 name={iconName} color={brownPalette.brown9} size={24} sty />
              }
              return <MaterialCommunityIcons name={iconName} color={brownPalette.brown9} size={24} />
            }, 
          })}
          tabBarOptions={{
            style: {backgroundColor: brownPalette.brown3, height: 100},
            tabStyle: {paddingTop: 10, shadowOffset: {height: 5, width:5}},
            activeTintColor: brownPalette.brown8,
            inactiveTintColor: brownPalette.brown6,
            labelStyle: {
              fontSize:16,
              fontFamily: 'Futura',
              marginVertical: 0
            }
            
          }}  
        >
          <Tab.Screen name="Login" component={LoginStackScreen}  />
          <Tab.Screen name="Home" component={HomeStackScreen} />
          {/* <Tab.Screen name="Delivery" component={DeliveryStackScreen} /> */}
          <Tab.Screen name="Inventory" 
                options={{
                    title:"Inventory",
                    
                    }}>
                {(props:any) => <InventoryStackScreen products={products} {...props} /> }
          </Tab.Screen>              
          <Tab.Screen name="Delivery" 
                options={{
                    title:"Delivery",
                    
                    }}>
                {(props:any) => <DeliveryStackScreen products={products} {...props} /> }
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
