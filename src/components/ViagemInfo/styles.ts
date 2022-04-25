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
    fontSize: 16,
    fontFamily: globalProps.font,
    fontWeight: 'normal',
    marginBottom: 12,
  },

  infoValue: {
    color: globalProps.defaultWhite,
    fontSize: 20,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
  }
});