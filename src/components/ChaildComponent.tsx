import { View, Text } from 'react-native'
import React from 'react'

interface childProps {
    name: string,
    age: number,
    city: string

}

const ChaildComponent = ({info}) => {
  console.log(info)
  return (
    <View>
        <Text>{info.name}</Text>
        <Text>{info.age}</Text>
        <Text>{info.city}</Text>
    </View>
  )
}

export default ChaildComponent