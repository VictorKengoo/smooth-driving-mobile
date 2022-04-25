import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 40,
    paddingTop: 120,
  },

  title: {
    color: globalProps.defaultWhite,
    fontSize: 35,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    marginBottom: 24.84,
  },

  inputFields: {
    paddingVertical: 70,
  },
});