import { View, Text, FlatList } from 'react-native'
import React from 'react'

const FlatlistComponent = () => {
    const energyFood = ['Rice', 'MiLK', 'Fruits', "Fish"]
  return (
    <View>
      <Text>FlatlistComponent</Text>
      <FlatList 
       data={energyFood}
        renderItem={({item})=>{
            return <Text>{item}</Text>
        }}
      />
    </View>
  )
}

export default FlatlistComponent