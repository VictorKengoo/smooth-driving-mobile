import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles'

import CarImage from '../../../images/car.png'

import { veiculoPropsNavigate } from '../../utils/interfaces'

const CarInfo: React.FC<veiculoPropsNavigate> = ({
  veiculoProps: {
    id, manufacturer, model, transmission, plate, year, color, fuel, ipva, entityId
  },
  navigation
}) => {
  // const navigation = useNavigation();

  function handleNavigateToDashboard() {
    navigation.navigate('CarDashboard', {
      id: id,
      entityId: entityId,
      manufacturer: manufacturer,
      model: model,
      transmission: transmission,
      plate: plate,
      year: year,
      color: color,
      fuel: fuel,
      ipva: ipva
    });
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.card}
      onPress={handleNavigateToDashboard}>
      <View style={styles.cardHeader}>
        <Text style={styles.model}>{manufacturer}</Text>
        <Text style={styles.model}>{model}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.transmission}>{transmission}</Text>
        <Text style={styles.plate}>{plate}</Text>
      </View>

      <Image style={styles.image} source={CarImage} />

    </TouchableOpacity>
  )
}

export default CarInfo