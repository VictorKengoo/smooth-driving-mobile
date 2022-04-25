import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  input: {
    color: '#000',
    height: 60,
    backgroundColor: globalProps.defaultWhite,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginVertical: 12,
    fontSize: 16,
  },
});