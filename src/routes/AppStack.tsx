import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthContext from '../contexts/auth';

import { CarDashboardProps } from '../utils/interfaces';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Home from '../pages/Home';
import CarDashboard from '../pages/CarDashboard';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Landing: undefined;
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
  CarDashboard: CarDashboardProps;
  AccelerometerData: undefined
  GyroscopeData: undefined
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

      {/* <Stack.Screen name="AccelerometerData" component={AccelerometerData} /> */}
      {/* <Stack.Screen name="GyroscopeData" component={GyroscopeData} /> */}

    </Stack.Navigator>
  )
}

export default AppStack