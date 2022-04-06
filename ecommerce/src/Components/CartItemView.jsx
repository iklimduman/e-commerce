import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../RequestMethods";
import { addProduct, resetChart, removeProduct } from "../Redux/cartRedux";

const BaseComponentShadow = styled.div`
    -webkit-box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
    -moz-box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
    box-shadow: -1px 2px 16px -6px rgba(17,1,38,0.76);
    border-radius: 10px ;
`

const CartItem = styled(BaseComponentShadow)`
    padding : 20px ;
    display : flex ;
    justify-content : center ;
    align-items : center ;
    flex-direction : row ;
    margin: 15px ;
    height : 20vh ;
`

const CartImage = styled.div`
    flex : 1 ;
    height : 90% ;
    display : flex ;
    align-items : center ;
    justify-content : center ;
`

const Image = styled.img`
    width : 100% ;
    height: 100% ;
    object-fit: cover ;
`

const CartDetail = styled.div`
    flex : 4 ;
    display : flex ;
    flex-direction : column ;
    padding : 20px;
    box-sizing: content-box ;
`
const Row = styled.div`
    flex : 1 ;
    display : flex ;
    align-items :center ;
    flex-direction :row ;
`
const SmallTitle = styled.span`
    line-height : 30px ;
    font-size : 19px ;
    font-weight : 700 ;
    margin-right : 10px ;
`

const Description = styled.span`
    font-size : 17px ;
    font-weight : 550 ;
`
const Color = styled.div`
    width : 30px ;
    height : 30px ;
    background-color : ${props => props.color} ;
    border-radius: 50% ;
    border : 1px solid black ;
`

const CartPrice = styled.div`
    flex : 1 ;
    display : flex ;
    flex-direction : column ;
    align-items: center ;
    justify-content: space-around ;
`
const Price = styled.span`
    flex : 1 ;
    font-size : 19px ;
    font-weight : 700 ;
    color : #39024D ;
`
const QuantityWrap = styled.div`
    flex : 1 ;
    display : flex ;
    flex-direction : row ;
`

const Quantity = styled.div`
    font-size : 20px ;
    font-weight : 700 ;
    color : #590876 ;
    margin : 0 15px ;`

const QuantityButton = styled.button`
    width : 33px ;
    height : 33px ;
    color : #590876  ;
    font-size : 18px ;
    font-weight : 700 ;
    border : 1.5px solid #590876  ;
    background-color : transparent ;
    border-radius : 50% ;
    cursor : pointer ;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.19);
`

const CartItemView = (props) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [quantity, setQuantity] = useState(props.quantity);
    const [product, setProduct] = useState({});
    const [productid, setProductID] = useState(props.id);
    const [price, setPrice] = useState(props.price);
    const [color, setColor] = useState(props.color);
    const [size, setSize] = useState(props.size);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + productid);
                setProduct(res.data);
            }
            catch (err) {
                console.log(err);
            }
        }
        getProduct();

    }, [productid])

    const handleIncrement = () => {

        dispatch(addProduct({
            ...product,
            color,
            size,
            productid,
            quantity : 1
        }));

        setQuantity(quantity + 1);
    }

    const handleDecrement = () => {
        
        dispatch(removeProduct({
            ...product,
            color,
            size,
            productid,
            quantity : 1
        }))

        quantity >= 1 && setQuantity(quantity - 1);

    }

    return (
        <div>
            {quantity != 0 ?
                <CartItem>
                    <CartImage>
                        <Image src={props.img} />
                    </CartImage>
                    <CartDetail>
                        <Row>
                            <SmallTitle>Product : </SmallTitle>
                            <Description>{props.title}</Description>
                        </Row>
                        <Row>
                            <SmallTitle>Description : </SmallTitle>
                            <Description>{props.description}</Description>
                        </Row>
                        <Row>
                            <SmallTitle>Size : </SmallTitle>
                            <Description>{size}</Description>
                        </Row>
                        <Row>
                            <SmallTitle>Color : </SmallTitle>
                            <Color color={color} />
                        </Row>
                    </CartDetail>
                    <CartPrice>
                        <Price>{price * quantity} $</Price>
                        <QuantityWrap>
                            <QuantityButton onClick={() => handleIncrement()}>+</QuantityButton>
                            <Quantity>{quantity}</Quantity>
                            <QuantityButton onClick={() => handleDecrement()}>-</QuantityButton>
                        </QuantityWrap>
                    </CartPrice>
                </CartItem>
                : null}
        </div>


    )
}

export default CartItemView;