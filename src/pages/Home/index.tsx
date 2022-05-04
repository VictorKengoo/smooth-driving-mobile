import React, { useContext, useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { Gyroscope, Accelerometer } from 'expo-sensors';

import { Subscription } from 'expo-modules-core';

import { Props, veiculoProps } from '../../utils/interfaces'
import Mocks from '../../utils/mocks'

import { styles } from './styles'

import AuthContext from '../../contexts/auth'

import Button from '../../components/Button'
import CarInfo from '../../components/CarInfo'
import AddCarModal from '../../components/AddCarModal'

import SensorData from '../../services/SensorData'

const Home: React.FC<Props<'Home'>> = ({ navigation }) => {
  const context = useContext(AuthContext)

  const [veiculos, setVeiculos] = useState([] as veiculoProps[])
  const [veiculoSearch, setVeiculoSearch] = useState('')
  const [allVeiculos, setAllVeiculos] = useState([] as veiculoProps[])
  const [showAddCarModal, setShowAddCarModal] = useState(false)

  const [viagemStarted, setViagemStarted] = useState(false)

  const [accelerometerSubscription, setAccelerometerSubscription] = useState<Subscription | undefined>()

  const [gyroscopeSubscription, setGyroscopeSubscription] = useState<Subscription | undefined>()

  const _accelerometerData = new SensorData(
    'Accelerometer',
    Accelerometer,
    accelerometerSubscription, setAccelerometerSubscription
  )

  const _gyroscopeData = new SensorData(
    'Gyroscope',
    Gyroscope,
    gyroscopeSubscription, setGyroscopeSubscription
  )

  useEffect(() => {
    getVeiculos()
  }, [])

  function getVeiculos() {
    // fetch(BACKEND_USER_URL)
    //   .then(response => response.json())
    //   .then(data => {
    //     setVeiculos(data)
    //   })

    const veiculosList = Mocks.createCarList()

    setAllVeiculos(veiculosList)
    setVeiculos(veiculosList)
  }

  function handleLogout() {
    context.signOut()
    navigation.navigate('Login');
  }

  function handleSearch() {
    const result = [] as veiculoProps[]
    getVeiculos()

    if (veiculoSearch) {
      const veiculoSearchLower = veiculoSearch.toLowerCase()

      allVeiculos.forEach((veiculo) => {
        if (veiculo.model.includes(veiculoSearchLower) ||
          veiculo.manufacturer.includes(veiculoSearchLower) ||
          veiculo.transmission.includes(veiculoSearchLower) ||
          veiculo.plate.includes(veiculoSearchLower) ||
          veiculo.year.includes(veiculoSearchLower)) {

          result.push(veiculo)
        }
        setVeiculos(result)
      })
    } else {
      getVeiculos()
    }
  }

  function handleUnsubscribe() {
    _accelerometerData._unsubscribe()
    _gyroscopeData._unsubscribe()
    setViagemStarted(false)
  }

  function handleSubscribe() {
    setViagemStarted(true)
    const viagemId = Math.floor(Math.random() * 1000000000000).toString()

    _accelerometerData._subscribe(viagemId);
    _gyroscopeData._subscribe(viagemId);
  }

  return (
    <LinearGradient
      colors={['#000000', '#0c1144']}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView style={styles.main} enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View style={styles.header}>
              <Text style={styles.title}>
                Bem-vindo(a) de volta,
                {"\n"}{context.user?.name}
              </Text>

              <TouchableOpacity
                activeOpacity={0.5}
                // style={styles.logoutButton}
                onPress={handleLogout}
              >
                <MaterialIcons name='logout' size={40} color='white' />
              </TouchableOpacity>
            </View>

            <View style={styles.actions}>
              <View style={styles.searchSection}>
                <MaterialIcons style={styles.searchIcon} name='search' size={24} color='#a0a0a0' />
                <TextInput
                  placeholder='Pesquisar veículo'
                  style={styles.input}
                  placeholderTextColor={'#a0a0a0'}
                  value={veiculoSearch}
                  onChangeText={setVeiculoSearch}
                  autoCorrect={false}
                  returnKeyType='search'
                  clearButtonMode="always"
                  onSubmitEditing={handleSearch}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.addButton}
                onPress={() => setShowAddCarModal(true)}
              >
                <MaterialIcons name='add-circle-outline' size={40} color='white' />
              </TouchableOpacity>
            </View>

            <View style={styles.startTripButton}>
              <Button
                action={viagemStarted ? handleUnsubscribe : handleSubscribe}
                text={viagemStarted ? 'Finalizar viagem' : 'Começar viagem'}
              />
            </View>

            <View style={styles.veiculosSection}>
              <Text style={styles.veiculosTitle}>
                Meus Veículos
              </Text>

              {
                veiculos.map((veiculo, index) => {
                  return (
                    <CarInfo
                      key={index}
                      navigation={navigation}
                      veiculoProps={{
                        id: veiculo.id,
                        manufacturer: veiculo.manufacturer,
                        model: veiculo.model,
                        transmission: veiculo.transmission,
                        year: veiculo.year,
                        plate: veiculo.plate,
                        color: veiculo.color,
                        fuel: veiculo.fuel,
                        situacaoIPVA: veiculo.situacaoIPVA,
                        maxRPMReached: veiculo.maxRPMReached
                      }}
                    />
                  )
                })
              }
            </View>
          </View>
        </ScrollView>
        <AddCarModal
          visible={showAddCarModal}
          title={'Adicionar Carro'}
          onClose={() => { setShowAddCarModal(false) }}
        />
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default Home