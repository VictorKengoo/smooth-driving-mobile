import React from 'react';
import LottieView from 'lottie-react-native'

import { styles } from './styles'
import { View, StyleSheet, Text } from 'react-native';

import Loading from '../../../assets/loading.json'

const AppLoader: React.FC = () => {

  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView source={Loading} autoPlay loop />
      <Text style={styles.text}>Gerando relatório, isso pode levar alguns segundos...</Text>
    </View>
  )
}

export default AppLoader