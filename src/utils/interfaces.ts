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
  entityId: String
}
export interface userProps {
  id: string,
  name: String,
  email: String,
  password: String,
  vehicles: veiculoProps[]
}
export interface TripResultProps {
  CurvasAgressivas: number,
  TrocasAgressivas: number,
  RPMmedio: number,
  VelocidadeMax: number,
  VelocidadeMedia: number,
}
export interface viagemProps {
  tripId: string,
  dateTimeStart: string,
  dateTimeEnd: string,
}

export interface relatorioProps {
  id?: string
  EntityId: String,
  TripId: string,
  DateTimeStart: string,
  DateTimeEnd: string,
  Duration: number,
  TripResult: TripResultProps
}

export type ScreenNavigationProp<
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
  entityId: String,
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

export interface ViagemStatisticsProps {
  relatorio: relatorioProps,
  title: string
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