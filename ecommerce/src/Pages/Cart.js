import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div``

const Wrapper = styled.div`
    font-family: 'Didact Gothic', sans-serif;
    display : flex ;
    flex-direction : row ;
    align-items : center ;
    
    margin-bottom : 20px ;
    width : 80% ;
    margin : auto ;
    margin-top : 55px ;
    min-height : 100vh ;
    position : relative ;
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
    width : 68% ;
    display : flex ;
    flex-direction : column ;
    position : absolute ;
    top : 0 ;
    
`

const CartItem = styled.div`
    width : 100% ;
    height : 30vh ;
    display : flex ;
    justify-content : center ;
    align-items : center ;
    flex-direction : row ;
    margin-bottom : 15px ;
    box-shadow: 0 4px 8px -5px rgba(0, 0, 0, 0.7), 0 6px 20px -5px rgba(0, 0, 0, 0.5);
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
    background-color : ${props => props.color} ;
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
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
`

const TopWrap = styled.div`
    display : flex ;
    justify-content : center ;
    align-items : center ;
    flex-direction : column ;
    margin-top : 20px ;
`

const SummaryWarpper = styled.div`
    width : 30% ;
    min-height : 40vh ;
    
    position : absolute ;
    top : 0 ;
    right : 0 ;
`

const Summary = styled.div`
    width : 100% ;
    min-height : 40vh ;
    margin-top : 20px ;
    box-shadow: 0 4px 8px -5px rgba(0, 0, 0, 0.7), 0 6px 20px -5px rgba(0, 0, 0, 0.5);
    border-radius : 15px ;
    display : flex ;
    flex-direction : column ;
    align-items : center ;
`

const PaymentItem = styled.div`
    width : 80% ;
    display : flex ;
    justify-content : space-between ;
    padding : 15px 0 ;
`

const Text = styled.span`
    font-size : 19px ;
    font-weight : 700 ;
`

const ItemPrice = styled.span`
    font-size : 19px ;
    font-weight : 500 ;`

const CouponInput = styled.input``

const CouponButton = styled.button`
    background-color : #590876 ;
    color : white ;
    font-size : 17px ;
    height : 24px ;
    border :none ;
    border-radius : 3px ;
    cursor : pointer ;
`

const Cart = () => {

    const [quantity, setQuantity] = useState(1);
    const cart = useSelector(state => state.cart);

    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrement = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }


    return (
        <Container>
            <Navbar />
            <Wrapper>

                <CartWrapper>
                    <Title style={{ marginBottom: "20px" }}>
                        Order
                    </Title>
                    {cart.products.map(item => (
                        <CartItem>
                            <CartImage>
                                <Image src={item.img} />
                            </CartImage>
                            <CartDetail>
                                <Row>
                                    <SmallTitle>Product : </SmallTitle>
                                    <Description>{item.title}</Description>
                                </Row>
                                <Row>
                                    <SmallTitle>Description : </SmallTitle>
                                    <Description>{item.description}</Description>
                                </Row>
                                <Row>
                                    <SmallTitle>ID : </SmallTitle>
                                    <Description>{item._id}</Description>
                                </Row>
                                <Row>
                                    <SmallTitle>Size : </SmallTitle>
                                    <Description>{item.size}</Description>
                                </Row>
                                <Row>
                                    <SmallTitle>Color : </SmallTitle>
                                    <Color color={item.color}/>
                                </Row>
                            </CartDetail>
                            <CartPrice>
                            <Price>{item.price * item.quantity} $</Price>
                            <QuantityWrap>
                                <QuantityButton onClick={handleIncrement}>+</QuantityButton>
                                <Quantity>{item.quantity}</Quantity>
                                <QuantityButton onClick={handleDecrement}>-</QuantityButton>
                            </QuantityWrap>

                        </CartPrice>
                        </CartItem>
                    ))}


                </CartWrapper>


                <SummaryWarpper>
                    <Title>
                        Payment Summary
                    </Title>
                    <Summary>
                        <PaymentItem>
                            <Text>Payment Summary</Text>
                            <ItemPrice>150 $</ItemPrice>
                        </PaymentItem>
                        <PaymentItem>
                            <Text>Additional Service</Text>
                            <ItemPrice>10 $</ItemPrice>
                        </PaymentItem>
                        <PaymentItem>
                            <CouponInput placeholder="COUPON CODE">

                            </CouponInput>
                            <CouponButton>
                                APPLY
                            </CouponButton>
                        </PaymentItem>
                        <PaymentItem>
                            <Text>Total Amount</Text>
                            <ItemPrice>160 $</ItemPrice>
                        </PaymentItem>

                    </Summary>


                </SummaryWarpper>

            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart;