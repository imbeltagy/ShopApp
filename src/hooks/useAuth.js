import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const users = [
  { username: "beltagy", password: "552355" },
  { username: "ali55", password: "Ali_55" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("beltagy"),
    [isLogged, setIsLogged] = useState(true);

  const login = (username, password) => {
    if (users.some((e) => e.username === username && e.password === password)) {
      setUser(username);
      setIsLogged(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLogged(false);
  };

  return <AuthContext.Provider value={{ user, login, logout, isLogged }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { user, login, logout, isLogged } = useContext(AuthContext);
  return { user, login, logout, isLogged };
};
