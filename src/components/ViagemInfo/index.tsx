import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalProps } from '../../global/globalProps';

import { styles } from './styles'

interface ViagemInfoProps {
  infoName: String,
  infoValue: String,
  onPress: () => void,
}

const ViagemInfo: React.FC<ViagemInfoProps> = ({ infoName, infoValue, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.main}
      activeOpacity={globalProps.buttonActiveOpacity}
      onPress={onPress}
    >
      <View style={styles.infoSection}>
        <Text style={styles.infoName}>
          {infoName}
        </Text>
        <Text style={styles.infoValue}>
          {infoValue}
        </Text>
      </View>
    </TouchableOpacity >
  )
}

export default ViagemInfo