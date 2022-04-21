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
  },

  title: {
    color: "#fff",
    fontSize: 27,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  subtitle: {
    color: "#fff",
    fontSize: 18,
    fontFamily: globalProps.font,
    fontWeight: 'normal',
    marginBottom: 28,
  },

  carImageBoard: {
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 36
  },

  carImage: {
    alignSelf: 'center',
    width: '65%',
    height: '65%',
    resizeMode: 'contain',
  },

  infoSection: {

  },

  infoTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: globalProps.font,
    fontWeight: 'normal',
    marginBottom: 12,
  },

  infoCards: {

  },

  firstRow: {
    flexDirection: 'row',
  },

  secondRow: {
    marginTop: 12,
    flexDirection: 'row',
  },
});