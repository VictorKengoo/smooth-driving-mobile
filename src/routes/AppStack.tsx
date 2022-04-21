import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import { useContext } from 'react';
import AuthContext from '../contexts/auth';
import { ActivityIndicator, View } from 'react-native';
import Login from '../pages/Login';
import Landing from '../pages/Landing';
import CarDashboard from '../pages/CarDashboard';
import { CarDashboardProps } from '../interfaces';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Landing: undefined;
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
  CarDashboard: CarDashboardProps;
};

const AppStack: React.FC = () => {
  const { loading } = useContext(AuthContext)

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#999' />
      </View>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <Stack.Screen name="CarDashboard" component={CarDashboard} />

    </Stack.Navigator>
  )
}

export default AppStack