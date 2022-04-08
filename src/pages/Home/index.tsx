import React, { useContext, useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  Image
} from 'react-native'

import driving from '../../assets/images/driving.png'
import { styles } from './styles'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import AuthContext from '../../contexts/auth'

function Home() {

  const { signOut } = useContext(AuthContext)
  const [veiculo, setVeiculo] = useState('')

  function handleSignOut() {
    signOut()
  }

  return (
    <LinearGradient
      colors={['#000000', '#bdbdbd']}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView style={styles.main}>
        <View>
          <Text style={styles.title}>
            Bem-vindo(a) de volta,
            {"\n"}Victor
          </Text>

          <View style={styles.searchInput}>
            <MaterialIcons name='search' size={18} color='white' />
            <TextInput placeholder='Pesquisar veículo'
              style={styles.input}
              placeholderTextColor={'#a0a0a0'}
              value={veiculo}
              autoCorrect={false}
            />
          </View>

          <Image
            source={driving}
            style={styles.image}
          />

        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default Home