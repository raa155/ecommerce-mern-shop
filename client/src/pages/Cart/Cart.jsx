// @ts-nocheck
import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile, tablet, desktop } from '../../responsive';



const Container =  styled.div``

const Wrapper = styled.div`
   padding:20px;
   ${mobile({padding:'10px'})}
`
const Title = styled.h1`
   font-weight: 300;
   text-align: center;
`
const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   ${mobile({display:'none'})}
`
const TopButton = styled.button`
   padding: 10px;
   font-weight: 600;
   cursor: pointer;
   border: ${props => props.type === 'filled' && 'none'};
   background-color: ${props => props.type === 'filled' ? 'black' : "transparent"};
   color: ${props => props.type === 'filled' && 'white'};



`
const TopTexts = styled.div`
   ${tablet({ display: 'flex', flexDirection: 'column', gap: '10px' })}

`
const TopText = styled.span`
   text-decoration:underline;
   cursor: pointer;
   margin:0 10px;
`
const Bottom = styled.div`
   display: flex;
   justify-content: space-between;
   ${tablet({flexDirection:'column'})}
`
const Info = styled.div`
   flex:3;
`
const Product = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 10px;
   ${tablet({flexDirection:'column'})}
`
const ProductDetail = styled.div`
   flex:2;
   display: flex;
   ${tablet({flexDirection:'column', alignItems:'center'})}
`
const Image = styled.img`
   width: 200px;
   ${tablet({width:'80%'})}
`
const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   gap:10px;
`
const ProductName = styled.div`

`
const ProductId = styled.div`

`
const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color};

`
const ProductSize = styled.div`

`
const PriceDetail = styled.div`
   flex:1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap:20px;
   ${tablet({flexDirection:'row'})}
`
const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   gap:10px;
   ${tablet({gap:'20px', margin:'20px'})}
`
const ProductAmount = styled.div`
   font-size: 24px;
`
const ProductPrice = styled.div`
   font-size: 30px;
   font-weight: 200;
   background-color: #eee;
   padding: 8px;
   color:#3d3d3d;
   border-radius: 1rem;

`
const Hr = styled.hr`
   background-color: #eee;
   border:none;
   height:1px;
   margin:5px 0;
`
const Summary = styled.div`
   flex:1;
   border:0.5px solid lightgrey;
   border-radius: 10px;
   padding: 20px;
   height: 50vh;
   display: flex;
   flex-direction: column;
   gap:30px;
   ${desktop({ height:'30vh'})}
`
const SummaryTitle = styled.h1`
   font-weight: 200;
   text-transform: uppercase;
`
const SummaryItem = styled.div`
   display: flex;
   justify-content: space-between;
   font-weight: ${props => props.type === "total" && "700"};
   font-size: ${props=>props.type === "total" && "24"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color:white;
   font-weight: 600;
   cursor: pointer;
`

const Cart = () => {
   return (
      <Container>
         <Wrapper>
            <Title>Your Shopping Cart</Title>
            <Top>
               <TopButton>CONTINUE SHOPPING</TopButton>
               <TopTexts>
                  <TopText>Shopping Bag(2)</TopText>
                  <TopText>Your Wishlist(0)</TopText>
               </TopTexts>
               <TopButton type="filled">CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>
               <Info>
                  <Product>
                     <ProductDetail>
                        <Image src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" />
                        <Details>
                           <ProductName><b>Product:</b> Cardigan Sheik Fall</ProductName>
                           <ProductId><b>ID:</b> 9879879873</ProductId>
                           <ProductColor color="black"/>
                           <ProductSize><b>Size:</b> Medium</ProductSize>
                        </Details>
                     </ProductDetail>
                     <PriceDetail>
                        <ProductAmountContainer>
                           <Add style={{cursor:'pointer'}}/>
                              <ProductAmount>2</ProductAmount>
                           <Remove style={{cursor:'pointer'}}/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                     </PriceDetail>
                  </Product>
                  <Hr/>
                  <Product>
                     <ProductDetail>
                        <Image src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                        <Details>
                           <ProductName><b>Product:</b> Fall Collection</ProductName>
                           <ProductId><b>ID:</b> 98798234233</ProductId>
                           <ProductColor color="brown"/>
                           <ProductSize><b>Size:</b> Large</ProductSize>
                        </Details>
                     </ProductDetail>
                     <PriceDetail>
                        <ProductAmountContainer>
                           <Add style={{cursor:'pointer'}} />
                              <ProductAmount>2</ProductAmount>
                           <Remove style={{cursor:'pointer'}}/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 25</ProductPrice>
                     </PriceDetail>
                  </Product>
               </Info>
               <Summary>
                  <SummaryTitle>Order Summary</SummaryTitle>
                  <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>$ 80</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>$ 7.99</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>- $ 7.99</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem type="total">
                     <SummaryItemText>Total</SummaryItemText>
                     <SummaryItemPrice>$ 80.00</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryButton>CHECKOUT NOW</SummaryButton>
               </Summary>
            </Bottom>
         </Wrapper>
      </Container>
   )
}

export default Cart
