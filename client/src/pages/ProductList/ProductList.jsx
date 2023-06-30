import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import { mobile, tablet, desktop } from '../../responsive';

const Container = styled.div`

`
const Title = styled.h1`
   margin:20px;
`
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
`
const Filter = styled.div`
   margin:20px;
   ${tablet({margin:'0px 20px', display:'flex', flexDirection:'column', gap:'10px'})}
`
const FilterText = styled.span`
   font-size: 20px;
   font-weight: 600;
   margin-right:20px;
   ${tablet({margin:'0px'})}
`
const Select = styled.select`
   padding: 10px;
   margin-right:20px;
   ${tablet({margin:'10px 0px'})}
`
const Option = styled.option`
   padding:10px;
`

const ProductList = () => {
   return (
      <Container>
         <Title>Dresses</Title>
         <FilterContainer>
            <Filter>
               <FilterText>Filter Products:</FilterText>
               <Select>
                  <Option disabled selected>Color</Option>
                  <Option>White</Option>
                  <Option>Black</Option>
                  <Option>Red</Option>
                  <Option>Blue</Option>
                  <Option>Yellow</Option>
                  <Option>Green</Option>
               </Select>
               <Select>
                  <Option disabled selected>Size</Option>
                  <Option>XS</Option>
                  <Option>S</Option>
                  <Option>M</Option>
                  <Option>L</Option>
                  <Option>XL</Option>
                  <Option>XXL</Option>
               </Select>
            </Filter>
            <Filter>
               <FilterText>Sort Products:</FilterText>
               <Select>
                  <Option disabled selected>Sort By:</Option>
                  <Option>Trending</Option>
                  <Option>New Arrivals</Option>
                  <Option>Price High to Low</Option>
                  <Option>Price Low to High</Option>
               </Select>
            </Filter>
         </FilterContainer>
         <Products />
         <Newsletter />
      </Container>
   )
}

export default ProductList
