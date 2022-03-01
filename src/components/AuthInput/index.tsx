import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles'

interface setUseStateProps {

}

interface AuthInputProps {
  useState?: string;
  setUseState?: (...props: any) => void;
  text: string;
  additionalProps?: any;
}

const AuthInput: React.FC<AuthInputProps> = ({ useState, setUseState, text, additionalProps }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={text}
      placeholderTextColor={'#a0a0a0'}
      value={useState}
      autoCorrect={false}
      onChangeText={setUseState}
      {...additionalProps}
    />
  )
}

export default AuthInput