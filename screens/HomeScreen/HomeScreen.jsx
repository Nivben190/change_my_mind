import React from 'react';
import { View, Text } from 'react-native';
import ArguementComponent from '../components/ArguementComponent';
import {styles} from "./Style"


const HomeScreen = () => {
  return (
    <View >
    <Text style={styles.Header}> Feed </Text>

  <ArguementComponent/>
  

  </View>
  )
}





export default HomeScreen;
