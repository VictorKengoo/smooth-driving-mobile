import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 23,

    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontFamily: globalProps.font,
    fontSize: 18.03,
    fontWeight: 'bold',
    color: '#000',
  },
});