import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  Alert,
  Button
} from 'react-native'
import AuthButton from '../../components/AuthButton';

import AuthInput from '../../components/AuthInput';
import { globalProps } from '../../global/globalProps';
import { styles } from './styles'

export default function SignUp() {

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  function printaUser() {
    console.log("user: " + user)
    console.log("senha: " + password)
    console.log("senha confirmada: " + confirmPassword)
  }

  function signUpPasswordValidation() {
    if (password === confirmPassword) {
      Alert.alert("Senhas conferem")
    } else {
      Alert.alert("Senhas não conferem")
    }
  }

  return (
    <KeyboardAvoidingView style={styles.main}>
      <View>
        <Text style={styles.title}>
          Seja bem vindo!
        </Text>

        <Text style={styles.subtitle}>
          Cadastre seus dados para
          {"\n"}monitorar o seus veículos
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

          <AuthInput
            useState={confirmPassword}
            setUseState={setConfirmPassword}
            text={"Confirme a senha"}
            additionalProps={{ secureTextEntry: true }}
          />
        </View>

        <AuthButton
          action={signUpPasswordValidation}
          text={'Confirmar'}
          activeOpacity={globalProps.buttonActiveOpacity}
        />

      </View>
    </KeyboardAvoidingView>
  )
}

function openModal1(id: any) {
  throw new Error('Function not implemented.');
}
