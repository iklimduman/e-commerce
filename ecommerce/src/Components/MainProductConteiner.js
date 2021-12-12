import { Products } from "../Data";
import React from "react";
import styled from "styled-components";
import MainProduct from "./MainProduct";
import Title from "./Title";
import Carousel from "react-elastic-carousel";

const TitleInput = [
    {
        text : "Popular This Month" 
    }
    
]

const Container = styled.div`
    display : flex ;
    padding : 20px ;
    overflow-x : hidden ;
`;

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

const MainProductContainer = () => {
    return (
        <div>
        <Title item={TitleInput[0]}/>
            <Carousel breakPoints={breakPoints}>
                {Products.map((item) => (
                    <MainProduct item={item} key={item.id} />
                ))}

            </Carousel>

        </div>

    )
};

export default MainProductContainer;