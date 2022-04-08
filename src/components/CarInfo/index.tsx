import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles'

import CarImage from '../../../images/car.png'

const CarInfo: React.FC = () => {
  return (

    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.card}
      onPress={() => { }}>
      <View style={styles.cardHeader}>
        <Text style={styles.carName}> Toyota Yaris </Text>
        <Text style={styles.carTransmition}> Automático </Text>
        <Text style={styles.carPlate}> ABC1234 </Text>
      </View>

      <Image style={styles.carImage} source={CarImage} />

    </TouchableOpacity>
  )
}

export default CarInfo