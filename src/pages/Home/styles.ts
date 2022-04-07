import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: "#fff",
    fontSize: 44.26,
    fontFamily: 'Roboto',
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
    fontFamily: 'Roboto',
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
  }
});