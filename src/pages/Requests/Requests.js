import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";
import { db } from '../../services/firebaseConnections';
import { doc, getDoc } from 'firebase/firestore';
import "../../styles/Request.css";

const Requests = () => {
    const { id } = useParams();
    const [produto, setProdutos] = useState([]);

    useEffect(() => {
        async function loadProdutoId(id) {
            try {
                const produtosDoc = await getDoc(doc(db, 'produtos', id));
                if (produtosDoc.exists()) {
                    const produtosData = produtosDoc.data();
                    const lista = {
                        id: doc.id, 
                        titulo: produtosData.titulo, 
                        descricao: produtosData.descricao,
                        frete: produtosData.frete, 
                        medidas: produtosData.medidas,
                        remessa: produtosData.pedido_remessa,
                        quantidade: produtosData.quantidade_solicitada,
                        valor: produtosData.valor_unitario,
                        users: produtosData.users
                    };
                    console.log(lista)
                    setProdutos(lista);
                } else {
                    console.log("Planta Não encontrada");
                }
            } catch (error) {
                console.error(error);
            }
        }
        console.log(produto)
        loadProdutoId(id);
    },[id]);
    return (
        <div>
            <div className="header container flex mt-8 justify-between items-center">
                <h1 className="title font-bold text-3xl align-middle"> &lt; Remessa </h1>
                <div className="profile-div w-14 h-14 rounded-full bg-white">
                </div>
            </div>

            <div className="container absolute bg-white h-full mt-6 rounded-l-2xl rounded-r-2xl">
                <div className="supplier-info flex justify-between">
                    <h1 className="request-title green-text font-medium text-left text-2xl mt-4 mb-4">{produto.titulo}</h1>
                    <Rating value={4} readOnly stars={5} cancel={false} />
                </div>
                <img src="../assets/caixas.svg" alt="caixas" className="request-img w-full"/>
                <div className="description green-text font-medium mt-4">
                    {produto.medidas}
                </div>

                <div className="request-info mt-4">
                    <h3 className="yellow-text font-bold">Remessa encerrando em 3 dias</h3>
                    <h3 className="yellow-text font-bold mb-3">Previsão de entrega 12/12/2023</h3>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Valor únitário:</h3>
                        <h3 className="green-text font-bold">R$ {produto.valor}0</h3>
                    </span>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Quantidade já solicitada:</h3>
                        <h3 className="green-text font-bold">{produto.quantidade}</h3>
                    </span>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Pedidos na remessa:</h3>
                        <h3 className="green-text font-bold">{produto.remessa}</h3>
                    </span> 
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-normal">Frete total:</h3>
                        <h3 className="green-text font-bold">R$ {produto.frete},00</h3>
                    </span>
                    <span className="flex justify-between">
                        <h3 className="green-text font-bold">Frete por pedido:</h3>
                        <h3 className="green-text font-bold">R$ {produto.frete/(produto.remessa==0 ? 1 : produto.remessa)}</h3>
                    </span>
                </div>

                <Link to={`/finish-request/${id}`}>
                    <Button label="Realizar Pedido" className="button-submit flex self-center w-full h-11 align-middle mt-4" />
                </Link>
            </div>
        </div>
    );
}

export default Requests;