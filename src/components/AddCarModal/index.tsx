import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AuthInput from '../AuthInput';
import Button from '../Button';
import PickerModal from '../PickerModal';
import Select from '../Select';

import { styles } from './styles'

interface AddCarModalProps {
  title: string,
  visible: boolean,
  onClose: () => void,
}

const AddCarModal: React.FC<AddCarModalProps> = ({
  title, visible, onClose
}) => {

  const [year, setYear] = useState('');
  const [fuel, setFuel] = useState('');
  const [plate, setPlate] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [transmission, setTransmission] = useState('');
  const [situacaoIPVA, setSituacaoIPVA] = useState('');

  function handleInsertCar() {
    console.log('year: ' + year)
    console.log('fuel: ' + fuel)
    console.log('plate: ' + plate)
    console.log('model: ' + model)
    console.log('color: ' + color)
    console.log('manufacturer: ' + manufacturer)
    console.log('transmission: ' + transmission)
    console.log('situacaoIPVA: ' + situacaoIPVA)
  }

  const range = (start: number, end: number) => {
    return Array.from(Array(end - start + 1).keys()).map(x => (Math.floor(x + start)).toString())
  }

  const currentYear = new Date().getFullYear()
  const yearsList = range(currentYear, 1960).reverse()

  return (
    <>
      <Modal
        animated
        transparent
        visible={visible}
        animationType="fade"
      >
        <View style={styles.main}>
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

              <Select
                options={yearsList}
                text={new Date().getFullYear().toString()}
                title={'Selecionar período'}
                setState={setYear}
              />

              <AuthInput
                value={fuel}
                setUseState={setFuel}
                placeholder="Digite o email"
                additionalProps={{
                  keyboardType: "email-address",
                  autoCapitalize: "none",
                  returnKeyType: "next"
                }}
              />

              <AuthInput
                value={plate}
                setUseState={setPlate}
                placeholder="Digite a senha"
                additionalProps={{
                  secureTextEntry: true,
                  returnKeyType: "next"
                }}
              />

              <AuthInput
                value={model}
                setUseState={setModel}
                placeholder="Confirme a senha"
                additionalProps={{
                  secureTextEntry: true,
                  textContentType: "newPassword",
                  returnKeyType: "send"
                }}
              />

              <AuthInput
                value={color}
                setUseState={setColor}
                placeholder="Confirme a senha"
                additionalProps={{
                  secureTextEntry: true,
                  textContentType: "newPassword",
                  returnKeyType: "send"
                }}
              />

              <AuthInput
                value={manufacturer}
                setUseState={setManufacturer}
                placeholder="Confirme a senha"
                additionalProps={{
                  secureTextEntry: true,
                  textContentType: "newPassword",
                  returnKeyType: "send"
                }}
              />

              <AuthInput
                value={transmission}
                setUseState={setTransmission}
                placeholder="Confirme a senha"
                additionalProps={{
                  secureTextEntry: true,
                  textContentType: "newPassword",
                  returnKeyType: "send"
                }}
              />

              <AuthInput
                value={situacaoIPVA}
                setUseState={setSituacaoIPVA}
                placeholder="Confirme a senha"
                additionalProps={{
                  secureTextEntry: true,
                  textContentType: "newPassword",
                  returnKeyType: "send"
                }}
              />

              <Button
                action={handleInsertCar}
                text={'Confirmar'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default AddCarModal