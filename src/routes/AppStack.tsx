import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../global/styles'

const { Navigator, Screen } = createStackNavigator();

const Tab = createBottomTabNavigator()


export default function AppStack() {

  const mainTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <LinearGradient
      colors={['#000000', '#000000f2', '#0000004a']}
      style={{ flex: 1 }}
    >
      <NavigationContainer theme={mainTheme}>
        <Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
          <Screen name='Landing' component={Landing} />
          <Screen name='Login' component={Login} />
          <Screen name='SignUp' component={SignUp} />

          <Tab.Navigator
            screenOptions={({ route }) => ({
              "tabBarLabelStyle": styles.labelStyle,
              "tabBarStyle": [styles.tabBarStyle, null],
              headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home'
                    : 'home-outline';
                } else if (route.name === 'Tipos Atividades') {
                  iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
                } else if (route.name === 'Atividades') {
                  iconName = focused ? 'clipboard-text' : 'clipboard-text-outline';
                }

                // You can return any component that you like here!
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >

            <Tab.Screen name='Home' component={Landing} />
            {/* <Tab.Screen name='Tipos Atividades' component={} />
            <Tab.Screen name='Atividades' component={} /> */}

          </Tab.Navigator>

        </Navigator>
      </NavigationContainer>
    </LinearGradient>
  )
}