import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalProps } from '../../global/globalProps';
import { eventsCountProps } from '../../utils/interfaces';
import ViagemStatisticsModal from '../ViagemStatisticsModal';

import { styles } from './styles'

interface ViagemInfoProps {
  dateTime: String,
  duration: String,
  eventsCount: eventsCountProps
}

const ViagemInfo: React.FC<ViagemInfoProps> = ({ dateTime, duration, eventsCount }) => {

  const [showStatisticsModal, setShowStatisticsModal] = useState(false)

  const viagemDate = dateTime.split('T')[0]
  const viagemTime = dateTime.split('T')[1]
  const infoName = `Viagem ${viagemDate} - ${viagemTime}`

  return (
    <TouchableOpacity
      style={styles.main}
      activeOpacity={globalProps.buttonActiveOpacity}
      onPress={() => setShowStatisticsModal(true)}
    >
      <View style={styles.infoSection}>
        <Text style={styles.infoName}>
          {infoName}
        </Text>
        <Text style={styles.infoValueTitle}>
          Duração
        </Text>
        <Text style={styles.infoValue}>
          {duration}
        </Text>
      </View>
      <ViagemStatisticsModal
        eventsCount={eventsCount}
        title={infoName}
        visible={showStatisticsModal}
        // visible={false}
        onClose={() => { setShowStatisticsModal(false) }}
        onSelect={() => { }}
      />
    </TouchableOpacity >
  )
}

export default ViagemInfo