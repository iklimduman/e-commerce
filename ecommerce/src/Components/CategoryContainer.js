import React from "react";
import styled from "styled-components";
import Category from "./Category";
import { Categories } from "../Data";


const Container = styled.div`
    display : flex ;
    padding : 20px ;
    justify-content : space-between ;
`


const CategoryContainer = () => {
    return (
        <Container>
        {Categories.map((item)=> (
            <Category item={item} />
        ))}

        </Container>
    )
}

export default CategoryContainer ;