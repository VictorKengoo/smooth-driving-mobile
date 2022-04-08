import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator()

const AppStack: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  )
}

export default AppStack