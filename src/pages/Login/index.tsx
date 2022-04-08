import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useContext } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
} from 'react-native'
import AuthButton from '../../components/AuthButton';

import AuthInput from '../../components/AuthInput';
import AuthContext from '../../contexts/auth';
import { globalProps } from '../../global/globalProps';
import { styles } from './styles'

export default function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { signed, signIn } = useContext(AuthContext)

  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  async function handleSignIn() {
    signIn()
  }

  return (
    <LinearGradient
      colors={['#000000', '#bdbdbd']}
      style={{ flex: 1 }}
    >
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
            action={handleSignIn}
            text={'Entrar'}
            activeOpacity={globalProps.buttonActiveOpacity}
          />

        </View>
      </KeyboardAvoidingView>
    </LinearGradient >
  )
}