import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background : linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
    ),
    url("https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") ;
    
    background-size : cover ;
    background-repeat: no-repeat;
    width : 100vw ;
    height : 100vh ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
`

const Wrapper = styled.div`
    width : 40% ;
    padding : 20px ;
    background-color : rgba(255,255,255,0.7) ;
    font-family: 'Didact Gothic', sans-serif;
    `

const Title = styled.h1`
    opacity : 1 ;
    font-size : 28px ;
    
`
const Form = styled.form`
    display : flex ;
    flex-wrap : wrap ;`

const Input = styled.input`
    flex : 1 ;
    min-width : 40% ;
    margin : 20px 10px 0 0 ;
    padding : 5px ;`

const Agreement = styled.span`
    font-size : 12px ;
    margin-top : 15px ;`

const Button = styled.button`
    width : 30% ;
    border : none ;
    padding : 15px 20px ;
    cursor : pointer ;
    margin-top : 15px ;
    color : white ;
    background-color : #390270 ;`

const Bottom = styled.div`
    display : flex ;
    flex-direction : column ;
    `

const Register = () => {
    return (
        <Container>

            <Wrapper>
                <Title>Create Account</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Lastname" />
                    <Input placeholder="Username" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Bottom>
                        <Agreement>
                            By creating an account, I consent to processing of my personal datain accordence with <b>PRIVACY POLICY</b>
                        </Agreement>
                        <Button>CREATE</Button>
                    </Bottom>

                </Form>
            </Wrapper>

        </Container>
    )
}

export default Register;