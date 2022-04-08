import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#212121',
    borderRadius: 12,
    width: '100%',
    padding: 16,
  },

  cardHeader: {
    justifyContent: 'center',
  },

  carName: {
    color: '#fff',
    fontSize: 24,
    // marginLeft: 24,
  },

  carTransmition: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 32,
  },

  carPlate: {
    color: '#fff',
    fontSize: 20,
  },

  carImage: {
    width: 200,
    height: 100
  },
});