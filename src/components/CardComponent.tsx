import { View, Text, Image } from 'react-native'
import React from 'react'
import ImageComponent from './ImageComponent'
import ButtonComponent from './ButtonComponent'
import TextComponent from './TextComponent'

const CardComponent = () => {
  return (
    <View style={{backgroundColor:"#EDEDED", borderColor: 'black', borderRadius: 5,  padding: 10, margin: 10}}>
        <ButtonComponent />
        <ImageComponent />
        <TextComponent />
        
      <Image />
    </View>
  )
}

export default CardComponent