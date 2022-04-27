import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#212121',
    width: '100%',
    borderRadius: 14,
    marginBottom: 16
  },

  infoSection: {
    padding: 16,
  },

  infoName: {
    color: globalProps.defaultWhite,
    fontSize: 18,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  infoValue: {
    color: globalProps.defaultWhite,
    fontSize: 18,
    fontFamily: globalProps.font,
    // fontWeight: 'bold',
  },
  infoValueTitle: {
    color: globalProps.defaultWhite,
    fontSize: 18,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
  },
});