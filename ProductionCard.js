import React from "react";
import { TbPlus } from "react-icons/tb";

const ProductionCard=({product})=>{
    return(
        <div className="card-container">
            <div className="card-image">
                <img src={product.image} alt="product" />
            </div>
            <div className="card-detail">
              <h1 className="card-title">{product.title}</h1>
              <div className="card-category">{product.category}</div>
              <div className="card-flex">
                <div className="card-price">${product.price}</div>
                <div className="card-button">
                  <TbPlus />
                </div>
              </div>
             
            </div>
        </div>
    );
}
export default ProductionCard;