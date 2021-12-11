import { Products } from "../Data";
import React from "react";
import styled from "styled-components";
import MainProduct from "./MainProduct";
import Title from "./Title";

const TitleInput = [
    {
        text : "Popular This Month" 
    }
    
]

const Container = styled.div``;

const MainProductContainer = () => {
    return (
        <div>
        <Title item={TitleInput[0]}/>
            <Container>
                {Products.map((item) => (
                    <MainProduct item={item} key={item.id} />
                ))}

            </Container>

        </div>

    )
};

export default MainProductContainer;