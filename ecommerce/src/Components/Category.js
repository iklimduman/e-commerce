import React from "react";
import styled from "styled-components";

const Container = styled.div`

    flex : 1 ;
    margin : 10px ;
    height : 70vh ;
    position : relative ;
`

const Info = styled.div`
    position : absolute ;
    width : 100% ;
    height : 100% ;
    top : 0 ;
    left : 0 ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    flex-direction : column ;
    background-color : rgb(216,216,216,0.3);

    &:hover {
        background-color : transparent ;
    }

`

const Image = styled.img`
    width : 100% ;
    height : 100% ;
    object-fit : cover ;
`

const Title = styled.h1`
    text-transform : uppercase ;
    color : white ;
    font-family: 'Nunito Sans', sans-serif;

`

const Description = styled.button`
    cursor : pointer ;
    border : 2px solid white ;
    background-color : transparent ;
    padding : 10px 20px;
    text-transform : uppercase ;
    color : white ;
    font-size : 16px ;
    border-radius : 5px ;
    font-family: 'Nunito Sans', sans-serif;
`


const Category = ({ item }) => {

    const handleClick = () => {
        console.log("i got clicked")
    }
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.name}</Title>
                <Description onClick={handleClick}>Show More!</Description>
            </Info>

        </Container>
    )
}

export default Category;