import React from "react";
import "../styles/Cards.css";

const CategoryCard = (props) => {
    const backgroundImage = {
        backgroundImage: `url(${props.img}) cover/contain no-repeat`
    };
    return (
        <div className="">
            <div className="category-img" style={backgroundImage}>
                <h1 className="category-title">{props.title}</h1>
            </div>
        </div>
    );
}

export default CategoryCard;