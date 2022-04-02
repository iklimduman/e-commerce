import React from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined } from '@material-ui/icons';
import { ArrowRightOutlined } from '@material-ui/icons';
import myImage from "../Assets/slide-1.jpg";
import { sliderItems } from "../Data";
import { useState } from 'react';
import { Mobile } from '../ResponsiveConstants';


const Container = styled.div`
    margin-top : 2vh ;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${Mobile({ display: "none" })}
`

const Arrow = styled.div`
    position : absolute ;
    z-index : 100 ;
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
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
 
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display : flex ;
    background : ${props => `url(${props.src})`} ;
    background-size: 100% ;
    align-items : center ;
    box-sizing : border-box ;
    padding-right : 5vw ;
`

const InfoContainer = styled.div`
    width : 25vw ;
    height : 50vh ;
    display : flex ;
    flex-direction : column ;
    background-color : rgb(249,196,255,0.5) ;
    margin-left : auto ;
    padding-left : 10vw ;
    box-shadow: 1px 1px #${(props) => props.bg} ;
`

const Info = styled.h1`
    
    font-family: 'Bebas Neue', cursive;
    font-size : 100px ;
    margin-right : 3vw ;
    letter-spacing: 3px;
    text-align : right ;
    color : rgb(255,255,255);
`

const Desc = styled.p`
    margin-right : 3vw ;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    font-family: 'Bebas Neue', cursive;
    text-align : right ;
    color : rgb(255,255,255);

`
const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id} src={item.src}>
                        <InfoContainer>
                            <Info boxshadow={item.bg}>{item.title}</Info>
                            <Desc>{item.desc}</Desc>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>

        </Container>
    )
}

export default Slider
