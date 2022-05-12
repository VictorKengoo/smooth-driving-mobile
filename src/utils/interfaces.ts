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
  ipva: String,
  color: String,
  maxRPMReached?: number,
  maxSpeedReached?: number,
}
export interface userProps {
  id: string,
  name: String,
  CNH: string,
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
  dateTimeStart: string,
  dateTimeEnd: string,
  duration: String,
  eventsCount: eventsCountProps
}

type ScreenNavigationProp<
  T extends keyof RootStackParamList
  > = StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>

export type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
}
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
  maxRPMReached?: number,
  color: String,
  fuel: String,
  ipva: String,
}
export interface SensorDataProps {
  x: string,
  y: string,
  z: string,
}
interface iotDataProps {
  "type": string,
  "value": string,
  "metadata": {}
}
export interface SensorDataPostProps {
  type: string,
  IdViagem: iotDataProps,
  EixoXAcelerometro: iotDataProps,
  EixoXGiroscopio: iotDataProps,
  EixoYAcelerometro: iotDataProps,
  EixoYGiroscopio: iotDataProps,
  EixoZAcelerometro: iotDataProps,
  EixoZGiroscopio: iotDataProps,
  Velocidade: iotDataProps
  RPMveiculo: iotDataProps
}