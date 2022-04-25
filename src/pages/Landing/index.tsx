import React from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../../services/api'

import { globalProps } from '../../global/globalProps'

import driving from '../../assets/images/driving.png'
import { styles } from './styles'
import Button from '../../components/Button'
import { LinearGradient } from 'expo-linear-gradient'

import CarBackground from '../../../images/car-background.png'

function Landing({ navigation }: any) {

  function navigateToLogin() {
    AsyncStorage.clear()
    navigation.navigate('Login' as never)
  }

  async function navigateToSignUp() {
    navigation.navigate('SignUp' as never)
  }

  return (
    <ImageBackground
      source={CarBackground}
      style={styles.image}
      imageStyle={{
        resizeMode: "cover",
        alignSelf: "flex-end"
      }}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Smooth{"\n"}
          Driving
        </Text>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.subtitle}>
          Monitore seus veículos em um clique
        </Text>

        <TouchableOpacity
          activeOpacity={globalProps.buttonActiveOpacity}
          style={styles.signUpButton}
          onPress={navigateToSignUp}
        >
          <Text style={styles.signUpButtonText}>
            Fazer cadastro
          </Text>
        </TouchableOpacity>

        <View style={{ width: 256, marginBottom: 24, marginTop: 4 }}>
          <Button
            action={navigateToLogin}
            text='Login'
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default Landing