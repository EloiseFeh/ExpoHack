import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import CategoryCard from "../../components/CategoryCard";
import ExpirationCard from "../../components/ExpirationCard";

const Home = () => {
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
                        <Link to="/categories/1" className="category-card rounded-2xl">
                            <CategoryCard img="../assets/rotulo.png" title="Rótulos"/>
                        </Link>
                        <Link to="/categories/2" className="category-card rounded-2xl">
                            <CategoryCard img="../assets/rotulo.png" title="Embalagens"/>
                        </Link>
                        <Link to="/categories/3" className="category-card rounded-2xl">
                            <CategoryCard img="../assets/rotulo.png" title="Biológicos"/>
                        </Link>
                        <Link to="/categories/4" className="category-card rounded-2xl">
                            <CategoryCard img="../assets/rotulo.png" title="Químicos"/>
                        </Link>
                    </div>
                </div>

                <div className="expires-div h-1/2">
                    <h1 className="expires-title font-medium text-left text-3xl mt-4 mb-4">Expira essa semana</h1>
                    <div className="expirations flex justify-between flex-wrap">
                        <Link to="/expirations/1" className="expiration-card rounded-2xl" style={{ backgroundImage: `url(../assets/rotulo.png)`}}>
                            <ExpirationCard  title="Garrafas de vidro"/>
                        </Link>
                        <Link to="/expirations/2" className="expiration-card rounded-2xl" style={{ backgroundImage: `url(../assets/rotulo.png)`}}>
                            <ExpirationCard title="Caixas de papel"/>
                        </Link>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Home;