import React from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

import { globalProps } from '../../global/globalProps'

import driving from '../../assets/images/driving.png'
import { styles } from './styles'
import AuthButton from '../../components/AuthButton'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

function Home() {
  return (
    <KeyboardAvoidingView style={styles.main}>
      <View>
        <Text style={styles.title}>
          Bem-vindo(a) de volta!
        </Text>

        <TextInput placeholder='Pesquisar veículo'>
          <MaterialIcons name:string='search' size={18} color='white' />
        </TextInput>



        <AuthButton
          action={navigateToSignUp}
          text={'Fazer cadastro'}
          activeOpacity={globalProps.buttonActiveOpacity}
        />

        <Image
          source={driving}
          style={styles.image}
        />

      </View>
    </KeyboardAvoidingView>
  )
}

export default Home