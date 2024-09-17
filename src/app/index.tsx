import { View, Text } from 'react-native'
import CardComponent from '../components/CardComponent';
import FlatlistComponent from '../components/FlatlistComponent';
import HugeData from '../components/HugeData';
import ChaildComponent from '../components/ChaildComponent';
import ParentComponent from '../components/ParentComponent';

const Index = () => {
  return (
    <View>
        {/* <CardComponent /> */}
        {/* <FlatlistComponent /> */}
        {/* <HugeData /> */}
        <ParentComponent />

    </View>
  )
}



export default Index;