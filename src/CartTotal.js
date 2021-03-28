import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CartTotal({getTotalPrice, getCount}) {


    return (
        <Container>
            <SubTotal>Subtotal ({getCount} items): 
            <NumberFormat value={getTotalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </SubTotal>
            <CheckoutButton>Proceed To Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    
    flex: 0.3;
    padding : 20px;
    background-color : white;
`

const SubTotal = styled.h2`

`

const CheckoutButton = styled.button`
    background-color : #f0c14b;
    width : 100%;
    padding : 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    cursor : pointer;
    font-size : 16px;
    :hover{
        background: #ddb347;
    }
`
