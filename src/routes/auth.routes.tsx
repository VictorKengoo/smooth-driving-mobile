import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const AuthStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator screenOptions={{
    headerShown: false
  }}>
    {/* <AuthStack.Screen name="Login" component={Login} /> */}
    <AuthStack.Screen name="Home" component={Home} />
    {/* <AuthStack.Screen name="SignUp" component={SignUp} /> */}
    {/* <AuthStack.Screen name="Landing" component={Landing} /> */}
  </AuthStack.Navigator>
)

export default AuthRoutes