import { Dimensions, StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
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
    marginTop: 56,
  },

  scroll: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  sectionTitle: {
    color: globalProps.defaultWhite,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 18,
    alignSelf: 'flex-start'
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
    // flex: 1,
    backgroundColor: '#212121',
    padding: 16,
    height: '100%',
    borderBottomEndRadius: 14,
    borderBottomStartRadius: 14,
  },

  infoCards: {
    flex: 1
  },

  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  secondRow: {
    flexDirection: 'row',
  },

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
  },
  messageSection: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 14,
    backgroundColor: '#363535',
  },
  message: {
    color: globalProps.defaultWhite,
    fontSize: 28,
  },
});