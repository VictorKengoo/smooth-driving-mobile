import React, { useContext, useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { styles } from './styles'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import AuthContext from '../../contexts/auth'
import CarInfo from '../../components/CarInfo'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const context = useContext(AuthContext)
  const navigation = useNavigation();

  // const { signOut, user } = useAuth()
  const [veiculo, setVeiculo] = useState('')

  function handleLogout() {
    context.signOut()
    navigation.navigate('Login' as never);
  }

  return (
    <KeyboardAvoidingView style={styles.main} enabled>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>
              Bem-vindo(a) de volta,
              {"\n"}{context.user?.name}
            </Text>

            <TouchableOpacity
              activeOpacity={0.5}
              // style={styles.logoutButton}
              onPress={handleLogout}
            >
              <MaterialIcons name='logout' size={40} color='white' />
            </TouchableOpacity>
          </View>

          <View style={styles.actions}>
            <View style={styles.searchSection}>
              <MaterialIcons style={styles.searchIcon} name='search' size={24} color='#a0a0a0' />
              <TextInput
                placeholder='Pesquisar veículo'
                style={styles.input}
                placeholderTextColor={'#a0a0a0'}
                value={veiculo}
                onChangeText={setVeiculo}
                autoCorrect={false}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.addButton}
              onPress={() => { }}
            >
              <MaterialIcons name='add-circle-outline' size={40} color='white' />
            </TouchableOpacity>
          </View>

          <View style={styles.veiculosSection}>
            <Text style={styles.veiculosTitle}>
              Meus Veículos
            </Text>

            <CarInfo />
            <CarInfo />
            <CarInfo />
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Home