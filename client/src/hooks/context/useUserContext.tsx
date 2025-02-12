import { createContext, ReactNode, useContext, useState } from 'react';

interface UserProviderParams {
  children: ReactNode;
}

interface UserContextType {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  user: '',
  login: () => {},
  logout: () => {},
});

export function UserProvider({ children }: UserProviderParams) {
  const [user, setUser] = useState<string>('');

  function login(username: string) {
    setUser(username);
  }

  function logout() {
    setUser('');
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext(): UserContextType {
  const context = useContext(UserContext);
  return context;
}
