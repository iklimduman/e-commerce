import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

import styled from "styled-components";

const Container = styled.div`
    `

const Wrapper = styled.div`
    width : 70% ;
    margin : auto ;
    display : flex ;
    flex-direction : row ;
`

const ImageContainer = styled.div`
    flex : 1 ;
`

const Image = styled.img``

const InfoContainer = styled.div`
    flex  : 1 ;
`

const Title = styled.h1``

const Description = styled.p``

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
                </InfoContainer>
            </Wrapper>

            <Newsletter />
            <Footer />
        </Container>
    )
}

export default SingleProduct;