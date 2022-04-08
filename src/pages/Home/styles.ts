import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 29,
    marginTop: 92,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  title: {
    color: "#fff",
    fontSize: 27,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    marginBottom: 24.84,
  },

  subtitle: {
    color: "#fff",
    fontSize: 18.03,
    fontWeight: '400',
    marginBottom: 170,
  },

  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
    marginBottom: 88,
  },

  loginButtonText: {
    fontFamily: globalProps.font,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#597EFF',
    textDecorationLine: 'underline'
  },

  image: {
    resizeMode: "cover",
    height: 150,
    width: 210,
    marginLeft: 20,
    marginBottom: -100,
  },

  input: {
    color: '#050505',
    fontSize: 14,
    fontFamily: globalProps.font,
    fontWeight: 'normal',

    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,

    // color: '#000',
    // height: 60,
    // backgroundColor: "#FFF",
    // borderRadius: 10,
    // marginBottom: 8,
    // paddingHorizontal: 24,
    // fontSize: 16,
    // marginVertical: 12,
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  }
});