import React, {useState, useEffect, useContext, useRef} from "react";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { InputNumber } from 'primereact/inputnumber';
import { useParams } from "react-router-dom";
import { db } from '../../services/firebaseConnections';
import { AuthContext } from '../../services/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
        
import "../../styles/Request.css";

const FinishRequest = () => {
    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Pedido realizado com sucesso!', detail:'Você irá para a tela dos seus pedidos', life: 3000});
    }
    const navigation = useNavigate();

    const handleBack = () => {
        navigation(-1);
    }

    const goToMyRequests = () => {
        navigation(`/my-requests/`);
    }

    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();
    const [produto, setProdutos] = useState([]);
    const { user } = useContext(AuthContext);
    

    useEffect(() => {
        async function loadProdutoId(id) {
            try {
                const produtosDoc = await getDoc(doc(db, 'produtos', id));
                if (produtosDoc.exists()) {
                    const produtosData = produtosDoc.data();
                    const lista = {
                        id: doc.id, 
                        titulo: produtosData.titulo, 
                        frete: produtosData.frete, 
                        remessa: produtosData.pedido_remessa,
                        quantidade: produtosData.quantidade_solicitada,
                        valor: produtosData.valor_unitario,
                        users: produtosData.users
                    };
                    setProdutos(lista);
                } else {
                    console.log("Planta Não encontrada");
                }
            } catch (error) {
                console.error(error);
            }
        }
        loadProdutoId(id);

    },[id, produto]);

    const newQuantity = produto.quantidade + quantity;

    

    async function updateProduto() {
        console.log(newQuantity)
          const docRef = doc(db, "produtos", id)
          await updateDoc(docRef, {
            quantidade_solicitada: newQuantity,
            pedido_remessa: produto.remessa + 1
          },)
          
            .then(() => {
                showSuccess();
                goToMyRequests();
              console.log(produto)
            })
            .catch((error) => {
              
            })
      
      }
    return (
        <div>
            <Toast ref={toast} />
            <div className="header container flex mt-8 justify-between items-center">
                <h1 className="title font-bold text-3xl align-middle"> <span onClick={handleBack}>&lt;</span> Remessa </h1>
                <div className="profile-div w-14 h-14 rounded-full bg-white">
                </div>
            </div>

            <div className="container absolute bg-white h-full mt-6 rounded-l-2xl rounded-r-2xl">
                <div className="supplier-info flex justify-between">
                    <h1 className="request-title green-text font-medium text-left text-2xl mt-4 mb-4">{produto.titulo}</h1>
                    <Rating value={4} readOnly stars={5} cancel={false} />
                </div>

                <img src="../assets/caixas.svg" alt="caixas" className="request-img w-full"/>
                
                <div className="set-quantity flex mt-4 items-center">
                    <h1 className="mr-5 font-bold">Quantidade: </h1>
                    <InputNumber className="border-amber-600 h-11 qtd-input" inputId="withoutgrouping" value={quantity} onValueChange={(e) => setQuantity((e.value))} />
                </div>

                <div className="request-info mt-4">
                    <h3 className="yellow-text font-bold">Remessa encerrando em 3 dias</h3>
                    <h3 className="yellow-text font-bold mb-3">Previsão de entrega 12/12/2023</h3>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Valor únitário:</h3>
                        <h3 className="green-text font-bold">R$ {produto.valor}</h3>
                    </span>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Quantidade já solicitada:</h3>
                        <h3 className="green-text font-bold">{produto.quantidade + quantity}</h3>
                    </span>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-bold">Pedidos na remessa:</h3>
                        <h3 className="green-text font-bold">{produto.remessa + 1}</h3>
                    </span> 
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-normal">Frete total:</h3>
                        <h3 className="green-text font-bold">R$ {produto.frete}</h3>
                    </span>
                    <span className="flex justify-between mb-3">
                        <h3 className="green-text font-normal">Valor total:</h3>
                        <h3 className="green-text font-bold">R$ {(produto.valor*(produto.quantidade+quantity)).toFixed(2)}</h3>
                    </span>
                    <span className="flex justify-between">
                        <h3 className="green-text font-bold">Frete por pedido:</h3>
                        <h3 className="green-text font-bold">R$ {produto.frete/(produto && produto.users && produto.users.length==0 ? 1 : (produto && produto.users && produto.users.length) +1 )}</h3>
                    </span>
                </div>

                <Button label="Finalizar Pedido" onClick={updateProduto} className="finish flex self-center w-full h-11 align-middle mt-4" />
            </div>
        </div>
    );
}

export default FinishRequest;