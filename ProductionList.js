import React from "react";
import ProductionCard from "../component/ProductionCard";
import { useProduct } from "./ProductContext";
import Skeleton from "./Skeleton";

const ProductionList=()=>{
    const {products,loading}=useProduct();
    /*const loading = true;*/
    return(
        <div className="product-list">
            {loading ?(
              Array.from({length:4}).map((_,index)=>(
                <div  key={index} className="skeleton-container">
                    <Skeleton />
                </div>

              ))
            ):(
                <>
          
           {/*{JSON.stringify(products)}*/}
         {products.map(product=>(
            <ProductionCard key={product.id} product={product} />
        ))} 
        </>
          )}
        </div>
    );
}
export default ProductionList;