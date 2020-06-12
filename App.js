import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './routes/navigations';


export default function App() {
  return (
    <NavigationContainer>
        <Navigations/>
    </NavigationContainer>
  );
}

