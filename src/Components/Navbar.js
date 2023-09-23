import { NavLink, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/js/bootstrap.min";

const Navbar = () => {
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
            <li className="nav-item">
              <NavLink to="." className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="shop" className="nav-link text-white">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="cart" className="nav-link text-white">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="login" className="nav-link text-white">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
