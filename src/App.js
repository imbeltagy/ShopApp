import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";
import { AuthProvider } from "./hooks/useAuth";
import Logout from "./Pages/Logout";
import CheckIfLogged from "./Components/CheckIfLogged";
import SingleProduct from "./Pages/SingleProcut";
// Import Pages
const Home = React.lazy(() => import("./Pages/Home")),
  Shop = React.lazy(() => import("./Pages/Shop")),
  Login = React.lazy(() => import("./Pages/Login"));

const pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: (
      <CheckIfLogged pageName="Shop">
        <Shop />
      </CheckIfLogged>
    ),
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
        <AuthProvider>
          <Navbar />
          <Routes>
            {pages.map((e) => (
              <Route
                key={e.path}
                path={e.path}
                element={<React.Suspense fallback={<LoadingScreen />}>{e.element}</React.Suspense>}
              />
            ))}
            <Route path="logout" element={<Logout />} />
            <Route path="shop/:productID" element={<SingleProduct />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
