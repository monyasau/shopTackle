import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Products from './components/Products';
import CheckOut from './components/CheckOut';
import BottomNavigation from './components/BottomNavigation';
import { useState } from 'react';


export default function App() {
  const [activeWindow,setActiveWindow]=useState("products");
  return (
    <View style={styles.container}>
      {activeWindow=="products"?
        <Products/>:
      <CheckOut/>}
      <BottomNavigation active={activeWindow} setActiveWindow={setActiveWindow}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
