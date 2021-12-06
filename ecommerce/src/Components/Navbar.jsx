import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCart, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge, Input } from '@material-ui/core';
import "./Navbar.css";

const Container = styled.div`
    height : 60px ;
`
const Wrapper = styled.div`
    padding : 10px 20px ;
    display : flex ;
    justify-content : space-between ;
`
const Left = styled.div`
flex : 1;
display : flex ;
`

const Right = styled.div`
flex : 1;
display : flex ;
align-items : center ;
justify-content : flex-end ;
padding-right : 25px ;
`

const Center = styled.div`
    align-items: center;
    align-self: center;
    justify-content: center;
    display : flex ;
    flex : 1
`
const MenuItem = styled.div`
    cursor : pointer ;
    margin-left : 25px ;
`

const SearchContainer = styled.div`
    align-self: center;
    border : 1px solid lightgray ;
    display : flex ;
    width : 70% ;
    align-items : center ;
    padding : 5px ;
    border-radius : 25px ;
    `

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <div className="logo-container">

                    </div>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style={{color:"gray",cursor:"pointer"}}/>
                        <input type="text" className="input-field" placeholder="Search for an item"/>
                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
