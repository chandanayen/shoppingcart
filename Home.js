import React from "react";
import ProductionList from "./ProductionList";
import CategoryList from "./CategoryList";
import { ProductProvider } from "./ProductContext";
const Home=()=>{
    return(
        <ProductProvider>
        <div className="main-content">
            <div className="products">
                <h1 className="section-title">Products</h1>
                <ProductionList/>
            </div>
            <div className="category">
                <h1 className="section-title">Categories</h1>
                <CategoryList/>
            </div>   
                
        </div>
        </ProductProvider>
    );
}
export default Home;