import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AppStack from './src/routes/AppStack';
import AuthContext from './src/contexts/auth';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <AppStack />
        <StatusBar style='light' />
      </AuthProvider>
    </NavigationContainer>
  );
}
