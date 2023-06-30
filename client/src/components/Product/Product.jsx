import React from 'react';
import styled from 'styled-components';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const Container = styled.div`
   flex:1;
   min-width: 280px;
   height: 350px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #f5fbfd;
   position:relative;
`

const Circle = styled.div`
   background-color: white;
   width:260px;
   height:260px;
   border-radius: 50%;
   position:absolute;
`
const Image = styled.img`
   height:220px;
   width: 220px;
   border-radius: 50%;
   object-fit: cover;
   z-index: 2;
`
const Info = styled.div`
   opacity: 0;
   width:100%;
   height:100%;
   position:absolute;
   top:0;
   left:0;
   z-index: 3;
   background-color: rgba(0,0,0,0.2);
   display: flex;
   align-items: center;
   justify-content: center;
   gap:10px;
   transition: all 500ms ease;
   cursor: pointer;

   &:hover{
      opacity: 1;
   }
`

const Icon = styled.div`
   width: 40px;
   height:40px;
   border-radius: 50%;
   background-color: rgba(255,255,255, 0.3);
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 500ms ease;
   &:hover{
      background-color: #e9f5f5;
      transform: scale(1.1);
   }

`


const Product = ({item}) => {
   return (
      <Container>
         <Circle />
         <Image src={item.img} />
         <Info>
            <Icon>
               <ShoppingCartOutlined/>
            </Icon>
            <Icon>
               <Link className="link" to={`/product/1`}><SearchOutlined/></Link>
            </Icon>
            <Icon>
               <FavoriteBorderOutlined/>
            </Icon>
         </Info>
      </Container>
   )
}

export default Product
