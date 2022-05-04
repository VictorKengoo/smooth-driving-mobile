import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Modal, View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Filters from '../../utils/filters';
import { veiculoProps } from '../../utils/interfaces';
import AuthInput from '../AuthInput';
import Button from '../Button';
import Select from '../Select';

import { styles } from './styles'

interface EditCarModalProps {
  carData: veiculoProps,
  title: string,
  visible: boolean,
  onClose: () => void,
}

const EditCarModal: React.FC<EditCarModalProps> = ({
  title, visible, onClose, carData
}) => {

  const currentYear = new Date().getFullYear()

  const statesPlaceholder = [
    'Ano',
    'Combustível',
    'Transmissão',
    'Situação IPVA'
  ]

  const [year, setYear] = useState(statesPlaceholder[0]);
  const [fuel, setFuel] = useState(statesPlaceholder[1]);
  const [plate, setPlate] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [transmission, setTransmission] = useState(statesPlaceholder[2]);
  const [situacaoIPVA, setSituacaoIPVA] = useState(statesPlaceholder[3]);

  function clearStates() {
    setYear(statesPlaceholder[0]);
    setFuel(statesPlaceholder[1]);
    setPlate('');
    setModel('');
    setColor('');
    setManufacturer('');
    setTransmission(statesPlaceholder[2]);
    setSituacaoIPVA(statesPlaceholder[3]);
  }

  function handleInsertCar() {
    console.log('year: ' + year)
    console.log('fuel: ' + fuel)
    console.log('plate: ' + plate)
    console.log('model: ' + model)
    console.log('color: ' + color)
    console.log('manufacturer: ' + manufacturer)
    console.log('transmission: ' + transmission)
    console.log('situacaoIPVA: ' + situacaoIPVA)
    clearStates()
    onClose()
  }

  function createYearsList() {
    const start = 1960
    return [...Array(currentYear - start + 1).keys()].map(x => (x + start).toString()).reverse()
  }

  var yearsList = createYearsList();

  return (
    <Modal
      animated
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.main}>
        <KeyboardAvoidingView
          enabled
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flex: 1 }}
            keyboardShouldPersistTaps="handled"
          >
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
                  text={carData.year}
                  title={'Ano do carro'}
                  setState={setYear}
                />

                <Select
                  options={Filters.fuelList}
                  text={carData.fuel}
                  title={'Combustível do Motor'}
                  setState={setFuel}
                />

                <Select
                  options={Filters.transmissionsList}
                  text={carData.transmission}
                  title={'Transmissão do carro'}
                  setState={setTransmission}
                />

                <Select
                  options={Filters.situationIPVAList}
                  text={carData.situacaoIPVA}
                  title={'Situação IPVA'}
                  setState={setSituacaoIPVA}
                />

                <AuthInput
                  value={carData.plate}
                  setUseState={setPlate}
                  placeholder="Placa do carro"
                />

                <AuthInput
                  value={carData.model}
                  setUseState={setModel}
                  placeholder="Modelo do carro"
                />

                <AuthInput
                  value={carData.manufacturer}
                  setUseState={setManufacturer}
                  placeholder="Fabricante do carro"
                />

                <AuthInput
                  value={carData.color}
                  setUseState={setColor}
                  placeholder="Cor do carro"
                />

                <Button
                  action={handleInsertCar}
                  text={'Confirmar'}
                />
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  )
}

export default EditCarModal