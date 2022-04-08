import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 29,
    paddingTop: 98,
    backgroundColor: 'black',
  },

  signOutButtonText: {
    color: '#fff',
  },

  title: {
    color: "#fff",
    fontSize: 27,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  image: {
    resizeMode: "cover",
    height: 150,
    width: 210,
    alignSelf: 'center',
    marginBottom: -100,
    marginTop: 32,
  },

  input: {
    flex: 1,
    backgroundColor: '#212121',
    fontSize: 14,
    fontFamily: globalProps.font,

    alignItems: 'center',

    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderRadius: 12,
    marginRight: 50,
  },

  searchIcon: {
    position: 'absolute',
    paddingLeft: 210,
  },

  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButton: {
    position: 'absolute',
    paddingLeft: 340,
  },

  veiculosTitle: {
    color: "#fff",
    fontSize: 27,
    fontFamily: globalProps.font,
    fontWeight: '400',
    paddingTop: 64,
  },

  veiculosSection: {

  }
});