import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CarItem } from './components/CarItem';
import StyledButton from './components/StyledButton/StyledButton';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem/>
      <StyledButton/>
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
  }

});
