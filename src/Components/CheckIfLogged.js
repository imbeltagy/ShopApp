import { useAuth } from "../hooks/useAuth";
import DangerP from "./DangerP";

const CheckIfLogged = ({ children, pageName }) => {
  const { isLogged } = useAuth();
  if (!isLogged) {
    return (
      <main>
        <div className="container my-3">
          <DangerP>You Need To Login To Access {pageName} Page.</DangerP>
        </div>
      </main>
    );
  }

  return <>{children}</>;
};

export default CheckIfLogged;
