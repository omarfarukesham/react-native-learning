import { View, Text, Image } from 'react-native'
import React from 'react'
import ImageComponent from './ImageComponent'
import ButtonComponent from './ButtonComponent'
import TextComponent from './TextComponent'
import ButtonAddToCart from './ButtonAddToCart'

const CardComponent = () => {
  return (
    <View style={{backgroundColor:"#EDEDED", borderColor: 'black', borderRadius: 5,  padding: 10, margin: 10}}>
        <ButtonComponent />
        <ImageComponent />
        <TextComponent />
        <ButtonAddToCart />
        
      <Image />
    </View>
  )
}

export default CardComponent