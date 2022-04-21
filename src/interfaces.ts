import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./routes/AppStack";

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

export interface veiculoProps {
  manufacturer: String,
  model: String,
  transmission: String,
  year: String,
  plate: String,
}

export interface veiculoPropsNavigate {
  veiculoProps: veiculoProps,
  navigation: ScreenNavigationProp<"Home">
}

export interface CarDashboardProps {
  manufacturer: String,
  model: String,
  transmission: String,
  plate: String,
  year: String
}