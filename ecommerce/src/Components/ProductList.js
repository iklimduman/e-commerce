import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import DefaultProduct from "././DefaultProduct";

import { useLocation } from "react-router-dom";
import ProductsContainer from "./ProductsContainer" ;

const Container = styled.div`
    `
const ProductContainer = styled.div`
    margin : auto ;
    width : 90% ;
    display : flex ;
    flex-wrap : wrap ;
    justify-content: space-between ;
`

const FilterContainer = styled.div`
    margin : auto ;
    margin-top : 30px ;
    padding: 20px  0;
    width : 90% ;
    margin-bottom : 20px ;
    display: flex;
    justify-content: space-between ;

    box-shadow: rgba(0, 0, 0, 0.15) 0 1.95px 1.95px -1px;
    
`

const FilterLeft = styled.div``

const FilterText = styled.span`
margin : 0 10px ;
font-size : 20px ;
font-weight: 600;
`

const Select = styled.select`
margin : 0 15px ;
font-size : 15px ;
font-weight: 400;
`

const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort , setSort] = useState("newest") ;

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters(
            {
                ...filters,
                [e.target.name]: value,
            });
    }

    console.log(filters);


    return (
        <Container>

            <Navbar />

            <FilterContainer>
                <FilterLeft>
                    <FilterText>
                        Filter :
                    </FilterText>
                    <Select name="color" onChange={(e) => handleFilters(e)}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={(e) => handleFilters(e)}>
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </FilterLeft>
                <FilterLeft>
                    <FilterText>
                        Sort :
                    </FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value="newest">
                            Newest
                        </Option>
                        <Option value="price-desc">
                            Price (desc)
                        </Option>
                        <Option value="price-asc">
                            Price (asc)
                        </Option>
                    </Select>
                </FilterLeft>

            </FilterContainer>

            <ProductsContainer cat={cat} filters={filters} sort={sort}/>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;