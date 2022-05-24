// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import React from 'react';
// import { Modal, View, Text, ScrollView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TripResultProps } from '../../utils/interfaces';

// import { styles } from './styles'
// import SpeedometerComponent from '../SpeedometerComponent';
// import InfoCard2 from '../InfoCard2';
// import messages from '../../utils/messages';
// interface ViagemStatisticsModalProps {
//   title: string,
//   visible: boolean,
//   tripResult: TripResultProps,
//   onClose: () => void,
//   onSelect: (value: string) => void,
// }

// const ViagemStatisticsModal: React.FC<ViagemStatisticsModalProps> = ({
//   title, visible, onClose, onSelect, tripResult
// }) => {

//   const velocidadeMaxima = tripResult.velocidadeMax
//   const velocidadeMedia = tripResult.velocidadeMedia
//   const rpmMedio = tripResult.rpMmedio
//   const curvasAgressivas = tripResult.curvasAgressivas
//   const trocasAgressivas = tripResult.trocasAgressivas

//   function delegateMessage() {
//     let message = ''
//     if (velocidadeMaxima > 120) {
//       message += messages.warningSpeedMessage
//     }

//     if (curvasAgressivas + trocasAgressivas > 0) {
//       message += messages.warningEventsMessage
//     }

//     message += messages.defaultMessage

//     if (velocidadeMaxima <= 110 && curvasAgressivas + trocasAgressivas == 0) {
//       message = messages.congratulationsMessage
//     }
//     return message
//   }

//   return (
//     <>
//       <Modal
//         animated
//         transparent
//         visible={visible}
//         animationType="fade"
//       >
//         <View style={styles.main}>
//           <View style={styles.header}>
//             <View style={styles.titleSection}>
//               <Text style={styles.title}>{title}</Text>
//             </View>
//             <TouchableOpacity onPress={onClose}>
//               <MaterialCommunityIcons name="close-circle" size={36} color='#b33939' />
//             </TouchableOpacity>
//           </View>

//           <ScrollView
//             style={styles.scroll}
//             nestedScrollEnabled={true}
//             showsVerticalScrollIndicator={false}
//           >
//             <View style={styles.body}>
//               <Text style={styles.sectionTitle}>
//                 Resultados
//               </Text>
//               <View style={styles.infoCards}>
//                 <View style={styles.firstRow}>
//                   <InfoCard2
//                     infoName='Curvas Agresivas'
//                     infoValue={curvasAgressivas.toString()}
//                   />
//                   <InfoCard2
//                     infoName='Velocidade média'
//                     infoValue={velocidadeMedia.toString()}
//                     unidade=' Km/h'
//                   />
//                 </View>
//                 <View style={styles.secondRow}>
//                   <InfoCard2
//                     infoName='Trocas de faixa agressivas'
//                     infoValue={trocasAgressivas.toString()}
//                   />
//                   <InfoCard2
//                     infoName='R.P.M. Médio'
//                     infoValue={rpmMedio.toString()}
//                   />
//                 </View>

//               </View>
//               <SpeedometerComponent
//                 value={velocidadeMaxima}
//                 title='Velocidade máxima'
//                 step={20}
//                 max={280}
//                 text={`${velocidadeMaxima} KM/H`}
//               />

//               <View style={styles.messageSection}>
//                 <Text style={styles.message}>
//                   {delegateMessage()}
//                 </Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>
//       </Modal>
//     </>
//   )
// }

// export default ViagemStatisticsModal