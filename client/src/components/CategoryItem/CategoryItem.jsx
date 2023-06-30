import React from 'react';
import styled from 'styled-components';
import { mobile, tablet, desktop } from '../../responsive';
import { Link } from 'react-router-dom';


const Container = styled.div`
   flex:1;
   height:70vh;
   position:relative;
`
const Image = styled.img`
   width:100%;
   height:100%;
   object-fit: cover;
   object-position: center;
   ${mobile({height:'30vh', objectPosition:'50% 30%'})}
`
const Info = styled.div`
   position:absolute;
   top:0;
   left:0;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15));
`
const Title = styled.h1`
   color:white;
   margin-bottom: 20px;
`
const Button = styled.button`
   border: none;
   padding: 10px;
   background-color: white;
   color:grey;
   cursor: pointer;
   font-weight: 600;
`

const CategoryItem = ({item}) => {
   return (
      <Container>
         <Image src={item.img} />
         <Info>
            <Title>{item.title}</Title>
            <Link to={`/products/${item.title}`}><Button>{item.buttonText}</Button></Link>
         </Info>
      </Container>
   )
}

export default CategoryItem;
