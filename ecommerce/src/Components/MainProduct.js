import React from "react";
import styled from "styled-components";

const Container = styled.div`
    /*flex : 1 ; /* to make every item same size 
    margin : 10px ;
    height : 50vh ;
    width : 50vw ;
    */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    background-color: #00008B;
    color: #fff;
    margin: 0 15px;
    font-size: 4em;
    `

const Image = styled.img`

    width : 100% ;
    height : 100% ;
    object-fit : cover ;
    
    `

const MainProduct = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}/>
        </Container>
    )
}

export default MainProduct;