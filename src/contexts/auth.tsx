import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import api from '../services/api';
import * as auth from '../services/auth';
interface AuthState {
  token: string;
  user: object;
}
interface SignInCredentials {
  email?: string | null;
  name: string
  password: string;
}
interface AuthContextData {
  user: SignInCredentials | null;
  loading: boolean;
  signIn(user: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>({} as AuthState); // add
  const [user, setUser] = useState<SignInCredentials | null>(null); // add

  // para verificar enquanto o app carrega
  const [loading, setLoading] = useState(true); // evita os flashs de carregamento passando por uma tela a outra

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@SmoothDriving:token',
        '@SmoothDriving:user',
      ]);

      await new Promise(resolve => setTimeout(resolve, 1000))

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(user: SignInCredentials) {
    const response = await auth.signIn(user.name, user.password, user.email)

    setUser(response.user)

    await AsyncStorage.setItem('@SmoothDriving:token', response.token)
    await AsyncStorage.setItem('@SmoothDriving:user', JSON.stringify(response.user))
  }

  // // Desloga
  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@SmoothDriving:token', '@SmoothDriving:user']);

    setUser(null)
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