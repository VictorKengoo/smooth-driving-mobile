import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import { useContext } from 'react';
import AuthContext from '../contexts/auth';
import { ActivityIndicator, View } from 'react-native';
import Login from '../pages/Login';
import Landing from '../pages/Landing';

const Auth = createStackNavigator()

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
    <Auth.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Auth.Screen name="Landing" component={Landing} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="Home" component={Home} options={{ gestureEnabled: false }} />
      <Auth.Screen name="Login" component={Login} />
    </Auth.Navigator>
  )
}

export default AppStack