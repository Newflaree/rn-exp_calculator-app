// React Native
import { 
  View,
} from 'react-native';
// Expo
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
// Constants
import { Colors } from '@/constants/Colors';



const RootLayout = () => {
  const [ loaded ] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  if ( !loaded ) {
    return null;
  }

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1 }}>
      <Slot />
      <StatusBar style='light' />
    </View>
  );
}

export default RootLayout;
