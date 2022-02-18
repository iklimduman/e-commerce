import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout';

import styled from "styled-components";
import axios from "axios";

const Container = styled.div``

const PaymentButton = styled.button``

const KEY = "pk_test_51KTnoHGspQcUdK7Etqe4JxmiTS1ykUICfbo5Gj0ScZQKgPCRIQ1n3t0Ne3c9blIhrUU7wtTWU823muOzpr0p5aZu00j28jxe7N";


const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);


    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
            }
            catch (err) {
                console.log(err);
            }
        };
        if (stripeToken) {
            makeRequest();
        }

    }, [stripeToken])


    return (
        <Container>
            <StripeCheckout
                name='Lotus-Shop'
                image='./logo.png'
                billingAddress
                shippingAddress
                description='Your total is $20'
                amount={2000}
                token={onToken}
                stripeKey={KEY}>
                <PaymentButton>PAY NOW</PaymentButton>
            </StripeCheckout>

        </Container>
    )
}

export default Pay;