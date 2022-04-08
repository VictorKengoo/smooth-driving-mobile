import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 12,

    backgroundColor: '#fff',

    marginTop: 12,

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