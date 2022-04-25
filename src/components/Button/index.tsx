import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalProps } from '../../global/globalProps';

import { styles } from './styles'

interface ButtonProps {
  action: (...props: any) => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ action, text }) => {
  return (
    <TouchableOpacity
      activeOpacity={globalProps.buttonActiveOpacity}
      style={styles.button}
      onPress={action}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Button