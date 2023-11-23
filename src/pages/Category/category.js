import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SupplierCard from "../../components/SupplierCard";
import { getDocs, collection } from "@firebase/firestore";
import { db } from "../../services/firebaseConnections";

const CategoryPage = () => {

    const [suppliers, setSuppliers] = useState([]);

    const getSuppliers = collection(db, "fornecedores");

    useEffect(() => {
        async function fetchData() {
            const query = await getDocs(getSuppliers).then((snapshot) => {
                const data = [];
                snapshot.forEach((doc) => {
                    data.push({id: doc.id, nome: doc.data().nome, categoria: doc.data().categoria });
                });
                setSuppliers(data);
                return data;
            });
        }
        fetchData();
    });
    return (
        <div>
            <div className="header container flex mt-8 justify-between items-center">
                <h1 className="title font-bold text-3xl align-middle"> &lt; Embalagens </h1>
                <div className="profile-div w-14 h-14 rounded-full bg-white">
                </div>
            </div>

            <div className="container absolute bg-white h-full mt-6 rounded-l-2xl rounded-r-2xl">
                <div className="category-div h-1/3">
                    <h1 className="categorie-title font-medium text-left text-3xl mt-4 mb-4">Filtros</h1>
                    <div className="categories flex justify-between flex-wrap">
                        <div className="category-card mb-4 rounded-2xl">
                            <img src="../assets/subVidro.svg" alt="rótulos" className="category-img w-full h-full"/>
                        </div>
                        <div className="category-card mb-4 rounded-2xl">
                            <img src="../assets/subPlastico.svg" alt="embalagens" className="category-img w-full h-full"/>
                        </div>
                        <div className="category-card mb-4 rounded-2xl">
                            <img src="../assets/subPapel.svg" alt="biólogicos" className="category-img w-full h-full"/>
                        </div>
                    </div>
                </div>

                <div className="expires-div h-1/2">
                    <h1 className="expires-title font-medium text-left text-3xl mt-4 mb-4">Fornecedores</h1>
                    <div className="expirations flex justify-between flex-wrap w-full">
                        {
                            suppliers.map((supplier, index) => {
                                return (
                                    <Link to="/suppliers/1" key={index}  className="expiration-card w-full rounded-2xl">
                                        <SupplierCard title={supplier.nome} category={supplier.categoria} rating={4} />
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            
            </div>
        </div>
    );
}   

export default CategoryPage;