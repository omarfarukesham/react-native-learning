import { View, Text, Button, Alert, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Button title="Alert btn" color="crimson" onPress={()=>alert('Hi you pressed me')} />
    
        <Pressable onPress={()=>console.log('onPress')}>
            <Text  style={{color: "blue", padding: 5}} >On Press</Text>
        </Pressable>
        <Pressable onPressIn={()=>console.log('onPressIn')}>
            <Text  style={{color: "red", padding: 5}} >On Press In</Text>
        </Pressable>
        <Pressable onPressOut={()=>console.log('onPressOut')}>
            <Text style={{color: "cirmson", padding: 5}}  >On Press OUT</Text>
        </Pressable>
        <Pressable onLongPress={()=>console.log('onLongPress')}>
            <Text style={{color: "tail", padding: 20}}  >On Press LOOOOOOOOOONG </Text>
        </Pressable>


</View>
  )
}

export default ButtonComponent