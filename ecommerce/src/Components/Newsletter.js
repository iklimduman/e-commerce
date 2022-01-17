import React, { useRef } from "react";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    background-color : rgb(232,252,242,0.5) ;
    padding-top : 5% ;
    height : 40vh ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    flex-direction : column ;
    `

const Header = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform : uppercase ;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 60px;
    font-weight : 300 ;
    line-height: 2.5em;
    `

const Description = styled.span`
    display: flex;
    align-items : center ;
    justify-content: center ;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.2em;
    line-height: 2.5em;
    margin-bottom : 20px ;
    `

const İnputContainer = styled.div`
    width : 30% ;
    display: flex;
    justify-content : space-between ;
    `

const Input = styled.input`
    width : 30% ;
    height : 30px ;
    flex : 8 ;
    padding : 0 !important ; 
`

const Subscribe = styled.button`
    font-family: 'Nunito Sans', sans-serif;
    flex : 1 ;
    border : none ;
    background-color : #3D4780 ;
    color : white ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    `

const Newsletter = () => {

    const inputElement = useRef("")

    return (
        <Container>
            <Header>Newsletter</Header>
            <Description>Subscribe to our newsletter to keep up with our latest news!</Description>
            <İnputContainer>
                <Input autoComplete="off" ref={inputElement} type="email" placeholder="Enter your e-mail">

                </Input>
                <Subscribe>
                    <SendIcon />
                </Subscribe>
            </İnputContainer>

        </Container>
    )
}

export default Newsletter;