import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View style={{}}>
      <Image 
      source={require('../assets/car1.jpg')} 
        style={{width: 200, height:200, margin: 10, borderRadius: 10}}
      />
    </View>
  )
}

export default ImageComponent