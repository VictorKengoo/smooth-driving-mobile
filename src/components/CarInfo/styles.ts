import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#212121',
    borderRadius: 12,
    width: '100%',
    padding: 16,
  },

  cardHeader: {
    // justifyContent: 'center',
  },

  model: {
    flexWrap: 'wrap',
    color: '#fff',
    fontSize: 24,
    marginBottom: 4,
    fontWeight: 'bold',
  },

  year: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  transmission: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
  },

  plate: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  image: {
    width: 200,
    height: 100
  },
});