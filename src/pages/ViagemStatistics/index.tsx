import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Props } from '../../utils/interfaces';

import { styles } from './styles'
import messages from '../../utils/messages';
import InfoCard2 from '../../components/InfoCard2';
import SpeedometerComponent from '../../components/SpeedometerComponent';

const ViagemStatistics: React.FC<Props<'ViagemStatistics'>> = ({ route, navigation }) => {

  const { relatorio, title } = route.params;

  const velocidadeMaxima = relatorio.TripResult.VelocidadeMax
  const velocidadeMedia = relatorio.TripResult.VelocidadeMedia
  const rpmMedio = relatorio.TripResult.RPMmedio
  const curvasAgressivas = relatorio.TripResult.CurvasAgressivas
  const trocasAgressivas = relatorio.TripResult.TrocasAgressivas

  function delegateMessage() {
    let message = ''
    if (velocidadeMaxima > 120) {
      message += messages.warningSpeedMessage
    }

    if (curvasAgressivas + trocasAgressivas > 0) {
      message += messages.warningEventsMessage
    }

    message += messages.defaultMessage

    if (velocidadeMaxima <= 110 && curvasAgressivas + trocasAgressivas == 0) {
      message = messages.congratulationsMessage
    }
    return message
  }

  return (
    <>
      <View style={styles.main}>
        <View style={styles.header}>
          <View style={styles.titleSection}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <MaterialCommunityIcons name="close-circle" size={36} color='#b33939' />
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scroll}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.body}>
            <Text style={styles.sectionTitle}>
              Resultados
            </Text>
            <View style={styles.infoCards}>
              <View style={styles.firstRow}>
                <InfoCard2
                  infoName='Curvas Agresivas'
                  infoValue={curvasAgressivas.toString()}
                />
                <InfoCard2
                  infoName='Velocidade média'
                  infoValue={velocidadeMedia.toString()}
                  unidade=' Km/h'
                />
              </View>
              <View style={styles.secondRow}>
                <InfoCard2
                  infoName='Trocas de faixa agressivas'
                  infoValue={trocasAgressivas.toString()}
                />
                <InfoCard2
                  infoName='R.P.M. Médio'
                  infoValue={rpmMedio.toString()}
                />
              </View>

            </View>
            <SpeedometerComponent
              value={velocidadeMaxima}
              title='Velocidade máxima'
              step={20}
              max={280}
              text={`${velocidadeMaxima} KM/H`}
            />

            <View style={styles.messageSection}>
              <Text style={styles.message}>
                {delegateMessage()}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default ViagemStatistics