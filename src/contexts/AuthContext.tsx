
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  type: 'admin' | 'client';
  companyName?: string;
  purchasedProducts?: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dados mockados de usuários
const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@admin.com',
    name: 'Administrador',
    type: 'admin'
  },
  {
    id: '2',
    email: 'empresa@empresa.com',
    name: 'João Silva',
    type: 'client',
    companyName: 'Empresa X Ltda',
    purchasedProducts: ['Sistema Barbearia', 'Sistema Clínica']
  },
  {
    id: '3',
    email: 'cliente2@teste.com',
    name: 'Maria Santos',
    type: 'client',
    companyName: 'Beauty Center',
    purchasedProducts: ['Sistema Barbearia']
  }
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Verificar se há usuário logado no localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simular autenticação
    const foundUser = mockUsers.find(u => u.email === email);
    
    if (foundUser && password === '123') {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      isAdmin: user?.type === 'admin'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
