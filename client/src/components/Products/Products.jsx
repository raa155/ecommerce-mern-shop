import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../../data';
import Product from '../Product/Product';
const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   gap:5px;
   padding:20px;
`

const Products = () => {
   return (
      <Container>
         {
            popularProducts.map(item => (
               <Product item={item} key={item.id} />
            ))
         }
      </Container>
   )
}

export default Products
