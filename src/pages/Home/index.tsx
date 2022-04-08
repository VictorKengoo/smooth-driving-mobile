import React, { useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import { styles } from './styles'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { useAuth } from '../../contexts/auth'
import CarInfo from '../../components/CarInfo'

function Home() {

  const { signOut, user } = useAuth()
  const [veiculo, setVeiculo] = useState('')

  return (
    <KeyboardAvoidingView style={styles.main}>
      <View>
        <Text style={styles.title}>
          Bem-vindo(a) de volta,
          {"\n"}{user?.name}
        </Text>

        <View style={styles.searchSection}>
          <TextInput placeholder='Pesquisar veículo'
            style={styles.input}
            placeholderTextColor={'#a0a0a0'}
            value={veiculo}
            autoCorrect={false}
          />
          <MaterialIcons style={styles.searchIcon} name='search' size={32} color='#a0a0a0' />
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

          <CarInfo />
          <CarInfo />
          <CarInfo />
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

export default Home