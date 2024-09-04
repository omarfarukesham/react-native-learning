import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const FlatlistComponent = () => {
  const locations = [
    { id: 1, city: "Dhaka", postcode: "1212", country: "Bangladesh" },
    { id: 2, city: "London", postcode: "SW1A 1AA", country: "United Kingdom" },
    { id: 3, city: "New York", postcode: "10001", country: "United States" },
    { id: 4, city: "Sydney", postcode: "2000", country: "Australia" },
    { id: 5, city: "Tokyo", postcode: "100-0001", country: "Japan" },
    { id: 6, city: "Berlin", postcode: "10115", country: "Germany" },
    { id: 7, city: "Paris", postcode: "75001", country: "France" },
    { id: 8, city: "Toronto", postcode: "M5H 2N2", country: "Canada" },
    { id: 9, city: "Dubai", postcode: "00000", country: "United Arab Emirates" },
    { id: 10, city: "Singapore", postcode: "018980", country: "Singapore" }
  ];
  
  
  return (
    <View style={styles.fruitsContainer} >
     
      <FlatList 
       data={locations}
        keyExtractor={(item)=> item.id.toString()}
        renderItem={({item})=>{
            return <Text>{item.country}</Text>
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  fruitsContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#EDEDED',
    borderColor: "black",
    borderRadius: 10,
    height: 200,
  }
})

export default FlatlistComponent