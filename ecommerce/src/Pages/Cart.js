import React , { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";

const Container = styled.div``

const Wrapper = styled.div`
    font-family: 'Didact Gothic', sans-serif;
    display : flex ;
    flex-direction : column ;
    align-items : center ;
    margin-top : 55px ;
    margin-bottom : 20px ;
    min-height : 100vh ;
`

const Title = styled.span`
    font-size : 26px ;
    font-weight : 600 ;
    color : #39024D ;
`

const ButtonWrapper = styled.div`
    width : 70% ;
    height : 10vh ;
    margin-top : 15px ;
    position : relative ;
`

const ContinueShopping = styled.button`
    position : absolute ;
    left : 0px ;
    background-color : rgb(58,15,84) ;
    border : none ;
    color : white ;
    height : 45px ;
    font-size : 16px ;
    cursor : pointer ;
`

const CheckOut = styled.button`
    position : absolute ;
    right : 0px ;
    border : 2px solid rgb(58,15,84) ;
    background-color : white ;
    color : rgb(58,15,84) ;
    height : 45px ;
    font-size : 16px ;
    cursor : pointer ;
    font-weight : 700 ;
`

const CartWrapper = styled.div`
    width : 70% ;
    display : flex ;
    flex-direction : column ;
    
`

const CartItem = styled.div`
    width : 100% ;
    height : 30vh ;
    display : flex ;
    justify-content : center ;
    align-items : center ;
    flex-direction : row ;
    margin-bottom : 15px ;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const CartImage = styled.div`
    width : 20% ;
    height : 90% ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
`

const CartDetail = styled.div`
    width : 60% ;
    height : 70% ;
    display : flex ;
    flex-direction : column ;
    padding : 20px 0 ;
`

const CartPrice = styled.div`
    width : 20% ;
    height : 60% ;
    display : flex ;
    flex-direction : column ;
`

const Row = styled.div`
    flex : 1 ;
    display : flex ;
    align-items :center ;
    flex-direction :row ;
`

const Image = styled.img`
    height : 100% ;`

const SmallTitle = styled.span`
    line-height : 30px ;
    font-size : 19px ;
    font-weight : 700 ;
    margin-right : 10px ;
`

const Description = styled.span`
    font-size : 17px ;
    font-weight : 550 ;`

const Color = styled.div`
    width : 30px ;
    height : 30px ;
    background-color : #A0A35E ;
    border-radius: 50% ;
    border : 1px solid black ;
`
const Price = styled.span`
    flex : 1 ;
    font-size : 19px ;
    font-weight : 700 ;
    color : #39024D ;
`

const QuantityWrap = styled.div`
    flex : 1 ;
    display : flex ;
    flex-direction : row ;
`

const Quantity = styled.div`
    font-size : 20px ;
    font-weight : 700 ;
    color : #590876 ;
    margin : 0 15px ;`

const QuantityButton = styled.button`
    width : 33px ;
    height : 33px ;
    color : #590876  ;
    font-size : 18px ;
    font-weight : 700 ;
    border : 1.5px solid #590876  ;
    background-color : transparent ;
    border-radius : 50% ;
    cursor : pointer ;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);`

const Cart = () => {

    const [quantity , setQuantity] = useState(1) ;

    const handleIncrement = () =>{
        setQuantity(quantity + 1)
    }

    const handleDecrement = () => {
        quantity>1 && setQuantity(quantity - 1) ;
    }
    

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <ButtonWrapper>
                    <ContinueShopping>CONTINUE SHOPPING</ContinueShopping>
                    <CheckOut>CHECKOUT NOW</CheckOut>
                </ButtonWrapper>
                <CartWrapper>
                    <CartItem>
                        <CartImage>
                            <Image src="https://images.pexels.com/photos/5709908/pexels-photo-5709908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        </CartImage>
                        <CartDetail>
                            <Row>
                                <SmallTitle>Product : </SmallTitle>
                                <Description>Multi colored sweather</Description>
                            </Row>
                            <Row>
                                <SmallTitle>ID : </SmallTitle>
                                <Description>12345678</Description>
                            </Row>
                            <Row>
                                <SmallTitle>Size : </SmallTitle>
                                <Description>M</Description>
                            </Row>
                            <Row>
                                <SmallTitle>Color : </SmallTitle>
                                <Color />
                            </Row>

                        </CartDetail>
                        <CartPrice>
                            <Price>50 $</Price>
                            <QuantityWrap>
                                <QuantityButton onClick={handleIncrement}>+</QuantityButton>
                                <Quantity>{quantity}</Quantity>
                                <QuantityButton onClick={handleDecrement}>-</QuantityButton>
                            </QuantityWrap>

                        </CartPrice>

                    </CartItem>

                    <CartItem>
                        <CartImage>
                            <Image src="https://images.pexels.com/photos/5709908/pexels-photo-5709908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        </CartImage>
                        <CartDetail>
                            <Row>
                                <SmallTitle>Product : </SmallTitle>
                                <Description>Multi colored sweather</Description>
                            </Row>
                            <Row>
                                <SmallTitle>ID : </SmallTitle>
                                <Description>12345678</Description>
                            </Row>
                            <Row>
                                <SmallTitle>Size : </SmallTitle>
                                <Description>M</Description>
                            </Row>
                            <Row>
                                <SmallTitle>Color : </SmallTitle>
                                <Color />
                            </Row>

                        </CartDetail>
                        <CartPrice>
                            <Price>50 $</Price>
                            <QuantityWrap>
                                <QuantityButton onClick={handleIncrement}>+</QuantityButton>
                                <Quantity>{quantity}</Quantity>
                                <QuantityButton onClick={handleDecrement}>-</QuantityButton>
                            </QuantityWrap>

                        </CartPrice>

                    </CartItem>
                    <CartItem>
                        <CartImage>
                            <Image src="https://images.pexels.com/photos/5709908/pexels-photo-5709908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        </CartImage>
                        <CartDetail>
                            <Row>
                                <SmallTitle>Product : </SmallTitle>
                                <Description>Multi colored sweather</Description>
                            </Row>
                            <Row>
                                <SmallTitle>ID : </SmallTitle>
                                <Description>12345678</Description>
                            </Row>
                            <Row>
                                <SmallTitle>Size : </SmallTitle>
                                <Description>M</Description>
                            </Row>
                            <Row>
                                <SmallTitle>Color : </SmallTitle>
                                <Color />
                            </Row>

                        </CartDetail>
                        <CartPrice>
                            <Price>50 $</Price>
                            <QuantityWrap>
                                <QuantityButton onClick={handleIncrement}>+</QuantityButton>
                                <Quantity>{quantity}</Quantity>
                                <QuantityButton onClick={handleDecrement}>-</QuantityButton>
                            </QuantityWrap>

                        </CartPrice>

                    </CartItem>


                </CartWrapper>

            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart;