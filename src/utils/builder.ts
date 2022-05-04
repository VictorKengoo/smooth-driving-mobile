import { SensorDataPostProps, SensorDataProps } from "./interfaces"

let data = {
  "EixoXAcelerometro": {
    "type": 'float',
    "value": '',
    "metadata": {}
  },
  "EixoXGiroscopio": {
    "type": 'float',
    "value": '',
    "metadata": {}
  },
  "EixoYAcelerometro": {
    "type": 'float',
    "value": '',
    "metadata": {}
  },
  "EixoYGiroscopio": {
    "type": 'float',
    "value": '',
    "metadata": {}
  },
  "EixoZAcelerometro": {
    "type": 'float',
    "value": '',
    "metadata": {}
  },
  "EixoZGiroscopio": {
    "type": 'float',
    "value": '',
    "metadata": {}
  },
  "IdViagem": {
    "type": 'float',
    "value": '',
    "metadata": {}
  }
} as SensorDataPostProps

function composeData(
  sensorType: string,
  sensorData: SensorDataProps,
  viagemId: string
): SensorDataPostProps {
  {
    console.log("composeData ------")

    if (sensorData) {
      if (sensorType === 'Accelerometer') {
        data['EixoXAcelerometro']['value'] = sensorData.x
        data['EixoYAcelerometro']['value'] = sensorData.y
        data['EixoZAcelerometro']['value'] = sensorData.z
      }

      if (sensorType === 'Gyroscope') {
        data['EixoXGiroscopio']['value'] = sensorData.x
        data['EixoYGiroscopio']['value'] = sensorData.y
        data['EixoZGiroscopio']['value'] = sensorData.z
      }
      data.IdViagem['value'] = viagemId
    }

    return data
  }
}

export default {
  composeData,
}