import { View, Text } from 'react-native'
import React from 'react'
import ChaildComponent from './ChaildComponent'

const ParentComponent = () => {
const data = {
    name: "Faruk",
    age: 35,
    city: "Dhaka"

}

  return (
    <View>
        <ChaildComponent info={data}/>
    </View>
  )
}

export default ParentComponent