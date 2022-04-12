import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 29,
    paddingTop: 98,
    backgroundColor: 'black',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    color: "#fff",
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
    color: '#fff',
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
    color: "#fff",
    fontSize: 27,
    fontFamily: globalProps.font,
    fontWeight: '400',
    paddingTop: 64,
  },

  veiculosSection: {

  },
});