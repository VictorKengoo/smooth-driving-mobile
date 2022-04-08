import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../contexts/auth'

import AuthRoutes from './auth.routes';

import AppRoutes from './app.routes';

const AppStack: React.FC = () => {
  const { signed } = useContext(AuthContext)

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  )
}

export default AppStack