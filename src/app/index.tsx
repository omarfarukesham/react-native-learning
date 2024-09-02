import { View, Text } from 'react-native'
import React from 'react'
import Greet from '../components/Greet';
import ComponentX from '../components/ComponentX';
import ComponentAge from '../components/ComponentAge';
import ComponentSub from '../components/ComponentSub';

const Index = () => {
  return (
    <View>
    <Greet />
    <ComponentX />
    <ComponentAge />
    <ComponentSub />

    </View>
  )
}



export default Index;