import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
  },

  title: {
    color: "#fff",
    fontSize: 35,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
  },

  subtitle: {
    color: "#fff",
    fontSize: 18.03,
    fontWeight: '400',
  },

  inputFields: {
    paddingVertical: 70,
  },
});