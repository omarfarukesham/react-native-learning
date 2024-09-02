import { View, Text, Pressable, StyleSheet} from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View style={styles.container}>
    <Pressable 
      onPress={() => console.log('Button Pressed')}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? 'black' : 'black',
        }
      ]}
    >
      <Text style={styles.text}>$ 200,000 </Text>
    </Pressable>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
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
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default ButtonComponent