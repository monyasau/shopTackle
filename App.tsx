import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Products from "./components/Products";
import CheckOut from './components/CheckOut';
import BottomNavigation from './components/BottomNavigation';
import { useState } from 'react';
import TopBar from './components/TopBar';


export default function App() {
  const [activeWindow, setActiveWindow] = useState("products");
  return (
    <View style={styles.container}>
      <TopBar setScreen={setActiveWindow}/>
      <View style={styles.pages}>
      {activeWindow == "products" ? <Products /> : <CheckOut />}
      </View>
      <BottomNavigation active={activeWindow} setActiveWindow={setActiveWindow} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pages: {
    width:"100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
});
