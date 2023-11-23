import React from "react";
import { Rating } from 'primereact/rating';
import "../styles/Category.css";
        

const SupplierCard = (props) => {
    const backgroundImage = {
        backgroundImage: `url(${props.img}) cover/contain no-repeat`
    };
    return (
        <div className="supplier-card w-full flex justify-between p-4 rounded-lg">
                <div className="flex flex-col items-start">
                    <h1 className="supplier-title font-semibold mb-1 text-white">{props.title}</h1>
                    <p className="supplier-description mb-2 text-white">{props.category}</p>
                    <Rating value={props.rating} readOnly stars={5} cancel={false} />
                </div>
                <div>
                    <img src="../assets/exportavai.svg" alt="arrow" className="arrow-img w-full h-full"/>
                </div>
        </div>
    );
};

export default SupplierCard;