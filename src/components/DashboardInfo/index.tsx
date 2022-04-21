import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles'

interface DashboardInfoProps {
  infoName: String,
  infoValue: String
}

const DashboardInfo: React.FC<DashboardInfoProps> = ({ infoName, infoValue }) => {
  return (
    <View style={styles.main}>
      <View style={styles.infoSection}>
        <Text style={styles.infoName}>
          {infoName}
        </Text>
        <Text style={styles.infoValue}>
          {infoValue}
        </Text>
      </View>
    </View >
  )
}

export default DashboardInfo