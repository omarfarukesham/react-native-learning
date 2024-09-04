import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const FlatlistComponent = () => {
    const energyFood = ['Rice', 'MiLK', 'Fruits', "Fish"]
  return (
    <View style={styles.fruitsContainer} >
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

const styles = StyleSheet.create({
  fruitsContainer: {
    padding: 10,
    margin: 20,
    backgroundColor: 'gray',
    borderColor: "black",
    borderRadius: 10
  }
})

export default FlatlistComponent