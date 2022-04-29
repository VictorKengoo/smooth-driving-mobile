import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Modal, View, Text } from 'react-native';
import { Arc, Background, DangerPath, Indicator, Marks, Needle, Progress } from 'react-native-cool-speedometer';
import Speedometer from 'react-native-cool-speedometer/dist/Speedometer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InfoCard from '../InfoCard';
import { eventsCountProps } from '../../utils/interfaces';

import { styles } from './styles'
interface ViagemStatisticsModalProps {
  title: string,
  visible: boolean,
  eventsCount: eventsCountProps,
  maxRPMReached: number,
  onClose: () => void,
  onSelect: (value: string) => void,
}

const ViagemStatisticsModal: React.FC<ViagemStatisticsModalProps> = ({
  title, visible, onClose, onSelect, eventsCount, maxRPMReached
}) => {

  return (
    <>
      <Modal
        animated
        transparent
        visible={visible}
        animationType="fade"
      >
        <View style={styles.main}>
          <View style={styles.header}>
            <View style={styles.titleSection}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <MaterialCommunityIcons name="close-circle" size={36} color='#b33939' />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <Text style={styles.sectionTitle}>
              Estatísticas
            </Text>
            <View style={styles.infoCards}>
              <View style={styles.firstRow}>
                <InfoCard
                  infoName='Curvas arriscadas à esquerda'
                  infoValue={eventsCount.curvaEsquerda.toString()}
                />
                <InfoCard
                  infoName='Trocas de faixa à esquerda'
                  infoValue={eventsCount.trocaFaixaEsquerda.toString()}
                />
                <InfoCard
                  infoName='Frenagens bruscas'
                  infoValue={eventsCount.frenagemBrusca.toString()}
                />
              </View>
              <View style={styles.secondRow}>
                <InfoCard
                  infoName='Curvas arriscadas à direita'
                  infoValue={eventsCount.curvaDireita.toString()}
                />
                <InfoCard
                  infoName='Trocas de faixa à direita'
                  infoValue={eventsCount.trocaFaixaDireita.toString()}
                />
                <InfoCard
                  infoName='Acelerações bruscas'
                  infoValue={eventsCount.aceleracaoBrusca.toString()}
                />
              </View>
            </View>
            <View style={styles.totalSection}>
              <Text style={styles.totalTitle}>
                Total de Ocorrências
              </Text>
              <Text style={styles.totalValue}>
                54
              </Text>
            </View >
            <View style={styles.speedometerSection}>
              <Text style={styles.sectionTitle}>
                R.P.M. máximo
              </Text>
              <Speedometer
                value={maxRPMReached}
                max={8}
                angle={180}
                accentColor='#212121'
              >
                <Background angle={180} />
                <Arc />
                <Needle />
                <Progress />
                <Marks step={0.5} />
                <DangerPath angle={70} />
              </Speedometer>
              <Text style={styles.speedometerText}>
                6 R.P.M.
              </Text>
              <Text style={styles.speedometerMultiplierText}>
                x1000
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default ViagemStatisticsModal