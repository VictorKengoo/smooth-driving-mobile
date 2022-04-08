import React from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'

// import api from '../../services/api'

import { globalProps } from '../../global/globalProps'

import driving from '../../assets/images/driving.png'
import { styles } from './styles'
import AuthButton from '../../components/AuthButton'
import { LinearGradient } from 'expo-linear-gradient'

function Landing({ navigation }: any) {

  function navigateToLogin() {
    console.log('navigateToLogin')
    navigation.navigate('Login' as never)
  }

  async function navigateToSignUp() {
    navigation.navigate('SignUp' as never)
  }

  return (
    <LinearGradient
      colors={['#000000', '#bdbdbd']}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView style={styles.main}>
        <View>
          <Text style={styles.title}>
            Smooth Driving
          </Text>

          <Text style={styles.subtitle}>
            Monitore seus veículos em um clique
          </Text>

          <AuthButton
            action={navigateToSignUp}
            text={'Fazer cadastro'}
            activeOpacity={globalProps.buttonActiveOpacity}
          />

          <TouchableOpacity
            activeOpacity={globalProps.buttonActiveOpacity}
            style={styles.loginButton}
            onPress={navigateToLogin}
          >
            <Text style={styles.loginButtonText}>
              Já possuo cadastro
            </Text>
          </TouchableOpacity>

          <Image
            source={driving}
            style={styles.image}
          />

        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default Landing