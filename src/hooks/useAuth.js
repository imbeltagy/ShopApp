import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const users = [
  { username: "beltagy", password: "552355" },
  { username: "ali55", password: "Ali_55" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user")),
    [isLogged, setIsLogged] = useState(JSON.parse(localStorage.getItem("islogged")) || false);

  const login = (username, password) => {
    if (users.some((e) => e.username === username && e.password === password)) {
      setUser(username);
      setIsLogged(true);
      localStorage.setItem("user", username);
      localStorage.setItem("islogged", true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsLogged(false);
    localStorage.setItem("user", null);
    localStorage.setItem("islogged", false);
  };

  return <AuthContext.Provider value={{ user, login, logout, isLogged }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { user, login, logout, isLogged } = useContext(AuthContext);
  return { user, login, logout, isLogged };
};
