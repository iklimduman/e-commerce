import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color : rgb(232,252,242,0.5) ;
    padding-top : 5% ;
    `

const Header = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform : uppercase ;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 2em;
    line-height: 2.5em;
    `

const Description = styled.span`
    display: flex;
    align-items : center ;
    justify-content: center ;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.2em;
    line-height: 2.5em;
    `

const İnputContainer = styled.div`
    display: flex;
    align-items : center ;
    justify-content: center ;
    `

const Input = styled.input`
    width : 30% ;
`

const Subscribe = styled.button`
    font-family: 'Nunito Sans', sans-serif;
    `

const Newsletter = () => {

    const inputElement = useRef("")

    return (
        <Container>
            <Header>Newsletter</Header>
            <Description>Subscribe to our newsletter to keep up with our latest news!</Description>
            <İnputContainer>
                <Input autoComplete="off" ref={inputElement} type="email">

                </Input>
                <Subscribe>
                    SUBSCRIBE
                </Subscribe>
            </İnputContainer>

        </Container>
    )
}

export default Newsletter;