import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile, tablet, desktop } from '../../responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
   padding:50px;
   display:flex;
   ${tablet({padding:'10px',flexDirection:'column'})}
`

const ImgContainer = styled.div`
   flex:1;
   ${tablet({marginBottom:'1rem'})}
`
const Image = styled.img`
   width:100%;
   height:40rem;
   object-fit: cover;
   ${tablet({height:'20rem'})}

`
const InfoContainer = styled.div`
   flex:1;
   padding:0px 50px;
   ${tablet({padding:'10px'})}
`
const Title = styled.h1`
   font-weight: 200;

`
const Description = styled.p`
   margin:20px 0;

`
const Price = styled.span`
   font-weight: 100;
   font-size: 40px;
`
const FilterContainer = styled.div`
   display: flex;
   width:50%;
   margin:30px 0;
   justify-content: space-between;
   ${tablet({width:'100%'})}
`
const Filter = styled.div`
   display: flex;
   align-items: center;
`
const FilterTitle = styled.span`
   font-size: 20px;
   font-weight: 200;
`

const FilterColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color:${props => props.color};
   margin:0 5px;
   cursor: pointer;
`
const FilterSize = styled.select`
   margin-left: 10px;
   padding:5px 10px;
   border-radius: 10px;
   outline:none;
   cursor: pointer;

`
const FilterSizeOption = styled.option`
   border-bottom:1px solid lightgrey;
   cursor: pointer;
`
const AddContainer = styled.div`
   display: flex;
   align-content: center;
   justify-content: space-between;
   width: 50%;
   ${tablet({width:'100%'})}
`
const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   font-weight: 700;
   gap:5px;
`
const Amount = styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border:1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Button  = styled.button`
   padding: 15px;
   border:2px solid teal;
   background-color: white;
   font-weight: 500;
   cursor: pointer;

   &:hover{
      background-color: #f8f4f4;
   }
`
const Product = () => {
   return (
      <Container>
         <Wrapper>
            <ImgContainer>
               <Image src="https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80"/>
            </ImgContainer>
            <InfoContainer>
               <Title>Demin Jeans</Title>
               <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nesciunt hic nobis, eos totam, cum distinctio vitae facilis reiciendis labore voluptatem modi. Saepe ratione, fuga ut consequatur quas sed repudiandae!</Description>
               <Price>$ 20.00</Price>
               <FilterContainer>
                  <Filter>
                     <FilterTitle>Color</FilterTitle>
                     <FilterColor color="black" />
                     <FilterColor color="darkblue" />
                     <FilterColor color="grey"/>
                  </Filter>
                  <Filter>
                     <FilterTitle>Size</FilterTitle>
                     <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                     </FilterSize>
                  </Filter>
               </FilterContainer>
               <AddContainer>
                  <AmountContainer>
                     <Remove />
                     <Amount>1</Amount>
                     <Add/>
                  </AmountContainer>
                  <Button>ADD TO CART</Button>
               </AddContainer>
            </InfoContainer>
         </Wrapper>
         <Newsletter />
      </Container>
   )
}

export default Product
