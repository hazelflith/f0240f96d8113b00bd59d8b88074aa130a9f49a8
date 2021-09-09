import React from 'react'
import styled from 'styled-components'; 


const DateContainer = styled.div`
    display: flex;
    padding:18px 0 ;
`

const DateText = styled.div`
    font-size:12px;
    font-weight:600;
    color: #424749;
    flex-direction:row;
`

 const Date = ({
   text
}) =>{
    return (
       <DateContainer>
           <DateText>Kamis, 25 januari 2020</DateText>
       </DateContainer>
    )
}

export default  Date;