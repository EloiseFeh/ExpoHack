import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { db } from '../../services/firebaseConnections';
import { doc, getDoc } from 'firebase/firestore';
import { Rating } from 'primereact/rating';
import "../../styles/Home.css";
import "../../styles/Supplier.css";

const SupplierPage = () => {
    const navigation = useNavigate();

    const handleBack = () => {
        navigation(-1);
    }
    const { id } = useParams();
    const [supplier, setSupplier] = useState([]);

    async function SuppierId(id) {
        try {
            const supplierDoc = await getDoc(doc(db, 'fornecedores', id));
            if (supplierDoc.exists()) {
                const supplierData = supplierDoc.data();
                const lista = {
                    id: id,
                    nome: supplierData.nome,
                    categoria: supplierData.categoria,
                    descricao: supplierData.descricao,
                };
                console.log(lista)
                setSupplier(lista);
            } else {
                console.log("Planta Não encontrada");
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        SuppierId(id);
    }, [id]);
    console.log(supplier);
    return (
        <div>
            <div className="header container flex mt-8 justify-between items-center">
                <h1 className="title font-bold text-3xl align-middle"><span onClick={handleBack}>&lt;</span> Fornecedor </h1>
                <div className="profile-div w-14 h-14 rounded-full bg-white">
                </div>
            </div>
            <div className="container bg-white pb-32 h-full mt-6 rounded-l-2xl rounded-r-2xl">
                <div className="w-full flex justify-between p-4 rounded-lg">
                    <div className="flex flex-col items-start">
                        <h2 className="categorie-title font-medium text-left text-3xl mt-4 mb-4">{supplier.nome}</h2>
                        <Rating value={5} readOnly stars={5} cancel={false} />
                    </div>
                    <div>
                        <img src="../assets/exportavai.svg" alt="arrow" className="arrow-img w-full h-full" />
                    </div>

                </div>
                <div>
                    <p className="text-[#8F9F2C]">{supplier.descricao}</p>
                </div>

                <div className="catalogue mt-4">
                    <h1 className="catalogue-title orange-title font-bold text-left text-3xl mt-4 mb-4">Catálogo</h1>

                    <Link to={`/requests/${id}`} className="supplier-card w-full flex justify-between p-4 rounded-lg">
                        <div className="flex flex-col items-start">
                            <h1 className="supplier-title font-semibold mb-1 text-white">Caixa Correios</h1>
                            <p className="supplier-description mb-2 text-white">Papel</p>
                            <Rating value="4" readOnly stars={5} cancel={false} />
                        </div>
                        <div>
                            <img src="../assets/caixaCorreio2.svg" alt="arrow" className="arrow-img w-full h-full"/>
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
        
    );
};

export default SupplierPage;