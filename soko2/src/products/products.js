import React, { useEffect, useState } from "react";
import "./products.css"

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
            <div class = "row">
               <div class = "col s6 m2">
                  <div class = "card blue-grey lighten-4">
                       <div class = "card-content">
                          <quote>{product.name}</quote>
                          < img height={150} width={150} src={product.image} alt="img"/>
                       </div>
                  </div>
               </div>
            </div>
        ))}
    </>
    )
}