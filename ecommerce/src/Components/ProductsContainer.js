import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Products } from "../Data";
import ProductCard from "./ProductCard";

import axios from "axios";

const ProductContainer = styled.div`
    margin : auto ;
    width : 90% ;
    display : flex ;
    flex-wrap : wrap ;
    justify-content: space-between ;
`

const ProductsContainer = ({ cat, filters, sort }) => {

    console.log("category = " + cat);

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // get products from api

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`
                    : `http://localhost:5000/api/products`);
                if(res.data.length == 0) {
                    res = await axios.get(`http://localhost:5000/api/products`) ;
                }
                console.log("api response = ") ;
                console.log(res) ;
            }
            catch (err) {
            }
        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) => Object.entries(filters)
                    .every(([key, value]) => item[key].includes(value)))
            )
    }, [products, cat, filters]) ;

    console.log("filtered products = " + filteredProducts) ;

    return (
        <ProductContainer>
            {filteredProducts.map((item) => (
                <ProductCard item={item} key={item.id} />
            ))}
        </ProductContainer>
    )
}

export default ProductsContainer;