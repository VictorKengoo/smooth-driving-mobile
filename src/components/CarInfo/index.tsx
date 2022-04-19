import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles'

import CarImage from '../../../images/car.png'

interface carInfoProps {
  model: string,
  manufacturer: string,
  transmission: string,
  year: number,
  plate: string,
}

const CarInfo: React.FC<carInfoProps> = ({ model, manufacturer, transmission, plate, year }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.card}
      onPress={() => { }}>
      <View style={styles.cardHeader}>
        <Text style={styles.model}>{manufacturer}</Text>
        <Text style={styles.model}>{model}</Text>
        {/* <Text style={styles.model}>{manufacturer} {model}</Text> */}
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.transmission}>{transmission}</Text>
        <Text style={styles.plate}>{plate}</Text>
      </View>

      <Image style={styles.image} source={CarImage} />

    </TouchableOpacity>
  )
}

export default CarInfo