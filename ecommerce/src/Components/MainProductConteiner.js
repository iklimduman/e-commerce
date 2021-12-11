import { Products } from "../Data";
import React from "react";
import styled from "styled-components";
import MainProduct from "./MainProduct";

const Container = styled.div`` ;

const MainProductContainer = () => {
    return (
        <Container>
        {Products.map((item)=>(
            <MainProduct item={item} key={item.id} />
        ))}

        </Container>
    )
};

export default MainProductContainer ;