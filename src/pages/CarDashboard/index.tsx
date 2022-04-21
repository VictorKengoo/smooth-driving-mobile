import React, { useEffect } from 'react'
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'
import CarImage from '../../../images/car.png'
import { styles } from './styles'
import { Props } from '../../interfaces'
import { LinearGradient } from 'expo-linear-gradient'
import DashboardInfo from '../../components/DashboardInfo'

const CarDashboard: React.FC<Props<'CarDashboard'>> = ({ route }) => {

  const { manufacturer, model, plate, transmission, year } = route.params;

  useEffect(() => {
    console.log("Props depois: ", manufacturer, model, transmission, plate, year)
  }, [])

  return (
    <KeyboardAvoidingView style={styles.main} enabled>
      <ScrollView
        // contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <View style={styles.header}>
            <Text style={styles.title}>
              {manufacturer} {model}
            </Text >

            <Text style={styles.subtitle}>
              {transmission}
            </Text>
          </View>

          <LinearGradient
            colors={['rgba(64, 64, 64, 0.3)', 'rgba(150, 150, 150, 1)']}
            start={{ x: 0.7, y: 0.5 }}
            style={styles.carImageBoard}
          >
            <Image style={styles.carImage} source={CarImage} />
          </LinearGradient>

          <View style={styles.infoSection}>
            <Text style={styles.infoTitle}>
              Informações do veículo
            </Text>
            <KeyboardAvoidingView enabled>
              <ScrollView
                horizontal={true}
                keyboardShouldPersistTaps="handled"
              >
                <View style={styles.infoCards}>
                  <View style={styles.firstRow}>
                    <DashboardInfo
                      infoName='Placa'
                      infoValue={plate}
                    />
                    <DashboardInfo
                      infoName='CNH Associada'
                      infoValue='Não possui'
                    />
                    <DashboardInfo
                      infoName='Ano'
                      infoValue={year}
                    />
                  </View>
                  <View style={styles.secondRow}>
                    <DashboardInfo
                      infoName='Nota de Segurança'
                      infoValue='9.3'
                    />
                    <DashboardInfo
                      infoName='CNH Associada'
                      infoValue='Não possui'
                    />
                    <DashboardInfo
                      infoName='Ano'
                      infoValue={year}
                    />
                  </View>
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CarDashboard