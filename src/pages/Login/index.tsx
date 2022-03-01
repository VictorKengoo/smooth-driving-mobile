import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
} from 'react-native'
import AuthButton from '../../components/AuthButton';

import AuthInput from '../../components/AuthInput';
import { globalProps } from '../../global/globalProps';
import { styles } from './styles'

export default function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function printaUser() {
    console.log("user e senha: " + user + password)
  }

  return (
    <KeyboardAvoidingView style={styles.main}>
      <View>

        <Text style={styles.title}>
          Bem vindo de volta!
        </Text>

        <View style={styles.inputFields}>
          <AuthInput
            useState={user}
            setUseState={setUser}
            text={"Digite o usuário/email"}
          />

          <AuthInput
            useState={password}
            setUseState={setPassword}
            text={"Digite a senha"}
            additionalProps={{ secureTextEntry: true }}
          />
        </View>

        <AuthButton
          action={printaUser}
          text={'Entrar'}
          activeOpacity={globalProps.buttonActiveOpacity}
        />

      </View>
    </KeyboardAvoidingView>
  )
}