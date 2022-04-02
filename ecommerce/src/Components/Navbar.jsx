import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCart, ShoppingCartOutlined } from "@material-ui/icons";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Badge, Input } from '@material-ui/core';
import { Mobile } from '../ResponsiveConstants';
import "./Navbar.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BaseNavbarText = styled.span`
    font-family: 'Didact Gothic', sans-serif;
    cursor : pointer ;
    color : black ;
    font-size : 18px ;
    color : #07000B ;
    font-weight : 500 ;
`

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
    align-items : center ;
    justify-content: center;
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
    flex : 1 ;
`
const MenuItem = styled(BaseNavbarText)`
    margin-left : 25px ;
    ${Mobile({ display: "none" })} ;
    
`
const MenuItemKeep = styled.div`
    cursor : pointer ;
    margin-left : 25px ;
`

const MenuMobile = styled.div`
    cursor : pointer ;
    margin-left : 25px ;
    display : none ;
    ${Mobile({ display: "inline-block" })} ;
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

const NavbarText = styled(BaseNavbarText)`

`

window.addEventListener('resize', () => {
    var w = window.innerWidth;
    if (w <= 880) {
        /*
        document.getElementsByName("input-field")[0].placeholder = "";
        */
    }
    if (w > 880) {
        document.getElementsByName("input-field")[0].placeholder = "Search for an item";
    }
})

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    console.log(quantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <div className="logo-container">

                    </div>
                </Left>
                <Center>
                    <SearchContainer>
                        <Search style={{ color: "gray", cursor: "pointer" }} />
                        <input type="text" className="input-field" placeholder="Search for an item" name="input-field" />

                    </SearchContainer>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <Link to="/cart" style={{textDecoration : "none"}}>
                        <MenuItemKeep>
                            <Badge badgeContent={quantity} color="primary">
                                <FavoriteBorderOutlinedIcon />
                            </Badge>
                            <NavbarText>
                                My Wishlist
                            </NavbarText>
                        </MenuItemKeep>
                    </Link>
                    <Link to="/cart" style={{textDecoration : "none"}}>
                        <MenuItemKeep>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                            <NavbarText>
                                My Cart
                            </NavbarText>
                        </MenuItemKeep>
                    </Link>
                    <MenuMobile>
                        <MenuOutlinedIcon />
                    </MenuMobile>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
