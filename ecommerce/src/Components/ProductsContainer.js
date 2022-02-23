import React, { useEffect } from "react";
import styled from "styled-components";

import { Products } from "../Data";
import ProductCard from "./ProductCard";

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

    useEffect(()=>{

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