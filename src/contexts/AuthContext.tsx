import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLogged: boolean;
  toggleLoginLogin: () => void;
  toggleLoginLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLoginLogin = () => setIsLogged(true);
  const toggleLoginLogout = () => setIsLogged(false);

  return (
    <AuthContext.Provider
      value={{ isLogged, toggleLoginLogin, toggleLoginLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
