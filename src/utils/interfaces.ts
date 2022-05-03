import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { number } from "yup";
import { RootStackParamList } from "../routes/AppStack";

export interface veiculoProps {
  id?: number,
  manufacturer: String,
  model: String,
  transmission: String,
  year: String,
  plate: String,
  fuel: String,
  situacaoIPVA: String,
  color: String,
  maxRPMReached: number
}
export interface eventInfo {
  dateTime: string,
  duration: String
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
  carId: number,
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
  manufacturer: String,
  model: String,
  transmission: String,
  plate: String,
  year: String,
  maxRPMReached: number,
  color: String,
  fuel: String,
  situacaoIPVA: String,
}

export interface SensorDataProps {
  x: number,
  y: number,
  z: number,
}

export interface SensorDataPostProps {
  "id": string,
  "type": string,
  "AceleracaoVeiculo": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "DistanciaCodLimpo": {
    "type": string,
    "value": string,
    "metadata": {}
  },
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
  },
  "NivelCombustivel": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "PorcentagemEtanol": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "RPMveiculo": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "TipoCombustivel": {
    "type": string,
    "value": string,
    "metadata": {}
  },
  "VelocidadeVeiculo": {
    "type": string,
    "value": string,
    "metadata": {}
  }
}