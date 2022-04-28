import { Dimensions, StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  main: {
    height: 50,
    backgroundColor: '#212121',
    paddingHorizontal: 12,
    // marginHorizontal: 20,
    borderRadius: 12,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  text: {
    color: '#C4C4C4',
    fontSize: 18,
  },
});