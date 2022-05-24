import { StyleSheet } from 'react-native';
import { globalProps } from '../../global/globalProps';

export const styles = StyleSheet.create({
  speedometerSection: {
    marginTop: 36,
    alignItems: 'center',
  },

  sectionTitle: {
    color: globalProps.defaultWhite,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
    alignSelf: 'flex-start'
  },

  speedometerText: {
    color: globalProps.defaultWhite,
    marginTop: '-25%',
    fontWeight: 'bold',
    fontSize: 40,
  },

  speedometerMultiplierText: {
    color: globalProps.defaultWhite,
    fontSize: 28,
  },
});