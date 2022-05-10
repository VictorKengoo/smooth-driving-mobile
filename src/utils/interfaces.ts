import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { string } from "yup";
import { RootStackParamList } from "../routes/AppStack";

export interface veiculoProps {
  id: string,
  manufacturer: String,
  model: String,
  transmission: String,
  year: String,
  plate: String,
  fuel: String,
  IPVA: String,
  color: String,
  maxRPMReached?: number,
  maxSpeedReached?: number,
}
export interface eventInfo {
  dateTime: string,
  duration: String
}
export interface userProps {
  id: string,
  name: String,
  email: String,
  password: String,
  vehicles: veiculoProps[]
}
export interface eventsCountProps {
  curvaEsquerda: number,
  curvaDireita: number,
  trocaFaixaEsquerda: number,
  trocaFaixaDireita: number,
  aceleracaoBrusca: number,
  frenagemBrusca: number,
}
export interface viagemProps {
  carId: string,
  eventInfo: eventInfo
  eventsCount: eventsCountProps
}

type ScreenNavigationProp<
  T extends keyof RootStackParamList
  > = StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

export interface veiculoPropsNavigate {
  veiculoProps: veiculoProps,
  navigation: ScreenNavigationProp<"Home">
}

export interface CarDashboardProps {
  id: string,
  manufacturer: String,
  model: String,
  transmission: String,
  plate: String,
  year: String,
  maxRPMReached: number,
  color: String,
  fuel: String,
  IPVA: String,
}

export interface SensorDataProps {
  x: string,
  y: string,
  z: string,
}

export interface SensorDataPostProps {
  "EixoXAcelerometro": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "EixoXGiroscopio": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "EixoYAcelerometro": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "EixoYGiroscopio": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "EixoZAcelerometro": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "EixoZGiroscopio": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "IdViagem": {
    "type": string,
    "value": string,
    "metadata": {}
  }
}