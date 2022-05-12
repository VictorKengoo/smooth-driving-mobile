import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalProps } from '../../global/globalProps';
import { eventsCountProps } from '../../utils/interfaces';
import ViagemStatisticsModal from '../ViagemStatisticsModal';

import { styles } from './styles'

interface ViagemInfoProps {
  dateTimeStart: String,
  duration: String,
  eventsCount: eventsCountProps,
  maxRPMReached?: number,
}

const ViagemInfo: React.FC<ViagemInfoProps> = ({ dateTimeStart, duration, eventsCount, maxRPMReached }) => {

  const [showStatisticsModal, setShowStatisticsModal] = useState(false)

  console.log("DateTime: ", dateTimeStart)

  const viagemDateTimeSplit = dateTimeStart.split('T')
  const viagemDate = viagemDateTimeSplit[0].replaceAll('-', '/')
  const viagemTime = viagemDateTimeSplit[1].slice(0, -1)

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
        onClose={() => { setShowStatisticsModal(false); }}
        onSelect={() => { }}
        maxRPMReached={maxRPMReached}
      />
    </TouchableOpacity >
  )
}

export default ViagemInfo