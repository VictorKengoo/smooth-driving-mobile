import React, { useState } from 'react'

import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native'

import { styles } from './styles'
import { useAuth } from '../../contexts/auth'

function User() {

  const { signOut } = useAuth()
  const [veiculo, setVeiculo] = useState('')

  function handleSignOut() {
    signOut()
  }

  return (
    <KeyboardAvoidingView
      style={styles.main}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.addButton}
          onPress={() => { }}
        >
          <Text style={styles.signOutButtonText}>
            Sair
          </Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}

export default User