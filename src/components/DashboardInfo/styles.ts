import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: '#3E3D3D',
    width: 150,
    height: '100%',
    borderRadius: 14,
    marginRight: 16
  },

  infoSection: {
    padding: 16,
  },

  infoName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: globalProps.font,
    fontWeight: 'normal',
    marginBottom: 12,
  },

  infoValue: {
    color: "#fff",
    fontSize: 20,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
  }
});