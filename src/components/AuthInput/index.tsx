import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles'

type AuthInputProps = {
  setUseState: React.Dispatch<React.SetStateAction<string>>;
  value: string
  placeholder: string;
  keyboardType?: string;
  additionalProps?: any;
}

const AuthInput: React.FC<AuthInputProps> = ({ setUseState, value, placeholder, additionalProps }) => {

  function handleOnChangeText(text: string) {
    console.log("Text: " + text)
    setUseState(text);
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={'#a0a0a0'}
      autoCorrect={false}
      value={value}
      onChangeText={(text) => handleOnChangeText(text)}
      {...additionalProps}
    />
  )
}

export default AuthInput