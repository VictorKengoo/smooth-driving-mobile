import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles'

interface InfoCardProps {
  infoName: String,
  infoValue: String
  unidade?: String
}

const InfoCard2: React.FC<InfoCardProps> = ({ infoName, infoValue, unidade }) => {
  return (
    <View style={styles.main}>
      <View style={styles.infoSection}>
        <Text style={styles.infoName}>
          {infoName}
        </Text>
        <View style={styles.infoValueSection}>
          <Text style={styles.infoValue}>
            {infoValue}
          </Text>
          <Text style={styles.unidade}>
            {unidade}
          </Text>
        </View>
      </View>
    </View >
  )
}

export default InfoCard2