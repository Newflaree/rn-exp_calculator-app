// React Native
import { 
  Text,
  type TextProps
} from 'react-native';
import { globalStyles } from '@/styles/global-styles';

interface Props extends TextProps {
  variant?: 'h1' | 'h2';
}


export const CustomText = ({ children, variant = 'h1', ...restProps }: Props) => {
  return (
    <Text
      style={[
        { color: 'white', fontFamily: 'SpaceMono' },
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult
      ]}
      { ...restProps }
      numberOfLines={ 1 }
      adjustsFontSizeToFit
    >
      { children }
    </Text>
  );
}
