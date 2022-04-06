import React, { useRef } from "react";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';
import { Mobile } from "../ResponsiveConstants";

const Container = styled.div`
    background: rgba(211,211,255,0.25) ;
    width: 100% ;
    margin : auto ;
    height : 30vh ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    flex-direction : column ;
    margin-bottom : 20px ;

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
    ${Mobile({ fontSize: "40px" })} ;
    `

const Description = styled.span`
    display: flex;
    align-items : center ;
    justify-content: center ;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.2em;
    line-height: 2.5em;
    margin-bottom : 20px ;
    ${Mobile({ fontSize: "1em", lineHeight: "1.5em", margin: "10px 10px", textAlign: "center" })} ;
    `

const İnputContainer = styled.div`
    width : 30% ;
    display: flex;
    justify-content : space-between ;
    ${Mobile({ width: "70%" })} ;
    `

const Input = styled.input`
    width : 30% ;
    height : 30px ;
    background-color: transparent ;
    border : 0.5px solid #aa8fe8 ;
    flex : 8 ;
    ${Mobile({ width: "70%" })} ;
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
                <Input
                    autoComplete="off"
                    ref={inputElement}
                    type="email"
                    placeholder="Enter your e-mail">

                </Input>
                <Subscribe>
                    <SendIcon />
                </Subscribe>
            </İnputContainer>

        </Container>
    )
}

export default Newsletter;