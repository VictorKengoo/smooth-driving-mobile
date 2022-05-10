import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userProps } from '../utils/interfaces';
import api from '../services/api';
interface AuthState {
  // token: string;
  user: object;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: userProps;
  loading: boolean;
  signIn(user: SignInCredentials, handleNavigateToHome: () => void): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>({} as AuthState); // add
  const [user, setUser] = useState<userProps>({} as userProps); // add

  // para verificar enquanto o app carrega
  const [loading, setLoading] = useState(true); // evita os flashs de carregamento passando por uma tela a outra

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      // AsyncStorage.clear()
      const [user] = await AsyncStorage.multiGet([
        // '@SmoothDriving:token',
        '@SmoothDriving:user',
      ]);

      await new Promise(resolve => setTimeout(resolve, 1000))

      if (user[1]) {
        setData({ user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  function signIn(user: SignInCredentials, handleNavigateToHome: () => void) {
    const response = api.loginUser(user.email, user.password);

    response.then(async (res) => {
      setUser(res)
      AsyncStorage.setItem('@SmoothDriving:user', JSON.stringify(response))
      if (res.name) {
        handleNavigateToHome()
      }
    })
  }

  // // Desloga
  const signOut = useCallback(async () => {
    // await AsyncStorage.multiRemove(['@SmoothDriving:token', '@SmoothDriving:user']);
    await AsyncStorage.removeItem('@SmoothDriving:user');
    setUser({} as userProps);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
export default AuthContext
export { AuthProvider, useAuth };