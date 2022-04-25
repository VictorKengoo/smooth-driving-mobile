import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  image: {
    backgroundColor: '#000',
    bottom: 0,
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  header: {
    marginTop: 296,
    marginLeft: 40,
  },

  title: {
    color: globalProps.defaultWhite,
    fontSize: 48,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
  },

  subtitle: {
    color: globalProps.defaultWhite,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  signUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderWidth: 1,
    width: 256,
    borderRadius: 12,
    height: 60,
    borderColor: globalProps.defaultWhite,
  },

  signUpButtonText: {
    fontFamily: globalProps.font,
    fontSize: 20,
    fontWeight: 'bold',
    color: globalProps.defaultWhite,
  },

  bottomView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 64,
  },
});