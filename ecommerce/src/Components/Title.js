import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-left : 50px ;
    text-transform : uppercase ;
    font-family: 'Nunito Sans', sans-serif;
`

const Text = styled.h1``

const Title = ({item}) => {
    return (
        <Container>
            <Text>{item.text}</Text>
        </Container>
    )
}

export default Title ;