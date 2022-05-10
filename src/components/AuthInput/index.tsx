import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles'

type AuthInputProps = {
  setUseState: React.Dispatch<React.SetStateAction<string>>;
  value: String
  placeholder: string;
  keyboardType?: string;
  additionalProps?: any;
}

const AuthInput: React.FC<AuthInputProps> = ({ setUseState, value, placeholder, additionalProps }) => {

  const [inputValue, setInputValue] = useState(value);

  function handleOnChangeText(text: string) {
    setInputValue(text);
    setUseState(text);
  }

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={'#a0a0a0'}
      autoCorrect={false}
      value={inputValue}
      onChangeText={(text) => handleOnChangeText(text)}
      {...additionalProps}
    />
  )
}

export default AuthInput