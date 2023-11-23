import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import Listings from "./pages/Listings";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/requests" element={<Requests/>} />
                <Route path="/listings" element={<Listings/>} />
            </Routes>
        </Router>
    );
};

export default App;