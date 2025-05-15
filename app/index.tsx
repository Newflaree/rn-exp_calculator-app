// React Native
import { 
  View,
  Text
} from 'react-native';
import { globalStyles } from '@/styles/global-styles';
import { CustomText } from '@/components/CustomText';


const CalculatorApp = () => {
  return (
    <View style={ globalStyles.calculatorContainer }>
      <CustomText
        variant='h1'
      >
        50 x 50
      </CustomText>

      <CustomText
        variant='h2'
      >
        2500
      </CustomText>
    </View>
  );
}

export default CalculatorApp;
