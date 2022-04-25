import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'
import CarImage from '../../../images/car.png'
import { styles } from './styles'
import { Props, viagemProps } from '../../utils/interfaces'
import { LinearGradient } from 'expo-linear-gradient'
import InfoCard from '../../components/InfoCard'
import Mocks from '../../utils/mocks'
import ViagemInfo from '../../components/ViagemInfo'
import Select from '../../components/Select'
import Filters from '../../utils/filters'
import ViagemStatisticsModal from '../../components/ViagemStatisticsModal'

const CarDashboard: React.FC<Props<'CarDashboard'>> = ({ route }) => {

  const { manufacturer, model, plate, transmission, year, maxRPMReached } = route.params;

  const { ordens, periodos } = Filters

  const [periodo, setPeriodo] = useState(periodos[0]);
  const [ordem, setOrdem] = useState(ordens[0]);
  const [viagens, setViagens] = useState([] as viagemProps[])
  const [showStatisticsModal, setShowStatisticsModal] = useState(false)

  useEffect(() => {
    getViagens()
  }, [])

  function getViagens() {
    // fetch(BACKEND_USER_URL)
    //   .then(response => response.json())
    //   .then(data => {
    //     setViagens(data)
    //   })
    const viagensList = Mocks.createViagensList()
    setViagens(viagensList)
  }

  function handleShowStatisticsModal() {
    setShowStatisticsModal(true)
  }

  return (
    <LinearGradient
      colors={['#000000', '#0c1144']}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={styles.main}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.mainContent}>
          <Text style={styles.title}>
            {manufacturer} {model}
          </Text >

          <Text style={styles.subtitle}>
            {transmission}
          </Text>

          <LinearGradient
            colors={['rgba(64, 64, 64, 0.3)', 'rgba(150, 150, 150, 1)']}
            start={{ x: 0.7, y: 0.5 }}
            style={styles.carImageBoard}
          >
            <View style={styles.carImageView}>
              <Image style={styles.carImage} source={CarImage} />
            </View>
          </LinearGradient>

          <View>
            <Text style={styles.infoTitle}>
              Informações do veículo
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.infoCards}>
                <View style={styles.firstRow}>
                  <InfoCard
                    infoName='Placa'
                    infoValue={plate}
                  />
                  <InfoCard
                    infoName='CNH Associada'
                    infoValue='Não possui'
                  />
                  <InfoCard
                    infoName='Ano'
                    infoValue={year}
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
                    infoValue={year}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={styles.statisticsSection}>
            <Text style={styles.infoTitle}>
              Estatísticas (Número de ocorrências)
            </Text>
            <View style={styles.filters}>

              <Select
                options={periodos}
                text={periodos[0]}
                title={'Selecionar período'}
                setState={setPeriodo}
              />

              <Select
                options={ordens}
                text={ordens[0]}
                title={'Selecionar ordem'}
                setState={setOrdem}
              />

            </View>
            <View style={styles.viagens}>
              {
                viagens.map((viagem, index) => {
                  if (periodo === periodos[0]) {
                    return (
                      <ViagemInfo
                        key={index}
                        infoName={'Viagem ' + viagem.eventInfo.date + ' - ' + viagem.eventInfo.time}
                        infoValue='2h:36m:23s'
                        onPress={handleShowStatisticsModal}
                      />
                    )
                  } else {
                    console.log('Não é sempre, é: ' + periodo)
                  }
                })
              }
            </View>
          </View>
        </View>
        <ViagemStatisticsModal
          title={'My modal'}
          visible={showStatisticsModal}
          // visible={false}
          onClose={() => { setShowStatisticsModal(false) }}
          onSelect={() => { }}
        />
      </ScrollView>
    </LinearGradient>
  )
}

export default CarDashboard
