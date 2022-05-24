// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import React, { Dispatch, SetStateAction, useState } from 'react';
// import { Modal, View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import api from '../../services/api';
// import Filters from '../../utils/filters';
// import { veiculoProps } from '../../utils/interfaces';
// import AuthInput from '../AuthInput';
// import Button from '../Button';
// import Select from '../Select';

// import { styles } from './styles'
// interface AddCarModalProps {
//   title: string,
//   visible: boolean,
//   onClose: () => void,
//   userId: string | undefined,
//   refreshScreen: () => void
// }

// const AddCarModal: React.FC<AddCarModalProps> = ({
//   title, visible, onClose, userId, refreshScreen
// }) => {

//   const currentYear = new Date().getFullYear()

//   const statesPlaceholder = [
//     '2022',
//     'Combustível',
//     'Transmissão',
//     'IPVA',
//     'Cor do carro'
//   ]

//   const [year, setYear] = useState(statesPlaceholder[0]);
//   const [fuel, setFuel] = useState('');
//   const [plate, setPlate] = useState('');
//   const [model, setModel] = useState('');
//   const [color, setColor] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [transmission, setTransmission] = useState('');
//   const [ipva, setIpva] = useState('');

//   function clearStates() {
//     setYear('');
//     setFuel('');
//     setPlate('');
//     setModel('');
//     setColor('');
//     setManufacturer('');
//     setTransmission('');
//     setIpva('');
//   }

//   async function handleInsertCar() {
//     const vehicle = {
//       id: '',
//       entityId: entityId,
//       manufacturer: manufacturer,
//       model: model,
//       color: color,
//       year: year,
//       fuel: fuel,
//       transmission: transmission,
//       ipva: ipva,
//       plate: plate,
//     } as veiculoProps

//     // console.log("-------- Veiculo a adicionar: ", vehicle)

//     api.addVehicleToUser(userId, vehicle).then((response) => {
//       // console.log("-------- Veiculo adicionado: ", JSON.stringify(response))
//       if (response) {
//         clearStates()
//         refreshScreen()
//         onClose()
//       }
//     })
//   }

//   function createYearsList() {
//     const start = 1960
//     return [...Array(currentYear - start + 1).keys()].map(x => (x + start).toString()).reverse()
//   }

//   var yearsList = createYearsList();
//   yearsList.unshift('')

//   return (
//     <Modal
//       animated
//       transparent
//       visible={visible}
//       animationType="fade"
//     >
//       <View style={styles.main}>
//         <KeyboardAvoidingView
//           enabled
//           style={{ flex: 1 }}
//         >
//           <ScrollView
//             contentContainerStyle={{ flex: 1 }}
//             keyboardShouldPersistTaps="handled"
//           >
//             <View style={styles.header}>
//               <View style={styles.titleSection}>
//                 <Text style={styles.title}>{title}</Text>
//               </View>
//               <TouchableOpacity onPress={onClose}>
//                 <MaterialCommunityIcons name="close-circle" size={36} color='#b33939' />
//               </TouchableOpacity>
//             </View>

//             <View style={styles.body}>
//               <View
//                 style={styles.inputFields}
//               >
//                 <AuthInput
//                   value={plate}
//                   setUseState={setPlate}
//                   placeholder="Placa do carro"
//                 />

//                 <AuthInput
//                   value={model}
//                   setUseState={setModel}
//                   placeholder="Modelo do carro"
//                 />

//                 <AuthInput
//                   value={manufacturer}
//                   setUseState={setManufacturer}
//                   placeholder="Fabricante do carro"
//                 />

//                 <Select
//                   options={yearsList}
//                   text={statesPlaceholder[0]}
//                   title={'Ano do carro'}
//                   setState={setYear}
//                 />

//                 <Select
//                   options={Filters.fuelList}
//                   text={statesPlaceholder[1]}
//                   title={'Combustível do Motor'}
//                   setState={setFuel}
//                 />

//                 <Select
//                   options={Filters.transmissionsList}
//                   text={statesPlaceholder[2]}
//                   title={'Transmissão do carro'}
//                   setState={setTransmission}
//                 />

//                 <Select
//                   options={Filters.situationIPVAList}
//                   text={statesPlaceholder[3]}
//                   title={'Situação ipva'}
//                   setState={setIpva}
//                 />

//                 <Select
//                   options={Filters.coresList}
//                   text={statesPlaceholder[4]}
//                   title={'Cor do carro'}
//                   setState={setColor}
//                 />

//                 <Button
//                   action={handleInsertCar}
//                   text={'Confirmar'}
//                 />
//               </View>
//             </View>
//           </ScrollView>
//         </KeyboardAvoidingView>
//       </View>
//     </Modal>
//   )
// }

// export default AddCarModal