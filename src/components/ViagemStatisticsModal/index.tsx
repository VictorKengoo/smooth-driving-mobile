import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Modal, View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InfoCard from '../InfoCard';

import { styles } from './styles'

interface ViagemStatisticsModalProps {
  title: string,
  visible: boolean,
  onClose: () => void,
  onSelect: (value: string) => void,
}

const ViagemStatisticsModal: React.FC<ViagemStatisticsModalProps> = ({
  title, visible, onClose, onSelect
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.infoCards}>
                <View style={styles.firstRow}>
                  <InfoCard
                    infoName='Placa'
                    infoValue='{plate}'
                  />
                  <InfoCard
                    infoName='CNH Associada'
                    infoValue='Não possui'
                  />
                  <InfoCard
                    infoName='Ano'
                    infoValue='{year}'
                  />
                </View>
                <View style={styles.secondRow}>
                  <InfoCard
                    infoName='Score de Segurança'
                    infoValue='9.3'
                  />
                  <InfoCard
                    infoName='CNH Associada'
                    infoValue='Não possui'
                  />
                  <InfoCard
                    infoName='Ano'
                    infoValue='{year}'
                  />
                </View>
              </View>
            </ScrollView>
          </View>

          {/* <View style={styles.body}>
            <View style={styles.infoCards}>
              <View style={styles.firstRow}>
                <InfoCard
                  infoName='Curvas à esquerda'
                  infoValue='12'
                />
                <InfoCard
                  infoName='Trocas de faixa à esquerda'
                  infoValue='12'
                />
                <InfoCard
                  infoName='Curvas à esquerda'
                  infoValue='12'
                />
              </View>
              <View style={styles.firstRow}>
                <InfoCard
                  infoName='Curvas à direita'
                  infoValue='12'
                />
                <InfoCard
                  infoName='Trocas de faixa à direita'
                  infoValue='12'
                />
                <InfoCard
                  infoName='Aumentos bruscos de R.P.M.'
                  infoValue='12'
                />
              </View>
            </View> */}
          <View style={styles.totalSection}>
            <Text style={styles.totalTitle}>
              Total de Ocorrências
            </Text>
            <Text style={styles.totalValue}>
              54
            </Text>
          </View >
        </View>
        {/* </View> */}
      </Modal>
    </>
  )
}

export default ViagemStatisticsModal