import React from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined } from '@material-ui/icons';
import { ArrowRightOutlined } from '@material-ui/icons';
import myImage from "../Assets/slide-1.jpg";


const Container = styled.div`
    margin-top : 2vh ;
    width : 100% ;
    height : 98vh ;
    display : flex ;
    position : relative ;
`

const Arrow = styled.div`
    width : 50px ;
    height : 50px ;
    border-radius : 50% ;
    background-color : #EEEEEE ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
    cursor : pointer ;
    position : absolute ;
    top : 0 ;
    bottom : 0 ;
    left : ${props => props.direction === "left" && "10px"} ;
    right : ${props => props.direction === "right" && "10px"};
    margin : auto ;
    opacity : 0.5 ;

`

const Wrapper = styled.div`
    width : 100% ;
    height : 100% ;
    background-image : url(${myImage});
    background-repeat : no-repeat ;
    background-size : cover ;
    display : flex ;
`

const Slide = styled.div`
    display : flex ;
    align-items : center ;
`

const InfoContainer = styled.div`
    flex : 1;
    display : flex ;
    align-items : center ;
    justify-content : center ;
`

const Info = styled.div`
    width : 70% ;
    height : 70% ;
    font-family: 'Bebas Neue', cursive;
    font-size : 100px ;
    line-height : 5px ;
    padding : 50px  ;
    text-align : right ;
    background-color : rgb(249,196,255,0.5) ;
    position : relative ;
`


const ImageContainer = styled.div`
    flex : 1 ;
`


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
                <Wrapper>
                    <InfoContainer>
                        <Info>
                            <p style={{ color: "#FEF9FF" }}>New</p>
                            <p style={{ color: "#FEF9FF" }}>Collection</p>
                            <p style={{ color: "#FEF9FF" }}>Out</p>
                            <div style={{ fontSize: "70px", position: "absolute", right: "50px", bottom: "0px", color: "#FEF9FF" }}>
                                <p>Spring /</p>
                                <p>Summer</p>
                                <p>'21</p>
                            </div>
                        </Info>
                    </InfoContainer>
                    <ImageContainer></ImageContainer>
                </Wrapper>

            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>

        </Container>
    )
}

export default Slider
