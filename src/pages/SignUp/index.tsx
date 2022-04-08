import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  Alert,
  ScrollView
} from 'react-native'
import AuthButton from '../../components/AuthButton';

import * as Yup from 'yup'

import AuthInput from '../../components/AuthInput';
import { globalProps } from '../../global/globalProps';
import { styles } from './styles'
import { useAuth } from '../../contexts/auth';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  user: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {

  const [userAuth, setUserAuth] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState({});

  const [data, setData] = useState<object>({});

  const { goBack } = useNavigation();

  const { signIn, user } = useAuth();

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
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

  function signUpPasswordValidation() {
    if (password === confirmPassword) {
      Alert.alert("Senhas conferem")
      setData({ user, password })
      console.log('User: ', user)
      console.log('password: ', password)
      console.log(JSON.stringify(data))
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
                useState={userAuth}
                setUseState={setUserAuth}
                text="Digite o usuário"
                additionalProps={{ autoCapitalize: "words" }}
              />

              <AuthInput
                useState={email}
                setUseState={setEmail}
                additionalProps={{
                  keyboardType: "email-address",
                  autoCapitalize: "none",
                  returnKeyType: "next"
                }}
                text="Digite o email"
              />

              <AuthInput
                useState={password}
                setUseState={setPassword}
                text="Digite a senha"
                additionalProps={{
                  secureTextEntry: true,
                  // textContentType: "newPassword",
                  returnKeyType: "next"
                }}
              />

              <AuthInput
                useState={confirmPassword}
                setUseState={setConfirmPassword}
                text="Confirme a senha"
                additionalProps={{
                  secureTextEntry: true,
                  textContentType: "newPassword",
                  returnKeyType: "send"
                }}
              />

              <AuthButton
                action={() => {
                  signUpPasswordValidation()
                }}
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

function openModal1(id: any) {
  throw new Error('Function not implemented.');
}
