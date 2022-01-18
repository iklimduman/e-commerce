import { Description } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Links = ['Home', 'Casual Wear', 'Active Wear', 'On Sale', 'Order Tracking', 'Cart', 'Wishlist', 'My Account', 'Terms'];

const Container = styled.div`
    display : flex ;
    height : 40vh ;
`

const Left = styled.div`
    flex : 1 ;
    padding : 20px ;
`

const Center = styled.div`
    flex : 1 ;
    padding : 20px ;
    height : 40vh ;
    
`

const Right = styled.div`
    flex : 1 ;
    padding : 20px ;
`
const Title = styled.h1``

const Desc = styled.h3``

const SmallTitle = styled.h2``

const SocialContainer = styled.div`
    display : flex ;
    align-items : center ;
    justify-content : center ;
    flex-direction : row ;
`

const ListItem = styled.li`
    margin : 10px ;
    width : 50%
`

const ContactItem = styled.div`
    display : flex ;
    align-items : center ;
    margin : 20px 0px ;
`

const Payment = styled.img`
    height : 45px ;
    margin : 0 10px 0 0;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Title>
                    LOTUS
                </Title>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Desc>
                <SocialContainer>
                    <button style={{
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}>
                        <FacebookIcon />
                    </button>

                    <button style={{
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}>
                        <TwitterIcon />
                    </button>

                    <button style={{
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}>
                        <InstagramIcon />
                    </button>

                </SocialContainer>

            </Left>
            <Center>
                <SmallTitle>
                    Useful Links
                </SmallTitle>
                <div style={{columns:2}}>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                        {Links.map(link => <ListItem>{link}</ListItem>)}
                    </ul>
                </div>
            </Center>
            <Right>
            <SmallTitle>
                Contact
            </SmallTitle>
            <ContactItem>
                <LocationOnIcon /> 42 Wallaby Way
            </ContactItem>
            <ContactItem>
                <MailIcon /> contact@lotus.com
            </ContactItem>
            <ContactItem>
                <LocalPhoneIcon /> +1 234 56 78
            </ContactItem>

            <Payment src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MasterCard_logo.png/800px-MasterCard_logo.png" />
            <Payment src="https://toppng.com/uploads/preview/visa-115507187089o8siwhhtf.png" />
            <Payment src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" />

            </Right>

        </Container>
    )
}

export default Footer;