import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Requests from "./pages/Requests";
import Cadastro from "./pages/Cadastro";
import Listings from "./pages/Listings";
import AuthProvider from "./services/auth";

const App = () => {
    return (
        
            <Router>
                <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/requests" element={<Requests />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/listings" element={<Listings />} />
                </Routes>
                </AuthProvider>
            </Router>
    );
};

export default App;