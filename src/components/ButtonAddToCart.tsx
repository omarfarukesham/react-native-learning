import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'

const ButtonAddToCart = () => {
  return (
    <View style={styles.container}>
    <Pressable 
      onPress={() => console.log('Button Pressed')}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? 'yellow' : 'yellow',
        }
      ]}
    >
      <Text style={styles.text}>Add To Cart</Text>
    </Pressable>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  }
});


export default ButtonAddToCart