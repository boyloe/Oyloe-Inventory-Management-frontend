
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Product } from './types'
import ProductCard from './components/ProductCard';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen'

const baseURL = "http://localhost:4000"
export interface IAppProps {
  products: Product[]
}
const Stack = createStackNavigator()

export default function App() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch(`${baseURL}/products`)
      .then(response => response.json())
      .then(products => setProducts(products))
  }, [])

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );


  }

  // displayProducts = () => this.state.products.map(product => <ProductCard key={product.id} product={product} />)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
