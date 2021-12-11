import React from "react";
import styled from "styled-components";

const Container = styled.div``

const Image = styled.img``

const MainProduct = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}/>
        </Container>
    )
}

export default MainProduct;