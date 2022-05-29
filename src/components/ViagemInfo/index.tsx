import React, { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { globalProps } from '../../global/globalProps';
import api from '../../services/api';
import { ScreenNavigationProp } from '../../utils/interfaces';

import { styles } from './styles'

interface ViagemInfoProps {
  dateTimeStart: String,
  duration: string,
  tripId: string,
  entityId: String,
  navigation: ScreenNavigationProp<"CarDashboard">
  setShowAppLoader: Dispatch<SetStateAction<boolean>>
}

const ViagemInfo: React.FC<ViagemInfoProps> = ({ dateTimeStart, duration, tripId, entityId, navigation, setShowAppLoader }) => {

  const viagemDateTimeSplit = dateTimeStart.split('T')
  const viagemDate = viagemDateTimeSplit[0].replaceAll('-', '/')
  const viagemTime = viagemDateTimeSplit[1].slice(0, -1)
  const infoName = `Viagem ${viagemDate} - ${viagemTime}`

  function getRelatorio() {
    setShowAppLoader(true)
    api.requestRelatorio(tripId, entityId).then(response => {
      if (response.status === 200) {
        setShowAppLoader(false)

        navigation.navigate('ViagemStatistics', {
          relatorio: response.data,
          title: infoName
        })
      }
    })
  }

  return (
    <TouchableOpacity
      style={styles.main}
      activeOpacity={globalProps.buttonActiveOpacity}
      onPress={() => {
        getRelatorio()
      }}
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
    </TouchableOpacity >
  )
}

export default ViagemInfo