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
    width : 90% ;
    display: flex;
    justify-content: space-between ;
    
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

    return (
        <Container>

            <Navbar />

            <FilterContainer>
                <FilterLeft>
                    <FilterText>
                        Filter :
                    </FilterText>
                    <Select>
                        <Option disabled selected>
                            Color
                        </Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
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
                    <Select>
                        <Option selected>
                            Newest
                        </Option>
                        <Option>
                            Price (desc)
                        </Option>
                        <Option>
                            Price (asc)
                        </Option>
                    </Select>
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