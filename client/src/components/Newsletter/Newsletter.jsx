import {Send} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile, tablet, desktop } from '../../responsive';


const Container = styled.div`
   height: 40rem;
   background-color: #fcf5f5;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   @media screen and (max-width:640px) {
      height:30rem;
      padding:10px;
      text-align: center;
   }
`
const Title = styled.h1`
   font-size: 70px;
   margin-bottom: 20px;

   @media screen and (max-width:640px) {
      font-size: 50px;
   }
`

const Description = styled.div`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 20px;
   @media screen and (max-width:640px) {
      font-size: 18px;
   }

`

const InputContainer = styled.div`
   width: 50%;
   height: 40px;
   background-color: white;
   display: flex;
   justify-content: space-between;
   border: 1px solid lightgray;
   ${mobile({width:"90%"})}
`

const Input = styled.input`
   border:none;
   outline:none;
   flex:10;
   padding-left: 20px;
`

const Button = styled.button`
   flex:1;
   border: none;
   background-color: #ced9ea;
   color:white;
`



const Newsletter = () => {
   return (
      <Container>
         <Title>Newsletter</Title>
         <Description>Get ahead of the curve and stay updated on the latest trends.</Description>
         <InputContainer>
            <Input placeholder='Your Email Address' />
            <Button>
               <Send/>
            </Button>
         </InputContainer>
      </Container>
   )
}

export default Newsletter
