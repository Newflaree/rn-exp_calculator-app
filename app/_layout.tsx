// React Native
import { 
  View,
  Text
} from 'react-native';
import { Slot } from 'expo-router';


const RootLayout = () => {
  return (
    <View>
      <Text>RootLayout</Text>
      <Slot />
    </View>
  );
}

export default RootLayout;
