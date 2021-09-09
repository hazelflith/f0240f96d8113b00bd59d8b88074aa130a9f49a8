import React from 'react'
import styled from 'styled-components'; 
import { CardTitle } from 'reactstrap';
import IconC from './IconPlace'



const CartDesc = styled.div`

`
const CardItem = styled.div`

`

const CardStatus = styled.div`
    font-weight: 200;
    font-size: 14px;
`

const CartIcoContainer = styled.div`
    position: fixed;
    right: 18px;
    font-size: 30px;
`
const CartIcon = styled(IconC)`
    margin: 0 12px; 

`
const ArrowIcon = styled(IconC)`
    margin: 1px 4px;
    font-size: 20px !important;
`

const ModalCartContainerWrap = styled.div`
    display: flex;
    flex-direction: row;

`

const ModalCartContainer = styled.div`
    position: fixed;
    z-index: 20;
    background: #a23530;
    bottom: 16px;
    right: 8px;
    left: 8px;
    color: #fff;
    text-align: left;
    border-radius: 4px;
    padding:8px 16px;
    flex-direction: row;
`

const ModalChart = ({
   text
}) =>{
    return (
       <ModalCartContainer>
           <ModalCartContainerWrap>
                <CartDesc>
                        <CardItem>5 Items | Rp. 125,000</CardItem>
                        <CardStatus>Termasuk ongkos kirim</CardStatus>
                </CartDesc>
                <CartIcoContainer>
                        <CartIcon className='fa fa-shopping-cart'></CartIcon>
                        <ArrowIcon className='fa fa-chevron-right'></ArrowIcon>
                </CartIcoContainer>
           </ModalCartContainerWrap>
       </ModalCartContainer>
    )
}

export default  ModalChart;