import React from "react";
import "../../styles/Home.css";
import "../../styles/Category.css";
import "../../styles/Request.css";
import { useNavigate } from "react-router-dom";


const MyRequests = () => {
    const navigation = useNavigate();

    const handleBack = () => {
        navigation(-1);
    }

    return (
        <div>
            <div className="header container flex mt-8 justify-between items-center">
                <h1 className="title font-bold text-3xl align-middle"> <span onClick={handleBack}>&lt;</span> Meus pedidos </h1>
                <div className="profile-div w-14 h-14 rounded-full bg-white">
                </div>
            </div>
            <div className="container absolute bg-white h-full mt-6 rounded-l-2xl rounded-r-2xl">
            <div className="supplier-card w-full flex justify-between p-4 rounded-lg mt-5">
                <div className="flex flex-col items-start">
                    <h1 className="supplier-title font-semibold mb-1 text-white">Pedido 1 - Caixa de Papel</h1>
                    <p className="supplier-description mb-2 text-white">Total: R$ 400,00</p>
                </div>
        </div>

                </div>
            </div>
    );
}

export default MyRequests;