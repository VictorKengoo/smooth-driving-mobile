import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useCallback, useRef } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import AuthButton from '../../components/AuthButton';
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'

import AuthInput from '../../components/AuthInput';
import { globalProps } from '../../global/globalProps';
import { styles } from './styles'
import { useAuth } from '../../contexts/auth';

interface SignInFormData {
  email: string;
  password: string;
}

export default function Login() {

  const [userAuth, setUserAuth] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { goBack } = useNavigation();

  const { signIn, user } = useAuth();

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      // Zera os erros para cada campo preenchido ele limpe o erro
      setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, { abortEarly: false });

      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      // verifica se o err vem da validacao Yup
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        return;
      }

      Alert.alert(
        'Erro na autenticação',
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
      );
    }
  }, []);

  return (
    <LinearGradient
      colors={['#000000', '#bdbdbd']}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.main}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
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
                useState={userAuth}
                setUseState={setUserAuth}
                text={"Digite o usuário/email"}
              />

              <AuthInput
                useState={password}
                setUseState={setPassword}
                text={"Digite a senha"}
                additionalProps={{ secureTextEntry: true }}
              />
              <AuthButton
                action={handleSignIn}
                text={'Entrar'}
                activeOpacity={globalProps.buttonActiveOpacity}
              />
            </View>


          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient >
  )
}