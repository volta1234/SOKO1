import React, { useEffect, useState } from "react";

export default function Products(){
    const[products, setProducts] = useState([])

    useEffect(() => {
        fetch("/products")
        .then(res => res.json())
        .then(products => setProducts(products))
    },[])

    console.log(products)

    return(
        <>
        {products.map((product) => (
            <div key = {product.id}>
                <p>{product.name}</p>
                <img className="img" src={product.image} alt="img"/>
            </div>
        ))}
        </>
    )
}