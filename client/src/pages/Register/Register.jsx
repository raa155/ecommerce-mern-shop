import React from 'react'
import styled from 'styled-components';
import { mobile, tablet, desktop } from '../../responsive';

const Container = styled.div`
   width:100vw;
   height:100vh;
   background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80") no-repeat center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Wrapper = styled.div`
   width:40%;
   padding: 20px;
   background-color: white;
   ${tablet({width:'70%'})}
`
const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;

`
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
`
const Input = styled.input`
   flex:1;
   min-width:40%;
   margin:20px 10px 0px 0px;
   padding:10px;
   outline:none;
`
const Agreement = styled.p`
   font-size: 12px;
   margin: 20px 0;
   width: 100%;
`
const Button = styled.button`
   width: 40%;
   border:none;
   padding:15px 20px;
   background-color: teal;
   color:white;
   cursor: pointer;

`
const Register = () => {
   return (
      <Container>
         <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
               <Input placeholder="First Name" />
               <Input placeholder="Last Name" />
               <Input placeholder="Email" type="email" />
               <Input placeholder="Username" />
               <Input placeholder="Password" type="password" />
               <Input placeholder="Confirm Password" type="password" />
               <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy Policy</b></Agreement>
               <Button>Register</Button>
            </Form>
         </Wrapper>
      </Container>
   )
}

export default Register;
