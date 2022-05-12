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
import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons'
// import { Gyroscope, Accelerometer } from 'expo-sensors';
// import Button from '../../components/Button'
// import SensorData from '../../services/SensorData'
// import { Subscription } from 'expo-modules-core';

import { Props, userProps, veiculoProps } from '../../utils/interfaces'

import { styles } from './styles'

import AuthContext from '../../contexts/auth'

import CarInfo from '../../components/CarInfo'
import AddCarModal from '../../components/AddCarModal'

import api from '../../services/api'
import { useReducer } from 'react'
import EditProfileModal from '../../components/EditProfileModal'

const Home: React.FC<Props<'Home'>> = ({ navigation }) => {
  const context = useContext(AuthContext)

  const authUser = context.user

  const [veiculos, setVeiculos] = useState([] as veiculoProps[])
  const [veiculoSearch, setVeiculoSearch] = useState('')
  const [showAddCarModal, setShowAddCarModal] = useState(false)
  const [showEditUserModal, setShowEditUserModal] = useState(false)
  const [userData, setUserData] = useState({} as userProps)
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  // const [viagemStarted, setViagemStarted] = useState(false)

  // const [accelerometerSubscription, setAccelerometerSubscription] = useState<Subscription | undefined>()

  // const [gyroscopeSubscription, setGyroscopeSubscription] = useState<Subscription | undefined>()

  // const _accelerometerData = new SensorData(
  //   'Accelerometer',
  //   Accelerometer,
  //   accelerometerSubscription, setAccelerometerSubscription
  // )

  // const _gyroscopeData = new SensorData(
  //   'Gyroscope',
  //   Gyroscope,
  //   gyroscopeSubscription, setGyroscopeSubscription
  // )

  useEffect(() => {
    getVeiculos()
  }, [veiculoSearch, ignored])

  async function getVeiculos() {
    await sleep(500)
    api
      .getUserVehicles(context.user.id)
      .then(item => {
        setVeiculos(item.data)
      })
  }

  const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  function handleEditProfile() {
    setUserData({
      id: authUser.id,
      name: authUser.name,
      email: authUser.email,
      password: authUser.password,
      CNH: userData.CNH,
      vehicles: authUser.vehicles
    })
    setShowEditUserModal(true)
  }

  function handleLogout() {
    context.signOut()
    navigation.navigate('Login')
  }

  function handleSearch() {
    const result = [] as veiculoProps[]
    // console.log("Searching for: " + veiculoSearch)
    // getVeiculos()

    if (veiculoSearch) {
      const veiculoSearchLower = veiculoSearch.toLowerCase()

      veiculos.forEach((veiculo) => {
        // console.log("Validation: ", veiculo.manufacturer.toLowerCase().includes(veiculoSearchLower))
        console.log(veiculo)
        if (veiculo) {
          if (veiculo.model.toLowerCase().includes(veiculoSearchLower) ||
            veiculo.manufacturer.toLowerCase().includes(veiculoSearchLower) ||
            veiculo.transmission.toLowerCase().includes(veiculoSearchLower) ||
            veiculo.plate.toLowerCase().includes(veiculoSearchLower) ||
            veiculo.year.toString().includes(veiculoSearchLower)) {

            result.push(veiculo)
          }
          // console.log("Result: " + JSON.stringify(result))
          setVeiculos(result)
        } else {
          setVeiculos([] as veiculoProps[])
        }
      })
    } else {
      getVeiculos()
    }
  }

  // function handleUnsubscribe() {
  //   _accelerometerData._unsubscribe()
  //   _gyroscopeData._unsubscribe()
  //   setViagemStarted(false)
  // }

  // function handleSubscribe() {
  //   setViagemStarted(true)
  //   const viagemId = Math.floor(Math.random() * 1000000000000).toString()

  //   _accelerometerData._subscribe(viagemId);
  //   _gyroscopeData._subscribe(viagemId);
  // }

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
                {"\n"}{authUser?.name}
              </Text>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={handleEditProfile}
              >
                <FontAwesome5 name='user-edit' size={36} color='white' />
              </TouchableOpacity>
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

            {/* <View style={styles.startTripButton}>
              <Button
                action={viagemStarted ? handleUnsubscribe : handleSubscribe}
                text={viagemStarted ? 'Finalizar viagem' : 'Começar viagem'}
              />
            </View> */}

            <View style={styles.veiculosSection}>
              <Text style={styles.veiculosTitle}>
                Meus Veículos
              </Text>

              {
                veiculos ? veiculos.map((veiculo, index) => {
                  console.log("IPVA: ", veiculo.ipva)
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
                        ipva: veiculo.ipva,
                        maxRPMReached: veiculo.maxRPMReached
                      }}
                    />
                  )
                }) : null
              }
            </View>
          </View>
        </ScrollView>
        <AddCarModal
          visible={showAddCarModal}
          title={'Adicionar Carro'}
          onClose={() => { setShowAddCarModal(false) }}
          userId={authUser?.id}
          refreshScreen={forceUpdate}
        />
        <EditProfileModal
          userData={userData}
          visible={showEditUserModal}
          title={'Editar User'}
          onClose={() => { setShowEditUserModal(false) }}
        />
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default Home