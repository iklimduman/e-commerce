import React from "react";
import styled from "styled-components";
import Category from "./Category";
import { Categories } from "../Data";
import { Mobile } from "../ResponsiveConstants";

const Container = styled.div`
    display : flex ;
    padding : 20px ;
    justify-content : space-between ;
    ${Mobile({flexDirection : "column" , height : "auto"})} ;
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