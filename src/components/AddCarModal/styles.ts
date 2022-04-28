import { Dimensions, StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 64,
    borderRadius: 14,
    fontSize: 20,
  },

  header: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    padding: 10,
  },

  titleSection: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 32,
  },

  title: {
    fontSize: 20,
  },

  body: {
    // flex: 1,
    backgroundColor: '#212121',
    padding: 16,
    height: '85%',
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
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

  subtitle: {
    color: globalProps.defaultWhite,
    fontSize: 18.03,
    fontWeight: '400',
  },

  inputFields: {
    justifyContent: 'space-between',
    // paddingVertical: 70,
  },

});