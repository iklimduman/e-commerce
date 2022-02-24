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

    // filters : { color : ".." , size : ".."} 
    // cat : woman, sale, casual etc..

    console.log("sort = " + sort)

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // get products from api

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`
                    : `http://localhost:5000/api/products`);
                if (res.data.length == 0) {
                    res = await axios.get(`http://localhost:5000/api/products`);
                }

                setProducts(res.data);
                console.log("products = ");
                console.log(products);
                console.log(res.data);
            }
            catch (err) {
            }
        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) => {
                    return Object.entries(filters)
                        .every(([key, value]) => item[key].includes(value))
                })

            )
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
        }
        else if (sort === "price-asc") {
            setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
        }
        else {
            setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
        }

    }, [sort])

    console.log("filtered products = " + filteredProducts);

    return (
        <ProductContainer>
            {cat ? filteredProducts.map((item) => (
                <ProductCard item={item} key={item.id} />))
                : products.map((item) => (
                    <ProductCard item={item} key={item.id} />))}
        </ProductContainer>
    )
}

export default ProductsContainer;