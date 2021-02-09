import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem/index';

export default function App() {
  return (
    <View style={styles.container}>
    
    <CarItem 
      name={'Model S'} 
      tagline={'Order Online For'} 
      image={require('./assets/images/ModelS.jpeg')}
      taglineCTA={"Touchless Delivery"}
    />
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
