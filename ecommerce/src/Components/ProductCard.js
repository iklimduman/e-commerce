import React from "react";
import styled from "styled-components";

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRatings from "react-star-ratings";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 35vh ;
    font-size: 4em;
    margin : 20px ;
    border : 1px solid black ;
    position : relative ;
    `

const Image = styled.img`
    width : 500px ;
    height : 35vh ;
    object-fit : cover ;
    
`

const Description = styled.h1`
    
    font-size : 20px ;
    bottom : 0 ;
    color : black ;
    font-family: 'Nunito Sans', sans-serif;
`

const BottomContainer = styled.div`
    
    width : 100% ;
    height : 15% ;
    
    background-color : rgb(222,222,222, 0.6) ;
    display : flex ;
    flex-direction : column ;
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

const InfoContainer = styled.div`
    width : 100% ;
    height : 100% ;
    display : flex ;
    flex-direction : column ;
`

const ImageContainer = styled.div`
    width : 100% ;
    height : 85% ;
    background : url(${props => props.img}) no-repeat;
    background-size: cover ;
`

const PointContainer = styled.div`
    width : 100% ;
    font-size : 20px ;
`

const ProductCard = ({ item }) => {
    return (
        <Container>
            <InfoContainer>
                <ImageContainer img={item.img}>

                </ImageContainer>

                <BottomContainer>
                    <Description>{item.desc}</Description>
                    <PointContainer>{item.point}</PointContainer>
                    <StarRatings
                        rating={item.point}
                        numberOfStars={5}
                        starRatedColor="blue"
                    />

                </BottomContainer>

            </InfoContainer>


            <EyeContainer>

                <VisibilityOutlinedIcon sx={{
                    width: '40px',
                    height: '40px',
                    transition: "all 0.5s ease",
                    '&:hover': {

                        transform: "scale(1.4)"
                    }
                }} />

            </EyeContainer>
            <ShoppingContainer>
                <ShoppingCartOutlinedIcon sx={{
                    color: 'black',
                    backgroundColor: "white",
                    borderRadius: '50%',
                    padding: '5px',
                    cursor: 'pointer',
                    transition: "all 0.5s ease",
                    '&:hover': {

                        transform: "scale(1.1)"
                    }
                }} />
                <StarOutlineRoundedIcon sx={{
                    color: 'black',
                    backgroundColor: "white",
                    borderRadius: '50%',
                    padding: '5px',
                    marginRight: '5px',
                    cursor: 'pointer',
                    transition: "all 0.5s ease",
                    '&:hover': {

                        transform: "scale(1.1)"
                    }
                }} />
            </ShoppingContainer>


        </Container>
    )
}

export default ProductCard;