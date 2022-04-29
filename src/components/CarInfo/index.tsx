import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles'

import CarImage from '../../../images/car.png'

import { veiculoPropsNavigate } from '../../utils/interfaces'

const CarInfo: React.FC<veiculoPropsNavigate> = ({
  veiculoProps: {
    manufacturer, model, transmission, plate, year, maxRPMReached, color, fuel, situacaoIPVA
  },
  navigation
}) => {
  // const navigation = useNavigation();

  function handleNavigateToDashboard() {
    navigation.navigate('CarDashboard', {
      manufacturer: manufacturer,
      model: model,
      transmission: transmission,
      plate: plate,
      year: year,
      maxRPMReached: maxRPMReached,
      color: color,
      fuel: fuel,
      situacaoIPVA: situacaoIPVA
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