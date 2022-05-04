// import { BACKEND_USER_URL, BROKER_UPDATE_URL } from '@env';
import { SensorDataPostProps } from '../utils/interfaces';
import ENV from '../../env'
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.14:3333",
});

async function postSensorsData(data: SensorDataPostProps) {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'fiware-service': 'helixiot',
      'fiware-servicepath': '/',
    }

    await api.post(ENV.BROKER_UPDATE_URL, data, {
      headers: headers,
    }).then(response => {
      console.log("Response: ", response);
    })

  } catch (error) {
    console.error("Erro: ", error);
  }
}

export default {
  postSensorsData
}

