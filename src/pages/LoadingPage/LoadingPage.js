import React from "react";
import "../../styles/LoadingPage.css";

const LoadingPage = () => {
    return (
        <div className="container-div">
            <img src="../assets/logo-white.png" alt="loading" className="loading-img"/>
            <h1 className="title">Bem-vindo</h1>
        </div>
    );
}

export default LoadingPage;