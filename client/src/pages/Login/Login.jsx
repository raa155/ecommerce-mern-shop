import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width:100vw;
   height:100vh;
   background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80") no-repeat center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Wrapper = styled.div`
   max-width:30rem;
   width:30%;
   padding: 30px;
   background-color: white;
   border-radius: 1rem;
`
const Title = styled.h1`
   font-size: 24px;
   font-weight: 300;
   margin-bottom: 10px;

`
const Form = styled.form`
   display: flex;
   flex-direction: column;
`
const Input = styled.input`
   flex:1;
   min-width:40%;
   margin:10px 0px;
   padding:10px;
   outline:none;
`
const Button = styled.button`
   width: 100%;
   border:none;
   padding:15px 20px;
   background-color: teal;
   color:white;
   cursor: pointer;
   margin:10px 0;

`
const LinkContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 10px;
`
const Link = styled.a`
   cursor: pointer;
   font-size: 12px;
   text-decoration: underline;
`

const Login = () => {
   return (
      <Container>
      <Wrapper>
         <Title>Sign In To Your Account</Title>
         <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
               <Button>Login</Button>
               <LinkContainer>
                  <Link>Forgot password?</Link>
                  <Link>Create a new Account</Link>
               </LinkContainer>
         </Form>
      </Wrapper>
   </Container>
   )
}

export default Login;
