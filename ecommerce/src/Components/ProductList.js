import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

import React from "react";
import styled from "styled-components";
import { Products } from "../Data";
import DefaultProduct from "././DefaultProduct";

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
    margin-top : 20px ;
    width : 80% ;
    display: flex;
    justify-content: space-between ;
    
`

const FilterLeft = styled.div``

const FilterText = styled.span``

const Select = styled.select``

const Option = styled.option``

const ProductList = () => {

    return (
        <Container>

            <Navbar />

            <FilterContainer>
                <FilterLeft>
                    <FilterText>
                        Filter
                    </FilterText>
                </FilterLeft>
                <FilterLeft>
                    <FilterText>
                        Sort
                    </FilterText>
                </FilterLeft>

            </FilterContainer>

            <ProductContainer>
                {Products.map((item) => (
                    <DefaultProduct item={item} key={item.id} />
                ))}
            </ProductContainer>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;