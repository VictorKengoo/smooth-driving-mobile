import React from 'react';
import { Text, View } from 'react-native';
import { Arc, Background, DangerPath, Marks, Needle, Progress } from 'react-native-cool-speedometer';
import Speedometer from 'react-native-cool-speedometer/dist/Speedometer';

import { styles } from './styles'

interface SpeedometerProps {
  value: number
  title: string
  text: string
  max: number
  step: number
  multiplier?: string
}

const SpeedometerComponent: React.FC<SpeedometerProps> = ({ value, title, text, max, step, multiplier }) => {
  return (
    <View style={styles.speedometerSection}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>
      <Speedometer
        value={value}
        max={max}
        angle={180}
        accentColor='#212121'
      >
        <Background angle={180} />
        <Arc />
        <Needle />
        <Progress />
        <Marks step={step} />
        <DangerPath angle={70} />
      </Speedometer>
      <Text style={styles.speedometerText}>
        {text}
      </Text>
      <Text style={styles.speedometerMultiplierText}>
        {multiplier}
      </Text>
    </View>
  )
}

export default SpeedometerComponent