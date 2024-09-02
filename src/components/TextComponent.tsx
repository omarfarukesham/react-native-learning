import { View, Text } from 'react-native'
import React from 'react'

const TextComponent = () => {
  const detailsText = {
    name: 'Sports Car',
    modal: 2001,
    rating: 3.5,
    details: 'Luxurious looking and blesing fast speed!'
  }
  return (
    <View>
 
      <View style={{display:"flex", justifyContent:"space-between", paddingLeft: 5, flexDirection:"row"}}>
         <Text style={{fontSize: 20, color:"black"}}>{detailsText.name}</Text>
         <Text style={{fontSize: 20, color: "black"}}>Rating: {detailsText.rating}</Text>
      </View>
      <View style={{marginTop:5, paddingLeft: 5}}>
         <Text>{detailsText.details}</Text>
      </View>
      </View>
  )
}

export default TextComponent 