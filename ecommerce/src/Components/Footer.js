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
    height : auto ;
    padding-bottom : 50px ;
`

const Left = styled.div`
    flex : 1 ;
    padding : 20px ;
`

const Center = styled.div`
    flex : 1 ;
    padding : 20px ;
    height : auto ;
    
`

const Right = styled.div`
    flex : 1 ;
    padding : 20px ;
`
const Title = styled.h1``

const Desc = styled.span`
    font-family: 'Nunito Sans',sans-serif;
    font-size: 1.2em;
    margin-bottom: 20px;`

const SmallTitle = styled.h2``

const SocialContainer = styled.div`
    margin : 10px 
`

const ListItem = styled.li`
    margin : 10px ;
    width : 50% ;
    font-family: 'Nunito Sans',sans-serif;
    font-size: 1.1em;
`

const ContactItem = styled.div`
    display : flex ;
    align-items : center ;
    margin : 20px 0px ;
    font-family: 'Nunito Sans',sans-serif;
    font-size: 1.1em;
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
                        border: '1px solid black',
                        borderRadius : '5px',
                        backgroundColor : '#3D4780'
                    }}>
                        <FacebookIcon style={{color : 'white',fontSize:"30px"}} />
                    </button>

                    <button style={{
                        border: '1px solid black',
                        borderRadius : '5px',
                        backgroundColor : '#00FFFB',
                        margin : '10px'
                    }}>
                        <TwitterIcon style={{color : 'white',fontSize:"30px"}}/>
                    </button>

                    <button style={{
                        backgroundColor: '#B900FF',
                        border: '1px solid black',
                        borderRadius : '5px',
                    }}>
                        <InstagramIcon style={{color:'white',fontSize:"30px"}}/>
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
                <LocationOnIcon style={{marginRight : '5px'}}/> 42 Wallaby Way,Sydney
            </ContactItem>
            <ContactItem>
                <MailIcon style={{marginRight : '5px'}}/> contact@lotus.com
            </ContactItem>
            <ContactItem>
                <LocalPhoneIcon style={{marginRight : '5px'}}/> +1 234 56 78
            </ContactItem>

            <Payment src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MasterCard_logo.png/800px-MasterCard_logo.png" />
            <Payment src="https://toppng.com/uploads/preview/visa-115507187089o8siwhhtf.png" />
            <Payment src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" />

            </Right>

        </Container>
    )
}

export default Footer;