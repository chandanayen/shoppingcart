import React from "react";
import Item from "./Item";
import Summary from "./Summary";
const CartContainer=()=>{
    return(
        <div className="cart-wrapper">
            <h2 className="section-title">Shopping Cart</h2>
            <div className="cart-container">
                <div className="cart-item">
                   <Item />
                   <Item />
                   <Item />
                   <Item />
                </div>
               <div>
                <Summary />
               </div>
            </div>
        </div>
    );
}
export default CartContainer;