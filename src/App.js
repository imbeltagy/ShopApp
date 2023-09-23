import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// Import Pages
const Home = React.lazy(() => import("./Pages/Home")),
  Shop = React.lazy(() => import("./Pages/Shop")),
  Cart = React.lazy(() => import("./Pages/Cart")),
  Login = React.lazy(() => import("./Pages/Login"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            index
            element={
              <React.Suspense fallback={"Loading..."}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="shop"
            element={
              <React.Suspense fallback={"Loading..."}>
                <Shop />
              </React.Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <React.Suspense fallback={"Loading..."}>
                <Cart />
              </React.Suspense>
            }
          />
          <Route
            path="login"
            element={
              <React.Suspense fallback={"Loading..."}>
                <Login />
              </React.Suspense>
            }
          />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
