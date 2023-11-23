import React, {useState} from "react";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { InputNumber } from 'primereact/inputnumber';
        
import "../../styles/Request.css";

const FinishRequest = () => {
    const [quantity, setQuantity] = useState();
    return (
        <div>
            <div className="header container flex mt-8 justify-between items-center">
                <h1 className="title font-bold text-3xl align-middle"> &lt; Remessa </h1>
                <div className="profile-div w-14 h-14 rounded-full bg-white">
                </div>
            </div>

            <div className="container absolute bg-white h-full mt-6 rounded-l-2xl rounded-r-2xl">
                <div className="supplier-info flex justify-between">
                    <h1 className="request-title green-text font-medium text-left text-2xl mt-4 mb-4">Empacota e Vai</h1>
                    <Rating value={4} readOnly stars={5} cancel={false} />
                </div>

                <img src="../assets/caixas.svg" alt="caixas" className="request-img w-full"/>
                
                <div className="set-quantity flex mt-4 items-center">
                    <h1 className="mr-5 font-bold">Quantidade: </h1>
                    <InputNumber className="border-amber-600 h-11 qtd-input" inputId="withoutgrouping" value={quantity} onValueChange={(e) => setQuantity(e.value)} useGrouping={false} />
                </div>

                <div className="request-info mt-4">
                    <h3 className="yellow-text font-bold">Remessa encerrando em 3 dias</h3>
                    <h3 className="yellow-text font-bold mb-3">Previsão de entrega 12/12/2023</h3>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Valor únitário:</h3>
                        <h3 className="green-text font-bold">R$ 2,55</h3>
                    </span>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Quantidade já solicitada:</h3>
                        <h3 className="green-text font-bold">1700</h3>
                    </span>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Pedidos na remessa:</h3>
                        <h3 className="green-text font-bold">5</h3>
                    </span> 
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-normal">Frete total:</h3>
                        <h3 className="green-text font-bold">R$ 255,00</h3>
                    </span>
                    <span className="flex justify-between">
                        <h3 className="green-text font-bold">Frete por pedido:</h3>
                        <h3 className="green-text font-bold">R$ 51,00</h3>
                    </span>
                </div>

                <Button label="Finalizar Pedido" className="finish flex self-center w-full h-11 align-middle mt-4" />
            </div>
        </div>
    );
}

export default FinishRequest;