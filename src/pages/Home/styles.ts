import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 24,
    paddingTop: 98,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    color: globalProps.defaultWhite,
    fontSize: 27,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  searchSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#212121',
    borderWidth: 0.5,
    width: '85%',
    height: 50,
    borderRadius: 12,
  },

  input: {
    flex: 1,
    alignItems: 'center',
    color: globalProps.defaultWhite,
    fontSize: 18,
    fontFamily: globalProps.font,
  },

  searchIcon: {
    padding: 10,
  },

  addButton: {
    backgroundColor: '#000',
    // justifyContent: 'flex-start',
    // position: 'absolute',
    // paddingLeft: 340,
  },

  veiculosTitle: {
    color: globalProps.defaultWhite,
    fontSize: 27,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    paddingTop: 64,
  },

  veiculosSection: {

  },
});