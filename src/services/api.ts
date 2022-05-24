import { relatorioProps, userProps, veiculoProps } from '../utils/interfaces';
import ENV from '../../env'
import axios from "axios";
import AlertDelegator from '../utils/alertDelegator';
import { Dispatch, SetStateAction } from 'react';
// const brokerApi = axios.create({
//   baseURL: ENV.BROKER_UPDATE_URL,
// });

const backendApi = axios.create({
  baseURL: ENV.BACKEND_URL
});

const MLApi = axios.create({
  baseURL: ENV.ML_URL
});

async function signUpUser(user: userProps) {
  try {

    const response = await backendApi.post('User/Create', user)
    AlertDelegator.showAlert(response.status, "Usuário cadastrado com sucesso!");

  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
  }
}

async function loginUser(email: string, password: string) {
  try {
    const response = await backendApi.post('User/Login', { email, password });

    return response.data as userProps

  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
    return {} as userProps;
  }
}

async function addVehicleToUser(userId: string | undefined, vehicle: veiculoProps) {
  try {
    const response = await backendApi.put(`User/AddVehicle/${userId}`, vehicle);
    return response;
  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
    throw error;
  }
}

async function editVehicle(vehicleId: string | undefined, vehicle: veiculoProps) {
  try {
    const response = await backendApi.put(`Vehicle/${vehicleId}`, vehicle);
    return response.data;
  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
    throw error;
  }
}

async function editUser(userId: string | undefined, user: userProps) {
  try {
    const response = await backendApi.put(`User/${userId}`, user);
    return response.data;
  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
    throw error;
  }
}

function getUserVehicles(userId: string) {
  try {
    const response = backendApi.get(`User/Vehicles/${userId}`);
    return response
  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
    throw error;
  }
}

function getTripsByUserAndVehicle(vehicleId: string, userId: string) {
  try {
    const response = backendApi.get(`Trip/${vehicleId}/${userId}`);
    return response
  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
    throw error;
  }
}

function getRelatorioByTripId(tripId: String) {
  try {
    console.log("tripId: ", tripId)
    const response = backendApi.get(`Relatorio/BrokerTrip/${tripId}`);
    return response
  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
    throw error;
  }
}

function getBrokerTrips(entityId: String) {
  try {
    console.log("EntityId: ", entityId)
    const response = backendApi.get(`BrokerTrip/${entityId}`);
    return response
  } catch (error: any) {
    AlertDelegator.showAlert(error.response.status, error.response.data)
    throw error;
  }
}

async function requestRelatorio(tripId: String, entityId: String) {
  try {
    console.log("EntityId: ", 'sth_/_' + entityId)
    console.log("tripId: ", tripId)
    const response = backendApi.post('ML/Relatorio', {
      trip_id: tripId,
      entity_id: entityId
    });
    return response

  } catch (error: any) {
    console.log("error: ", error)
    AlertDelegator.showAlert(error.response.status, error.response.data)
    throw error;
  }
}

// async function postSensorsData(data: SensorDataPostProps) {
//   try {
//     const headers = {
//       'Content-Type': 'application/json',
//       'fiware-service': 'helixiot',
//       'fiware-servicepath': '/',
//     }

//     await brokerApi.post(ENV.BROKER_UPDATE_URL, data, {
//       headers: headers,
//     }).then(response => {
//       console.log("Response: ", response);
//     })

//   } catch (error) {
//     console.error("Erro: ", error);
//   }
// }

export default {
  // postSensorsData,
  addVehicleToUser,
  signUpUser,
  loginUser,
  editVehicle,
  getUserVehicles,
  editUser,
  getTripsByUserAndVehicle,
  getRelatorioByTripId,
  getBrokerTrips,
  requestRelatorio
}

