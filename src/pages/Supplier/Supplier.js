import React from "react";
import { useParams } from "react-router-dom";

const SupplierPage = () => {
    const { id } = useParams();
    return (
        <div>
             <div className="header container flex mt-8 justify-between items-center">
                <h1 className="title font-bold text-3xl align-middle"> &lt; Embalagens </h1>
                <div className="profile-div w-14 h-14 rounded-full bg-white">
                </div>
            </div>
        </div>
    );
};

export default SupplierPage;