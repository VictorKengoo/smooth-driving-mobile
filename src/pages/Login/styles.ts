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
    marginBottom: 24.84,
  },

  inputFields: {
    paddingVertical: 70,
  },
});