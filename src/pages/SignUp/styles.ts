import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 40,
    paddingTop: 120,
    justifyContent: 'center',
    // alignItems: 'center',
  },

  input: {
    color: '#000',
    height: 60,
    backgroundColor: globalProps.defaultWhite,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 12,
    fontSize: 16,
  },

  title: {
    color: globalProps.defaultWhite,
    fontSize: 35,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
  },

  subtitle: {
    color: globalProps.defaultWhite,
    fontSize: 18.03,
    fontWeight: '400',
  },

  inputFields: {
    justifyContent: 'space-between',
    paddingVertical: 70,
  },
});