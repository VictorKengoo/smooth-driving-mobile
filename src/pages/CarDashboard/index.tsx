import React, { Key, useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import CarImage from '../../../images/car.png'
import { styles } from './styles'
import { Props, veiculoProps, viagemProps } from '../../utils/interfaces'
import { LinearGradient } from 'expo-linear-gradient'
import InfoCard from '../../components/InfoCard'
import Mocks from '../../utils/mocks'
import ViagemInfo from '../../components/ViagemInfo'
import Select from '../../components/Select'
import Filters from '../../utils/filters'
import DateUtils from '../../utils/dateUtils'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import EditCarModal from '../../components/EditCarModal'
import api from '../../services/api'
import AuthContext from '../../contexts/auth'

const CarDashboard: React.FC<Props<'CarDashboard'>> = ({ route }) => {
  const context = useContext(AuthContext)
  const {
    id, manufacturer, model, plate, transmission, year, color, fuel, ipva, maxRPMReached
  } = route.params;

  const { ordens, periodos } = Filters

  const [periodo, setPeriodo] = useState(periodos[0]);
  const [ordem, setOrdem] = useState(ordens[0]);
  const [viagens, setViagens] = useState([] as viagemProps[])
  const [showEditCarModal, setShowEditCarModal] = useState(false)
  const [carData, setCarData] = useState({} as veiculoProps)

  useEffect(() => {
    getViagens()
  }, [ordem])

  function getViagens() {
    api.getTripsByUserAndVehicle(id, context.user.id).then(response => {
      setViagens(orderViagens(response.data))
    })
  }

  function handleEdit() {
    setCarData({
      id: id,
      manufacturer: manufacturer,
      model: model,
      plate: plate,
      transmission: transmission,
      year: year,
      maxRPMReached: maxRPMReached,
      color: color,
      fuel: fuel,
      ipva: ipva,
    })
    setShowEditCarModal(true)
  }

  function renderViagemInfo(viagem: viagemProps, index: Key) {
    const eventsCount = viagem.eventsCount
    const eventInfoDateTime = new Date(viagem.dateTimeStart)

    if ((periodo === 'Sempre') ||
      (periodo === 'Hoje' && DateUtils.isToday(eventInfoDateTime) ||
        (periodo === 'Ontem' && DateUtils.isBefore(eventInfoDateTime, 1) ||
          (periodo === 'Últimos 7 dias' && DateUtils.isBefore(eventInfoDateTime, 7) ||
            (periodo === 'Últimos 30 dias' && DateUtils.isBefore(eventInfoDateTime, 30)) ||
            (periodo === 'Últimos 60 dias' && DateUtils.isBefore(eventInfoDateTime, 60))
          )))) {
      return (
        <ViagemInfo
          key={index}
          eventsCount={eventsCount}
          dateTimeStart={viagem.dateTimeStart}
          duration={viagem.duration}
          maxRPMReached={maxRPMReached}
        />
      )
    }
  }

  function orderViagens(viagensList: viagemProps[]) {
    DateUtils.sortByDate(viagensList, ordem)
    return viagensList
  }

  function renderSortIcon() {
    if (ordem === 'Mais recentes') {
      return (
        <TouchableOpacity onPress={() => setOrdem('Mais antigos')}>
          <MaterialCommunityIcons name='sort-descending' size={36} color='white' />
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => setOrdem('Mais recentes')}>
          <MaterialCommunityIcons name='sort-ascending' size={36} color='white' />
        </TouchableOpacity>
      )
    }
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
          <View style={styles.header}>
            <Text style={styles.title}>
              {manufacturer} {model}
            </Text>

            <TouchableOpacity onPress={handleEdit}>
              <MaterialCommunityIcons name='square-edit-outline' size={36} color='white' />
            </TouchableOpacity>
          </View>

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
                    infoName='Transmissão'
                    infoValue={transmission}
                  />
                  <InfoCard
                    infoName='Ano'
                    infoValue={year}
                  />
                  <InfoCard
                    infoName='Cor'
                    infoValue={color}
                  />
                </View>
                <View style={styles.secondRow}>
                  <InfoCard
                    infoName='Score de Segurança Médio'
                    infoValue='9.3'
                  />
                  <InfoCard
                    infoName='CNH Associada'
                    infoValue='Não possui'
                  />
                  <InfoCard
                    infoName='Combustível'
                    infoValue={fuel}
                  />
                  <InfoCard
                    infoName='IPVA'
                    infoValue={ipva}
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

              {/* <Select
                options={ordens}
                text={ordens[0]}
                title={'Selecionar ordem'}
                setState={setOrdem}
              /> */}

              {renderSortIcon()}
            </View>
            <View style={styles.viagens}>
              {
                viagens.map((viagem, index) => {
                  console.log("Viagem: " + JSON.stringify(viagem))
                  return renderViagemInfo(viagem, index)
                })
              }
            </View>
          </View>
        </View>
      </ScrollView>
      <EditCarModal
        carData={carData}
        visible={showEditCarModal}
        title={'Editar Carro'}
        onClose={() => { setShowEditCarModal(false) }}
      />
    </LinearGradient>
  )
}

export default CarDashboard
