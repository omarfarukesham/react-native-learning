import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text style={{color: "magenta", padding: 10}}>Flower IMAGE</Text>
      <Image 
      source={require('../assets/flower.jpg')} 
        style={{width: 200, height:200, margin: 10}}
      />
      <Image 
      source={{uri: "https://reactjs.org/logo-og.png"}} 
        style={{width: 150, height:150, margin: 10}}
      />
    </View>
  )
}

export default ImageComponent