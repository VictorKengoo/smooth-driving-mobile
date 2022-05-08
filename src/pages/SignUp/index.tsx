import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  Alert,
  ScrollView,
} from 'react-native'
import Button from '../../components/Button';

import AuthInput from '../../components/AuthInput';
import { styles } from './styles'
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {

  const [userAuth, setUserAuth] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [data, setData] = useState<object>({});

  const handleSignUp = () => {
    try {
      console.log("Handling sign up");

      const user = {
        name: userAuth,
        email: email,
        password: password
      }

      if (signUpPasswordValidation()) {
        console.log("Senhas conferem");
        api.signUpUser(user)
        // alertDelegator.showCreationAlert(, "Usuário")
      }

    } catch (err) {
      Alert.alert(
        'Erro na autenticação',
        'Erro: ' + err,
      );
    }
  }

  function signUpPasswordValidation() {
    if (password === confirmPassword) {
      return true
    }

    Alert.alert("Senhas não conferem")
    return false
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
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            <Text style={styles.title}>
              Seja bem vindo!
            </Text>

            <Text style={styles.subtitle}>
              Cadastre seus dados para
              {"\n"}monitorar o seus veículos
            </Text>

            <View
              style={styles.inputFields}
            >
              <AuthInput
                value={userAuth}
                setUseState={setUserAuth}
                placeholder="Digite o usuário"
                additionalProps={{ autoCapitalize: "words" }}
              />

              <AuthInput
                value={email}
                setUseState={setEmail}
                placeholder="Digite o email"
                additionalProps={{
                  keyboardType: "email-address",
                  autoCapitalize: "none",
                  returnKeyType: "next"
                }}
              />

              <AuthInput
                value={password}
                setUseState={setPassword}
                placeholder="Digite a senha"
                additionalProps={{
                  secureTextEntry: true,
                  returnKeyType: "next"
                }}
              />

              <AuthInput
                value={confirmPassword}
                setUseState={setConfirmPassword}
                placeholder="Confirme a senha"
                additionalProps={{
                  secureTextEntry: true,
                  textContentType: "newPassword",
                  returnKeyType: "send"
                }}
              />

              <Button
                action={handleSignUp}
                text={'Confirmar'}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default SignUp
