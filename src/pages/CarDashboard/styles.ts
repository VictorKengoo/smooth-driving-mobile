import { Dimensions, StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  mainContent: {
    padding: 24,
    paddingTop: 98,
  },

  title: {
    color: globalProps.defaultWhite,
    fontSize: 27,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    marginBottom: 28,
  },

  carImageBoard: {
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 36,
    height: 224,
  },

  carImageView: {
    alignItems: 'center',
  },

  carImage: {
    resizeMode: 'center'
  },

  infoTitle: {
    color: globalProps.defaultWhite,
    fontSize: 24,
    fontFamily: globalProps.font,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  infoCards: {

  },

  firstRow: {
    flexDirection: 'row',
  },

  secondRow: {
    flexDirection: 'row',
  },

  statisticsSection: {
    marginTop: 36,
  },

  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  viagens: {
    justifyContent: 'space-between',
  },

  viagem: {

  },
});