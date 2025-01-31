import { createContext, useEffect, useState} from "react";
import { useParams } from "react-router-dom";

 const ProductContext=createContext();
 export const ProductProvider=({children})=>{
    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(true);
    const{category}=useParams();
    console.log(products);
    const getProducts=async()=>{
        try{
            setLoading(true);
            let url="https://fakestoreapi.com/products";
            if(category){
                url += `/category/${category}/?limit=4`;
            }else{
                url += "?limit=4";
            }
            const res = await fetch(url);
            if(res.ok){
                const data=await res.json();
                setProducts(data);
                setLoading(false);
            }
        }catch(error){
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    };
    useEffect(() =>{
        getProducts(category);
    },[category]);
    return(
        <ProductContext.Provider value={{products,loading}}>{children}</ProductContext.Provider>
    );
 };
 export const useProduct=()=>useState(ProductContext);