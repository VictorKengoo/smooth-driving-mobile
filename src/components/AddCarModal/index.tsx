import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';
import Filters from '../../utils/filters';
import { veiculoProps } from '../../utils/interfaces';
import AuthInput from '../AuthInput';
import Button from '../Button';
import Select from '../Select';

import { styles } from './styles'
interface AddCarModalProps {
  title: string,
  visible: boolean,
  onClose: () => void,
  userId: string | undefined,
}

const AddCarModal: React.FC<AddCarModalProps> = ({
  title, visible, onClose, userId
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
    const vehicle = {
      manufacturer: manufacturer,
      model: model,
      color: color,
      year: year,
      fuel: fuel,
      transmission: transmission,
      situacaoIPVA: situacaoIPVA,
      plate: plate,
      maxRPMReached: 0,
    } as veiculoProps

    api.addVehicleToUser(userId, vehicle)

    clearStates()
    onClose()
  }

  function createYearsList() {
    const start = 1960
    return [...Array(currentYear - start + 1).keys()].map(x => (x + start).toString()).reverse()
  }

  var yearsList = createYearsList();
  yearsList.unshift('')

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
                  text={year}
                  title={'Ano do carro'}
                  setState={setYear}
                />

                <Select
                  options={Filters.fuelList}
                  text={fuel}
                  title={'Combustível do Motor'}
                  setState={setFuel}
                />

                <Select
                  options={Filters.transmissionsList}
                  text={transmission}
                  title={'Transmissão do carro'}
                  setState={setTransmission}
                />

                <Select
                  options={Filters.situationIPVAList}
                  text={situacaoIPVA}
                  title={'Situação IPVA'}
                  setState={setSituacaoIPVA}
                />

                <AuthInput
                  value={plate}
                  setUseState={setPlate}
                  placeholder="Placa do carro"
                />

                <AuthInput
                  value={model}
                  setUseState={setModel}
                  placeholder="Modelo do carro"
                />

                <AuthInput
                  value={manufacturer}
                  setUseState={setManufacturer}
                  placeholder="Fabricante do carro"
                />

                <AuthInput
                  value={color}
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

export default AddCarModal