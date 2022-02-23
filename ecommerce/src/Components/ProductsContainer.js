import React, { useEffect } from "react";
import styled from "styled-components";

import { Products } from "../Data";
import ProductCard from "./ProductCard";

import axios from "axios" ;

const ProductContainer = styled.div`
    margin : auto ;
    width : 90% ;
    display : flex ;
    flex-wrap : wrap ;
    justify-content: space-between ;
`

const ProductsContainer = ({cat,filters,sort}) => {
    
    const [products,setProducts] = useState([]) ;
    const [filteredProducts , setFilteredProducts] = useState([]) ;

    // get products from api

    useEffect(()=>{
        const getProducts = async ()=>{
            try{
                const res = await axios.get("http://localhost:5000/api/products") ;
                console.log(res) ;
            }
            catch(err){
            }
        }
        getProducts() ;
    } , [cat]) ;

    return (
        <ProductContainer>
                {Products.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </ProductContainer>
    )
}

export default ProductsContainer ;