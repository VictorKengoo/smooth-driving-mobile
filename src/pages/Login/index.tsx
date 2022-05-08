import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';

import AuthInput from '../../components/AuthInput';
import { styles } from './styles'
import { useAuth } from '../../contexts/auth';

export default function Login() {

  const [emailAuth, setEmailAuth] = useState('');
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { signIn } = useAuth();

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home' as never);
  }

  let errors = [''];
  function validateFields() {
    if (!emailAuth) {
      errors.push("Usuário/E-mail obrigatório")
    }

    if (!password) {
      errors.push("Senha obrigatória")
    }

    if (errors)
      return true
    else
      return false
  }

  function handleSignIn() {

    if (validateFields()) {
      signIn({ email: emailAuth, password: password }, handleNavigateToHome);
    }
    else
      Alert.alert('Erro', JSON.stringify(errors))
  }

  return (
    <LinearGradient
      colors={['#000000', '#0c1144']}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.main}
        enabled
      >
        <ScrollView
          // contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text style={styles.title}>
              Bem vindo de volta!
            </Text>
            <View
              style={styles.inputFields}
            >
              <AuthInput
                value={emailAuth}
                setUseState={setEmailAuth}
                placeholder={"Digite o email"}
              />

              <AuthInput
                value={password}
                setUseState={setPassword}
                placeholder={"Digite a senha"}
                additionalProps={{ secureTextEntry: true }}
              />
              <Button
                action={handleSignIn}
                text={'Entrar'}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient >
  )
}