import { Dimensions, StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 20,
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
    marginLeft: 36,
  },

  title: {
    fontSize: 20,
  },

  body: {
    backgroundColor: '#212121',
    padding: 12,
    height: 250,
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
  },

  infoCards: {
  },

  firstRow: {
    flexDirection: 'row',
  },

  secondRow: {
    flexDirection: 'row',
  },

  // infoCards: {
  //   // justifyContent: 'center',
  // },

  // firstRow: {
  //   justifyContent: 'space-between',
  //   height: '50%',
  //   marginRight: 32,
  //   flexDirection: 'row',
  // },

  totalSection: {
    backgroundColor: '#4F4F4F',
    width: '100%',
    padding: 16,
    // marginTop: 12,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },

  totalTitle: {
    color: globalProps.defaultWhite,
    fontSize: 20,
    fontFamily: globalProps.font,
    fontWeight: 'normal',
    marginBottom: 12,
  },

  totalValue: {
    color: '#2ECD14',
    fontSize: 28,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
  }
});