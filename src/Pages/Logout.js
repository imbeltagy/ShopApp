import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Logout = () => {
  const { logout } = useAuth();
  logout();
  return <Navigate to="/login" replace={true} />;
};

export default Logout;
