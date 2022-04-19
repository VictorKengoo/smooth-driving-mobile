import React, { useContext, useEffect, useState } from 'react'
import { BACKEND_USER_URL } from '@env';
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { styles } from './styles'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import AuthContext from '../../contexts/auth'
import CarInfo from '../../components/CarInfo'
import { useNavigation } from '@react-navigation/native'

interface veiculoProps {
  model: string,
  manufacturer: string,
  transmission: string,
  year: number,
  plate: string,
}

const Home = () => {
  const context = useContext(AuthContext)
  const navigation = useNavigation();

  // const { signOut, user } = useAuth()
  const [veiculoSearch, setVeiculoSearch] = useState('')
  const [veiculos, setVeiculos] = useState([] as veiculoProps[])

  useEffect(() => {
    console.log('useEffect')
    getVeiculos()
  }, [])

  function getVeiculos() {
    // fetch(BACKEND_USER_URL)
    //   .then(response => response.json())
    //   .then(data => {
    //     setVeiculos(data)
    //   })
    const veiculosList: React.SetStateAction<veiculoProps[]> = []

    veiculosList.push(
      {
        model: 'Fusca',
        manufacturer: 'Volkswagen',
        transmission: 'Manual',
        year: 2020,
        plate: 'ABC-1234'
      },
      {
        model: 'Fusca',
        manufacturer: 'Volkswagen',
        transmission: 'Manual',
        year: 2020,
        plate: 'ABC-1234'
      }
    )

    setVeiculos(veiculosList)
  }

  function handleLogout() {
    context.signOut()
    navigation.navigate('Login' as never);
  }

  function handleSearch() {

  }

  return (
    <KeyboardAvoidingView style={styles.main} enabled>
      <ScrollView
        // contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
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
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.addButton}
              onPress={() => { }}
            >
              <MaterialIcons name='add-circle-outline' size={40} color='white' />
            </TouchableOpacity>
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
                    model={veiculo.model}
                    manufacturer={veiculo.manufacturer}
                    transmission={veiculo.transmission}
                    year={veiculo.year}
                    plate={veiculo.plate}
                  />
                )
              })
            }

            <CarInfo
              model={'Yaris'}
              manufacturer={'Toyota'}
              transmission={'Automático'}
              year={2021}
              plate={'ABC123'}
            />

            <CarInfo
              model={'Yaris'}
              manufacturer={'Toyota'}
              transmission={'Automático'}
              year={2021}
              plate={'ABC123'}
            />
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Home