import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { Modal, View, Text, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthContext from '../../contexts/auth';
import api from '../../services/api';
import alertDelegator from '../../utils/alertDelegator';
import { userProps } from '../../utils/interfaces';
import AuthInput from '../AuthInput';
import Button from '../Button';

import { styles } from './styles'

interface EditProfileModalProps {
  userData: userProps,
  title: string,
  visible: boolean,
  onClose: () => void,
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  title, visible, onClose, userData
}) => {

  const context = useContext(AuthContext)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [CNH, setCNH] = useState('');

  function clearStates() {
    setName('');
    setEmail('');
    setPassword('');
    setCNH('');
  }

  function handleEditProfile() {
    try {
      if (alertDelegator.signUpPasswordValidation(password, confirmPassword)) {
        const userId = context.user.id
        const user = {
          id: userId,
          name: name,
          email: userData.email,
          password: password,
          CNH: CNH,
          vehicles: context.user.vehicles
        } as userProps

        api.editUser(userId, user)
        clearStates()
        onClose()
      }
    }
    catch (err) {
      Alert.alert(
        'Erro na autenticação',
        'Erro: ' + err,
      );
    }
  }

  return (
    <Modal
      animated
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.main}>
        <KeyboardAvoidingView
          enabled
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.header}>
              <View style={styles.titleSection}>
                <Text style={styles.title}>{title}</Text>
              </View>
              <TouchableOpacity onPress={onClose}>
                <MaterialCommunityIcons name="close-circle" size={36} color='#b33939' />
              </TouchableOpacity>
            </View>

            <View style={styles.body}>
              <View
                style={styles.inputFields}
              >
                <AuthInput
                  value={userData.name}
                  setUseState={setName}
                  placeholder="Nome"
                />

                <AuthInput
                  value={userData.email}
                  setUseState={setEmail}
                  placeholder="Email"
                />

                <AuthInput
                  value={userData.CNH}
                  setUseState={setCNH}
                  placeholder="CNH"
                />

                <AuthInput
                  value=''
                  setUseState={setPassword}
                  placeholder="Senha"
                  additionalProps={{
                    secureTextEntry: true,
                    returnKeyType: "next"
                  }}
                />

                <AuthInput
                  value=''
                  setUseState={setConfirmPassword}
                  placeholder="Confirme a senha"
                  additionalProps={{
                    secureTextEntry: true,
                    returnKeyType: "next"
                  }}
                />

                <Button
                  action={handleEditProfile}
                  text={'Confirmar'}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}

export default EditProfileModal