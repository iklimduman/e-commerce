import React from "react";
import styled from "styled-components";

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';

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
    margin: 0 15px;
    font-size: 4em;
    position : relative ;
    `

const Image = styled.img`
    width : 100% ;
    height : 100% ;
    object-fit : cover ;
    
`

const Description = styled.h1`
    position : absolute ;
    font-size : 20px ;
    bottom : 0 ;
    color : black ;
    font-family: 'Nunito Sans', sans-serif;
`

const BottomContainer = styled.div`
    position : absolute ;
    width : 100% ;
    height : 5vh ;
    bottom : 10px ;
    background-color : rgb(222,222,222, 0.6) ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    z-index : 1 ;
`

const EyeContainer = styled.div`
    position : absolute ;
    width : 100% ;
    height : 100% ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    opacity : 0 ;
    &:hover {
        background-color : rgb(222,222,222, 0.2) ;
        opacity : 1 ;
        cursor : pointer ;
    }
    
`

const ShoppingContainer = styled.div`
    position : absolute ;
    width : 100% ;
    top : 20px ;
    right : 20px ;
    display : flex ;
    flex-direction : row-reverse ;
    align-items :flex-start ;
`

const MainProduct = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <BottomContainer>
                <Description>{item.desc}</Description>
            </BottomContainer>
            <EyeContainer>
              
                <VisibilityOutlinedIcon sx={{ width : '40px' ,
                height : '40px',
                transition : "all 0.5s ease",
                 '&:hover': {
                    
                    transform : "scale(1.4)"
                } }}/>
            
            </EyeContainer>
            <ShoppingContainer>
                <ShoppingCartOutlinedIcon sx={{color : 'black' ,
                 backgroundColor : "white",
                 borderRadius : '50%',
                 padding : '5px',
                 cursor : 'pointer',
                 transition : "all 0.5s ease",
                 '&:hover': {
                    
                    transform : "scale(1.1)"
                }}}/>
                <StarOutlineRoundedIcon sx={{color : 'black' ,
                 backgroundColor : "white",
                 borderRadius : '50%',
                 padding : '5px',
                 marginRight : '5px',
                 cursor : 'pointer',
                 transition : "all 0.5s ease",
                 '&:hover': {
                    
                    transform : "scale(1.1)"
                }}} />
            </ShoppingContainer>


        </Container>
    )
}

export default MainProduct;