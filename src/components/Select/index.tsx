import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import React, { useEffect, useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PickerModal from '../PickerModal';

import { styles } from './styles'

interface SelectButtonProps {
  // onChangeSelect: () => void,
  options: string[],
  text: String,
  title: string,
  setState: (value: string) => void,
}

const Select: React.FC<SelectButtonProps> = ({ text, title, options, setState }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [txt, setTxt] = useState(text);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.main}>
        <Text style={styles.text}>
          {txt}
        </Text>
        <MaterialCommunityIcons name='chevron-down' size={26} color='#C4C4C4' />
      </TouchableOpacity>
      <PickerModal
        options={options}
        visible={modalVisible}
        title={title}
        onClose={() => { setModalVisible(false) }}
        onSelect={(value) => {
          if (value) {
            setTxt(value)
            setState(value)
            setModalVisible(false)
          }
        }}
        value={txt}
      />
    </>
  )
}

export default Select