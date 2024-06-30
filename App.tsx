import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Products from './components/Products';
import CheckOut from './components/CheckOut';

export default function App() {
  return (
    <View style={styles.container}>
      <Products/> 
      <CheckOut/>
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
