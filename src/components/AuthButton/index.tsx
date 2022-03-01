import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles'

interface AuthButtonProps {
  action: (...props: any) => void;
  text: string;
  activeOpacity?: number;
  additionalProps?: any;
}

const AuthButton: React.FC<AuthButtonProps> = ({ action, text, activeOpacity, additionalProps }) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      style={styles.button}
      onPress={action}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default AuthButton