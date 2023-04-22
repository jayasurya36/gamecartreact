import { useEffect, useState } from "react"
import { getAllProducts } from "../Utils/apis";
import Product from "./Product";

export default function Home(){
    const [products , setProducts] = useState([]);
    useEffect(() =>{
        getAllProducts()
        .then(data =>{
            setProducts(data.data)
        })
    } , [])
    return<div className="AllProductContainer">
        {
            products.map(data => (
                <Product key={data.id} product = {data.attributes} />
            ))
        }
    </div>
}