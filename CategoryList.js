import React from "react";
import CategoryCard from "../component/CategoryCard";
const CategoryList=()=>{
    /*const {categories,loading}=useGetCategories();
    console.log(categories);*/
    return(
        <div className="category-list">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    );
}
export default CategoryList;