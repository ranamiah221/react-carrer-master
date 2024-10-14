import { useEffect, useState } from "react";
import List from "../List/List";


const CategoryList = () => {
    const [categories, setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="grid grid-cols-4 gap-5 mb-10 mt-10">
            {
                categories.map(category=> <List key={category.id} category={category}></List>)
            }
        </div>
    );
};

export default CategoryList;