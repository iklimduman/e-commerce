import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

import styled from "styled-components";

const Container = styled.div``

const PaymentButton = styled.button``

const KEY = "pk_test_51KTnoHGspQcUdK7Etqe4JxmiTS1ykUICfbo5Gj0ScZQKgPCRIQ1n3t0Ne3c9blIhrUU7wtTWU823muOzpr0p5aZu00j28jxe7N" ;


const Pay = () => {

    const onToken = (token) => {
        console.log(token)
    }
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

export default Pay ;