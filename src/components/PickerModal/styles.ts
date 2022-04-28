import { Dimensions, StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 14,
  },

  pickerContainer: {
    backgroundColor: globalProps.defaultWhite,
  },

  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },

  title: {
    fontSize: 20,
  },
});