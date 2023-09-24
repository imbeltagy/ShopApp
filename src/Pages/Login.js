import { useRef } from "react";
import { Navigate } from "react-router-dom";
import Main from "../Components/Main";
import { useAuth } from "../hooks/useAuth";
import useToggle from "../hooks/useToggle";
import DangerP from "../Components/DangerP";

const Login = () => {
  const [hasError, setHasError] = useToggle(false),
    { login, isLogged } = useAuth(),
    userInput = useRef(),
    passwordInput = useRef();

  if (isLogged) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <Main title="Login" className="">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setHasError(login(userInput.current.value, passwordInput.current.value));
        }}
      >
        <div className="input-group row mx-0 mb-3">
          <label className="input-group-text rounded-0 col-sm-3 col-md-2 col-xl-1">Username</label>
          <input className="form-control rounded-0" type="text" placeholder="ex. beltagy" ref={userInput} />
        </div>
        <div className="input-group row mx-0">
          <label className=" input-group-text rounded-0 col-sm-3 col-md-2 col-xl-1">Password</label>
          <input className="form-control rounded-0" type="password" placeholder="ex. 552355" ref={passwordInput} />
        </div>
        <input className="btn btn-success rounded-1 my-3" type="submit" value="Log In" />
        {hasError && <DangerP>Username or password is incorrect!</DangerP>}
      </form>
    </Main>
  );
};

export default Login;
