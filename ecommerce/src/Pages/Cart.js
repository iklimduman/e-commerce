import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../RequestMethods";
import Newsletter from "../Components/Newsletter";
import { addProduct, removeProduct } from "../Redux/cartRedux";
import { publicRequest } from "../RequestMethods";
import CartItemView from "../Components/CartItemView";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``

const BaseComponentShadow = styled.div`
    -webkit-box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
    -moz-box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
    box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
    border-radius: 10px ;
`

const Wrapper = styled.div`
    font-family: 'Didact Gothic', sans-serif;
    display : flex ;
    flex-direction : row ;
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

const CartWrapper = styled.div`
    flex : 3 ;
    display : flex ;
    flex-direction : column ;
    top : 0 ;
`

const SummaryWarpper = styled.div`
    flex : 1 ;
`

const Summary = styled(BaseComponentShadow)`
    box-sizing: padding-box ;
    padding : 20px 0 ;
    margin-top : 35px ;
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

const CheckOutButton = styled.button`
    width : 100% ;
    padding : 5px 15px ;
    background-color : #590876;
    color : white ;
    border : none ;
    border-radius : 3px ;
    font-size : 17px ;
    cursor : pointer ;
`

const Cart = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const cart = useSelector(state => state.cart);

    console.log("Cart") ;
    console.log(cart.products) ;
    var count = {} ;
    const navigate = useNavigate();

    cart.products.forEach(element => {
        count[element._id] = (count[element._id] || 0) + 1 ;
    });

    console.log(count) ;

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                })
                navigate("/success", {
                    data: res.data
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate])

    return (
        <Container>
            <Navbar />
            <Wrapper>

                <CartWrapper>
                    <Title style={{ marginBottom: "20px" }}>
                        Order
                    </Title>
                    {cart.products.map(item => (
                        <CartItemView
                        img={item.img} 
                        title={item.title}
                        description={item.description}
                        id={item._id}
                        size={item.size}
                        color={item.color}
                        quantity={item.quantity}
                        price={item.price} /> 
                    ))}
                </CartWrapper>


                <SummaryWarpper>
                    <Title>
                        Payment Summary
                    </Title>
                    <Summary>
                        <PaymentItem>
                            <Text>Payment Summary</Text>
                            <ItemPrice>{cart.total} $</ItemPrice>
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
                            <ItemPrice>{cart.total + 10} $</ItemPrice>
                        </PaymentItem>

                        <StripeCheckout
                            name='Lotus-Shop'
                            image='./logo.png'
                            billingAddress
                            shippingAddress
                            description={`Your total is $ ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}>
                            <CheckOutButton>CHECKOUT NOW</CheckOutButton>
                        </StripeCheckout>

                    </Summary>


                </SummaryWarpper>

            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Cart;