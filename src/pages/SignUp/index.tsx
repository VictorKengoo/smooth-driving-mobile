import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  Alert,
  ScrollView,
  TextInput,
  Platform
} from 'react-native'
import AuthButton from '../../components/AuthButton';

import AuthInput from '../../components/AuthInput';
import { globalProps } from '../../global/globalProps';
import { styles } from './styles'

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
  const [data, setData] = useState<object>({});

  const handleSignUp = (data: SignUpFormData) => {
    try {

      signUpPasswordValidation()

      console.log("Dados: " + JSON.stringify({ email: data.email, name: data.name, password: data.password }))

    } catch (err) {

      Alert.alert(
        'Erro na autenticação',
        'Erro: ' + err,
      );
    }
  };

  function signUpPasswordValidation() {

    console.log('User: ' + JSON.stringify(userAuth))
    console.log('password: ' + password)

    if (password === confirmPassword) {
      Alert.alert("Senhas conferem")

    } else {
      Alert.alert("Senhas não conferem")
    }
  }

  return (
    <LinearGradient
      colors={['#000000', '#bdbdbd']}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.main}
        // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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

              <AuthButton
                action={handleSignUp}
                text={'Confirmar'}
                activeOpacity={globalProps.buttonActiveOpacity}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}

export default SignUp
