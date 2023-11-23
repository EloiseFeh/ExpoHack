import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import { getDocs, collection } from "@firebase/firestore";
import { db } from "../../services/firebaseConnections";

const Home = () => {

    const [produto, setProdutos] = useState([]);

    const getProdutos = collection(db, "produtos");

    useEffect(() => {
        async function loadProduto() {
            const query = await getDocs(getProdutos).then((snapshot) => {
                const data = [];
                snapshot.forEach((doc) => {
                    data.push({
                        id: doc.id, 
                        titulo: doc.data().titulo, 
                      });
                });
                setProdutos(data);
                return data;
            });
        }
        loadProduto();
    });

    return (
        <div className="">
            <div className="header container flex mt-8 justify-between items-center">
                <h1 className="title font-bold text-3xl align-middle">Bem-vindo</h1>
                <div className="profile-div w-14 h-14 rounded-full bg-white">
                    
                </div>
            </div>

            <div className="container absolute bg-white h-full mt-6 rounded-l-2xl rounded-r-2xl">
                <div className="category-div h-1/2">
                    <h1 className="categorie-title font-medium text-left text-3xl mt-4 mb-4">Categorias</h1>
                    <div className="categories flex justify-between flex-wrap">
                        <Link to="/categories/1" className="category-card mb-4 rounded-2xl">
                            <img src="../assets/cardRotulos.svg" alt="rótulos" className="category-img w-full h-full"/>
                        </Link>
                        <Link to="/categories/2" className="category-card mb-4 rounded-2xl">
                            <img src="../assets/cardEmb.svg" alt="embalagens" className="category-img w-full h-full"/>
                        </Link>
                        <Link to="/categories/3" className="category-card mb-4 rounded-2xl">
                            <img src="../assets/cardBio.svg" alt="biólogicos" className="category-img w-full h-full"/>
                        </Link>
                        <Link to="/categories/4" className="category-card mb-4 rounded-2xl">
                            <img src="../assets/cardQuim.svg" alt="químicos" className="category-img w-full h-full"/>
                        </Link>
                    </div>
                </div>

                <div className="expires-div h-1/2">
                    <h1 className="expires-title font-medium text-left text-3xl mt-4 mb-4">Expira essa semana</h1>
                    <div className="expirations flex justify-between flex-wrap">
                        {produto.map((item, index) =>(
                            <div key={index}>
                        <Link to={`/requests/${item.id}`}  className="expiration-card rounded-2xl">
                            <img src="../assets/expGarrafa.svg" alt="Garrafas de Vidro" className="category-img w-full h-full"/>
                        </Link>
                        </div>
                        ))}
                       
                        <Link to="/requests" className="expiration-card rounded-2xl">
                        <img src="../assets/expCaixa.svg" alt="Caixas de papel" className="category-img w-full h-full"/>
                        </Link>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Home;