import React, { createContext, useState, useEffect, useContext } from "react";
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage'

interface User {
  name: string
  email: string
}
interface AuthContextData {
  signed: boolean
  user: User | null
  loading: boolean
  signIn(): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    function loadStoragedData() {
      AsyncStorage.multiGet(['@SmoothDriving:user', '@SmoothDriving:token'], (err, items) => {

        const storageUser = items?.[0]?.[1];
        const storageToken = items?.[1]?.[1];

        if (storageUser && storageToken) {
          setUser(JSON.parse(storageUser))
          setLoading(false)
          // auth.setToken(storageToken)
        }
      })
      // const storageToken = await AsyncStorage.getItem('@SmoothDriving:token')
    }

    loadStoragedData()
  }, [])

  async function signIn() {
    const response = await auth.signIn()
    setUser(response.user)

    await AsyncStorage.setItem('@SmoothDriving:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@SmoothDriving:token', response.token)
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }} >
      {children}
    </AuthContext.Provider >
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}