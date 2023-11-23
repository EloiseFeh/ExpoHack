import React from "react";
import "../styles/Cards.css";

const ExpirationCard = (props) => {
    const backgroundImage = {
        backgroundImage: `url(${props.img}) cover/contain no-repeat`
    };
    return (
        <div className=""
        style={
            { backgroundImage: `url(${props.img})`}
        }>
            <h1 className="expiration-title mt-1 mb-2 font-bold">{props.title}</h1>
        </div>
    );
};

export default ExpirationCard;