import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { isLogged } = useAuth();
  const links = [
    {
      path: ".",
      text: "Home",
    },
    {
      path: "/shop",
      text: "Shop",
    },
    {
      path: isLogged ? "/logout" : "/login",
      text: isLogged ? "Logout" : "Login",
    },
  ];

  return (
    <header className="text-bg-dark navbar navbar-expand-sm">
      <div className="container d-flex align-items-center justify-content-between p-4">
        <Link to="." className="navbar-brand">
          <h2 className="brand text-uppercase fw-bold text-white">Shopapp</h2>
        </Link>
        <button
          className="btn btn-outline-light border-2 py-1 px-3 d-sm-none"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
          aria-expanded="false"
        >
          menu
        </button>
        <nav className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {links.map((e) => (
              <li key={e.path} className="nav-item">
                <Link to={e.path} className="nav-link text-white">
                  {e.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
