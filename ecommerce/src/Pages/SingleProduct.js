import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

import styled from "styled-components";

const Container = styled.div`
    `

const Wrapper = styled.div`
    width : 70% ;
    padding-top : 100px ;
    height : 100vh ;
    margin : auto ;
    display : flex ;
    flex-direction : row ;
`

const ImageContainer = styled.div`
    flex : 1 ;
`

const Image = styled.img`
    height : 70vh ;`

const InfoContainer = styled.div`
    flex  : 1 ;
`

const Title = styled.h1``

const Description = styled.p``

const SmallTitle = styled.h3``

const ButtonContainer = styled.div``

const SizeButton = styled.button`
    width : 32px ;
    height : 32px ;
    margin : 0 5px ;
    text-align : center ;
`

const BuyContainer = styled.div`
    margin-top : 50px ;
`

const Favorite = styled.button``

const CartButton = styled.button``

const SingleProduct = () => {
    return (
        <Container>
            <Navbar />

            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.pexels.com/photos/7246441/pexels-photo-7246441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        Silk Dress
                    </Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae congue. Ipsum consequat nisl vel pretium lectus quam id leo in.
                    </Description>
                    <SmallTitle>
                        Select Size
                    </SmallTitle>
                    <ButtonContainer>
                        <SizeButton style={{borderRadius : "50%"}}>XS</SizeButton>
                        <SizeButton style={{borderRadius : "100%"}}> S</SizeButton>
                        <SizeButton style={{borderRadius : "50%"}}> M</SizeButton>
                        <SizeButton style={{borderRadius : "50%"}}>L</SizeButton>
                        <SizeButton style={{borderRadius : "50%"}}>XL</SizeButton>
                    </ButtonContainer>
                    <BuyContainer>
                        <Favorite>Wishlist</Favorite>
                        <CartButton>Add to Cart</CartButton>
                    </BuyContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SingleProduct;