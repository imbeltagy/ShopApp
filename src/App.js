import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";
// Import Pages
const Home = React.lazy(() => import("./Pages/Home")),
  Shop = React.lazy(() => import("./Pages/Shop")),
  Cart = React.lazy(() => import("./Pages/Cart")),
  Login = React.lazy(() => import("./Pages/Login"));

const pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {pages.map((e) => (
            <Route
              key={e.path}
              path={e.path}
              element={<React.Suspense fallback={<LoadingScreen />}>{e.element}</React.Suspense>}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
