import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    // zIndex: 1,
  },
  text: {
    color: globalProps.defaultWhite,
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: 280,
    textAlign: 'center',
    // backgroundColor: '#000',
    // padding: 16,
  }
});