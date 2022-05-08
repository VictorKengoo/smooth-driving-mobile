import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import React, { useEffect, useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles'

interface PickerModalProps {
  options: string[],
  title: string,
  visible: boolean,
  onClose: () => void,
  onSelect: (value: string) => void,
  value?: any
}

const PickerModal: React.FC<PickerModalProps> = ({
  options, title, visible, onClose, onSelect, value
}) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    if (value) {
      setSelectedValue(value)
    }
  }, [value])

  return (
    <>
      <Modal
        animated
        transparent
        visible={visible}
        animationType="fade"
      >
        <View style={styles.main}>
          <View style={styles.pickerContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={onClose}>
                <MaterialIcons name='close' size={36} color='#b33939' />
              </TouchableOpacity>

              <Text style={styles.title}>{title}</Text>

              <TouchableOpacity onPress={() => {
                onSelect(selectedValue)
              }}>
                <MaterialIcons name='check' size={36} color='#54b339' />
              </TouchableOpacity>
            </View>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(value) => value ? setSelectedValue(value) : selectedValue}
            >
              {
                options.map((option, index) => {
                  return (
                    <Picker.Item key={index} value={option} label={option} />
                  )
                })
              }
            </Picker>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default PickerModal