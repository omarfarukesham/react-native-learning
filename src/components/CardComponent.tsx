import { View, Text, Image } from 'react-native'
import React from 'react'
import ImageComponent from './ImageComponent'
import ButtonComponent from './ButtonComponent'

const CardComponent = () => {
  return (
    <View style={{backgroundColor:"gray", borderColor: 'black', borderRadius: 10}}>
        <ImageComponent />
        <Text>White Flower</Text>
        <Text>This is very popular flower in Bangladesh</Text>
        <ButtonComponent />
      <Image />
    </View>
  )
}

export default CardComponent