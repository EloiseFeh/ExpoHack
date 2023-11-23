import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Requests from "./pages/Requests/Requests";
import Cadastro from "./pages/Cadastro";
import AuthProvider from "./services/auth";
import CategoryPage from "./pages/Category/category";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    setTimeout(() => {
      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
      }

      setIsLoading(false);
    }, 2000);
  }, []);


    return (
        <Router>
            {
              isLoading ?
              (
                <LoadingPage />
              ) : (
                
                <AuthProvider>
                  <Routes>
                    <Route path="/" element={<Login />} />
                      <Route path="/home" element={<Home />} />
                      <Route path="/categories/:id" element={<CategoryPage />} />
                      <Route path="/requests" element={<Requests />} />
                      <Route path="/cadastro" element={<Cadastro />} />
                  </Routes>
                </AuthProvider>
              )
            }
        </Router>
    );
};

export default App;