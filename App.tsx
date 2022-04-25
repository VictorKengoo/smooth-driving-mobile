import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppStack from './src/routes/AppStack';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style='light' backgroundColor='#000' />
        <AppStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
