import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-bg-dark">
      <div className="container d-flex align-items-center justify-content-center p-4">
        <nav className="nav d-flex">
          <NavLink to="home" className="nav-link text-white">
            Home
          </NavLink>
          <NavLink to="shop" className="nav-link text-white">
            Shop
          </NavLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
