import { Platform } from 'react-native';

export const globalProps = {
  buttonActiveOpacity: 0.7,
  font: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
  defaultWhite: '#fff',
};