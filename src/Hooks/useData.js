import React, { useEffect, useState } from 'react';

const useData = () => {
    const [category, setCategory] = useState([]) 
        useEffect(()=>{
            fetch("/Category.json")
            .then(res=>res.json())
            .then(data=>setCategory(data))
        },[])
    const [products, setProducts] = useState([]) 
        useEffect(()=>{
            fetch("/Products.json")
            .then(res=>res.json())
            .then(data=>setProducts(data))
        },[])
    return {category,products}
};

export default useData;