import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import styled from "styled-components";

import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { publicRequest } from "../RequestMethods";
import { addProduct } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";
import { Comments } from "../Components/Comments";
import { addWishlistProduct } from "../Redux/wishlistRedux";


const BoxShadow = styled.div`
    -webkit-box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
    -moz-box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
    box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
`

const BaseButton = styled.button`
    height : 40px ;
    width : 200px ;
    font-size : 18px ;
    cursor : pointer ;
    font-weight : 300 ;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    font-family: 'Didact Gothic', sans-serif;
`

const Wrapper = styled(BoxShadow)`
    width : 60vw ;
    height : 60vh ;
    padding : 100px ;
    margin : auto ;
    margin-top : 100px ;
    margin-bottom : 40px ;
    display : flex ;
    flex-direction : row ;
    border-radius: 2% ;
`

const ImageContainer = styled.div`
    flex : 1 ;
`

const Image = styled.img`
    border-radius : 2% ;
    width : 90% ;
    height : 90% ;
    object-fit : cover ;
`

const InfoContainer = styled.div`
    flex  : 1 ;
`

const Title = styled.h1`
    color : rgb(58,15,84) ;`


const Description = styled.p``

const SmallTitle = styled.h3``

const ButtonContainer = styled.div`
    display : flex ;
    flex-direction : row ;`

const SizeButton = styled.button`
    width : 32px ;
    height : 32px ;
    margin : 0 5px ;
    text-align : center ;
`

const BuyContainer = styled.div`
    margin-top : 30px ;
    display : flex ;
    flex-direction : row ;
`

const Favorite = styled(BaseButton)`
    margin-right : 15px ;
    background-color : transparent ;
    border : 0.5px solid rgb(58,15,84) ;
    border-radius : 2% ;
    color : rgb(58,15,84) ;
    letter-spacing: 2.5px;
`

const CartButton = styled(BaseButton)`
    letter-spacing: 2.5px;
    background-color : rgb(58,15,84) ;
    color : white ;
`

const QuantityContainer = styled.div`
    display : flex ;
    align-items : center ;`

const QuantityButton = styled.button`
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;
    height: 27px;
    width: 27px;
    padding: 0px;
    vertical-align: middle;
    line-height: 17px;
    background-color: transparent;
    border : 1px solid rgb(58,15,84) ;
    border-radius : 2% ;
    cursor : pointer ;
`
const sizeButtonStyle = {
    borderRadius: "50%",
    backgroundColor: "transparent",
    borderColor: " rgb(58,15,84)",
    color: " rgb(58,15,84)",
    cursor: "pointer ",
    fontWeight: "500",
    height: "37px",
    width: "37px",
}

const Price = styled.span`
    color : rgb(58,15,84) ;
    font-weight : 600 ;
    font-size : 20px ;`

const Quantity = styled.span`
    font-size : 22px ;
    line-height : 32px ;
    margin : 0 10px ;`

const ColorButton = styled.div`
    width : 30px ;
    height : 30px ;
    border : 2px solid #EEEFEF ;
    margin : 0 0 0 10px ;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor : pointer ;
`

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1);
    const [update, setUpdate] = useState(0);

    const location = useLocation();  // to get product id from url
    const id = location.pathname.split("/")[2]; // product id

    const [product, setProduct] = useState({});

    const [colorArr, setColorArr] = useState([]);
    const [sizeArr, setSizeArr] = useState([]);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {

            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
                setColorArr(res.data.color);
                setSizeArr(res.data.size);

            }
            catch (err) {
                console.log(err);
            }
        }
        getProduct();

    }, [id])



    const [sizeButton, setSizeButton] = useState(
        [
            {
                name: "XS",
                buttonStyle: sizeButtonStyle
            },
            {
                name: "S",
                buttonStyle: sizeButtonStyle
            },
            {
                name: "M",
                buttonStyle: sizeButtonStyle
            },
            {
                name: "L",
                buttonStyle: sizeButtonStyle
            },
            {
                name: "XL",
                buttonStyle: sizeButtonStyle
            }

        ]
    );

    const [colorButton, setColorButton] = useState(
        [
            {
                name: "white"
            },
            {
                name: "black"
            },
            {
                name: "blue"
            }
        ]
    )

    const handleColorOnClick = (index) => {

        setColor(index);
    }



    const HandleSizeButtonOnClick = (index) => {

        setSize(index);

    }

    const handleDecrease = () => {
        if (quantity !== 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleAddCart = () => {
        dispatch(addProduct({ ...product, quantity, color, size }));
    }

    const handleAddWishlist = () => {
        dispatch(addWishlistProduct({
            ...product ,
            quantity : 1
        }))
    }

    return (

        <Container>
            <Navbar />

            <Wrapper>

                <ImageContainer>
                    <Image src={product.img} />

                </ImageContainer>
                <InfoContainer>
                    <Title>
                        {product.title}
                    </Title>
                    <Price>$ {product.price}</Price>
                    <Description>
                        {product.description}
                    </Description>
                    <SmallTitle>
                        Select Size
                    </SmallTitle>
                    <ButtonContainer>
                        {sizeArr.map((size) => (
                            <SizeButton style={sizeButtonStyle} onClick={() => HandleSizeButtonOnClick(size)}>{size}</SizeButton>
                        ))}
                    </ButtonContainer>
                    <SmallTitle>
                        Color
                    </SmallTitle>

                    <ButtonContainer>
                        {colorArr.map((c) => (
                            <ColorButton color={c} onClick={() => handleColorOnClick(c)} />
                        ))}
                    </ButtonContainer>
                    <SmallTitle>
                        Quantity
                    </SmallTitle>
                    <QuantityContainer>
                        <QuantityButton onClick={handleDecrease}> - </QuantityButton>
                        <Quantity>{quantity}</Quantity>
                        <QuantityButton onClick={handleIncrease}> + </QuantityButton>
                    </QuantityContainer>
                    <BuyContainer>
                        <Favorite onClick={handleAddWishlist}>
                            <FavoriteBorderOutlinedIcon style={{ marginRight: "5px", color: " rgb(58,15,84)" }} />
                            WISHLIST
                        </Favorite>
                        <CartButton onClick={handleAddCart}>ADD TO CART</CartButton>
                    </BuyContainer>
                </InfoContainer>

            </Wrapper>
            <Comments />

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SingleProduct;