import React from "react";
import styled from "styled-components";

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRatings from "react-star-ratings";

import { Link } from "react-router-dom";


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 650px;
    width: 38vh ;
    margin : 5px ;
    margin-bottom : 20px ;
    position : relative ;
    padding : 1em ;
    background-color : rgb(222,222,222, 0.6) ;
    border-radius: 20px ;
`

const Image = styled.img`
    width : 500px ;
    height : 35vh ;
    object-fit : cover ;
    border-radius: 20px ;
    
`

const Description = styled.h1`
    
    font-size : 15px ;
    color : #585858 ;
    font-family: 'Nunito Sans', sans-serif;
    margin-bottom : 0 !important ;
`

const BottomContainer = styled.div`
    
    width : 100% ;
    height : 25% ;
    
    display : flex ;
    flex-direction : column ;
    align-items : center ;
    justify-content : center ;
    z-index : 1 ;
    padding-top : 10px ;
    text-align : center ;
`

const EyeContainer = styled.div`
    
    width : 100% ;
    height : 100% ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    opacity : 0 ;
    &:hover {
        background-color : rgb(222,222,222, 0.4) ;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width : 100% ;
    height : 75% ;
    background : url(${props => props.img}) no-repeat;
    background-size: cover ;
    background-position : center ;
    border-radius : 20px ;
`

const PointContainer = styled.div`
    width : 100% ;
    font-size : 20px ;
`

const PriceContainer = styled.div`
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    margin : 10px 0 ;
`

const Title = styled.div`
    font-size : 20px ;
    color : #07000B ;
    font-weight : 500 ;
`

const TitleContainer = styled.div`
    display : flex ;
    flex-direction : column ;
    align-items : center ;
    justify-content : center ;
    width : 100% ;
    min-height : 35% ;
`

const ProductCard = ({ item }) => {
    console.log(item);
    return (
        <Container>
            <InfoContainer>

                <ImageContainer img={item.img}>

                    <EyeContainer>

                        <Link to={`/product/${item._id}`}>
                            <VisibilityOutlinedIcon sx={{
                                width: '40px',
                                height: '40px',
                                color: "#200132",
                                transition: "all 0.5s ease",
                                '&:hover': {

                                    transform: "scale(1.4)"
                                }
                            }} />

                        </Link>

                    </EyeContainer>


                </ImageContainer>


                <BottomContainer>
                    <TitleContainer>
                        <Title>{item.title}</Title>
                    </TitleContainer>

                    <Description>{item.description}</Description>

                    <PriceContainer>
                        $ {item.price}
                    </PriceContainer>

                    <StarRatings
                        rating={item.point}
                        numberOfStars={5}
                        starDimension="25px"
                        starRatedColor="#340263"

                    />

                </BottomContainer>

            </InfoContainer>



            <ShoppingContainer>
                <ShoppingCartOutlinedIcon sx={{
                    color: 'black',
                    backgroundColor: "white",
                    borderRadius: '50%',
                    padding: '5px',
                    marginRight: "5px",
                    marginTop: "5px",
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
                    marginTop: "5px",
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