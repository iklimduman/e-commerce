import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import styled from "styled-components";

import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { publicRequest } from "../RequestMethods";

const Container = styled.div`
    font-family: 'Didact Gothic', sans-serif;
`

const Wrapper = styled.div`
    width : 60% ;
    padding : 100px ;
    height : 100vh ;
    margin : auto ;
    margin-top : 100px ;
    display : flex ;
    flex-direction : row ;
    border-radius: 3% ;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const ImageContainer = styled.div`
    flex : 1 ;
`

const Image = styled.img`
    height : 60vh ;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius : 2% ;`

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

const Favorite = styled.button`
    margin-right : 15px ;
    height : 40px ;
    width : 200px ;
    font-size : 18px ;
    background-color : transparent ;
    display: flex;
    justify-content: center;
    align-items: center;
    border : 0.5px solid rgb(58,15,84) ;
    border-radius : 2% ;
    color : rgb(58,15,84) ;
    cursor : pointer ;
    letter-spacing: 2.5px;
    font-weight : 300 ;
    `

const CartButton = styled.button`
    height : 40px ;
    width : 200px ;
    font-size : 18px ;
    letter-spacing: 2.5px;
    background-color : rgb(58,15,84) ;
    color : white ;
    cursor : pointer ;
    font-weight : 300 ;
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

const sizeOnclick = {
    borderRadius: "50%",
    backgroundColor: " rgb(58,15,84)",
    borderColor: " rgb(58,15,84)",
    color: "white",
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

const ColorButtonSelected = {
    width: "30px",
    height: "30px",
    border: "1px solid rgb(58,15,84)",
    margin: "0 0 0 10px",
    borderRadius: "50%",
    cursor: "pointer"
}

const SingleProduct = () => {

    const [quantity, setQuantity] = useState(1);
    const [update, setUpdate] = useState(0);

    const location = useLocation();  // to get product id from url
    const id = location.pathname.split("/")[2]; // product id

    const [product, setProduct] = useState({});

    const [colorArr, setColorArr] = useState([]);
    const [sizeArr, setSizeArr] = useState([]);

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
        console.log("PRODUCT");
        console.log(product);
        console.log("COLORS");
        console.log(colorArr);

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
        console.log(index)
    }

    let temp = sizeButton;

    const HandleSizeButtonOnClick = (index) => {

        let target = temp.find(button => button.name === index);

        let elementIndex = temp.indexOf(target);

        if (temp[elementIndex].buttonStyle == sizeButtonStyle) {

            temp.forEach(element => {
                if (element.buttonStyle == sizeOnclick) {
                    element.buttonStyle = sizeButtonStyle;
                }
            });

            temp[elementIndex].buttonStyle = sizeOnclick;

            setSizeButton(temp);

            setUpdate(update + 1);
        }
        else if (temp[elementIndex].buttonStyle == sizeOnclick) {

            temp[elementIndex].buttonStyle = sizeButtonStyle;

            setSizeButton(temp);

            setUpdate(update - 1);
        }
        else {
            console.log("error");
        }
    }

    const handleDecrease = () => {
        if (quantity !== 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity + 1)
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
                        <Favorite><FavoriteBorderOutlinedIcon style={{ marginRight: "5px", color: " rgb(58,15,84)" }} />WISHLIST</Favorite>
                        <CartButton>ADD TO CART</CartButton>
                    </BuyContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SingleProduct;