import { Dimensions, StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    // paddingRight: 12,
    paddingBottom: 12,
  },

  infoSection: {
    // width: width / 2.8
    width: '98%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 14,
    backgroundColor: '#4F4F4F',
    padding: 16,
    // flexWrap: 'wrap',
    alignItems: 'center',
  },


  infoName: {
    textAlign: 'center',
    color: globalProps.defaultWhite,
    fontSize: 24,
    fontFamily: globalProps.font,
    fontWeight: 'normal',
    marginBottom: 12,
  },

  infoValueSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  unidade: {
    color: globalProps.defaultWhite,
    fontSize: 24,
  },

  infoValue: {
    color: globalProps.defaultWhite,
    fontSize: 56,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
  }
});