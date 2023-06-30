import React from 'react';
import styled from 'styled-components';
import { Email, Facebook, Instagram, LocalPhone, LocalPhoneOutlined, MailOutline, Pinterest, Room, RoomOutlined, Twitter } from '@mui/icons-material';
import { mobile, tablet, desktop } from '../../responsive';

const Container = styled.div`
   display: flex;

   @media screen and (max-width:1216px) {
      flex-direction: column;
   }
`

const Left = styled.div`
   flex:1;
   display: flex;
   flex-direction: column;
   padding: 20px;
   @media screen and (max-width:1216px) {
      max-width: 50rem;
   }
`;

const Logo = styled.h1`

`;

const Description = styled.p`
   margin: 20px 0px;
`;

const SocialContainer = styled.div`
   display: flex;
   flex-direction: row!important;
   gap:1rem;
`;

const SocialIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius:50%;
   color:white;
   background-color: #${props => props.color};
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;

const Center = styled.div`
   flex:1;
   padding:20px;
   @media screen and (max-width:1216px) {
      max-width: 50rem;
   }

`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
   margin:0;
   padding: 0;
   list-style-type: none;
   display: flex;
   flex-wrap: wrap;
   gap:5px;
   @media screen and (max-width:412px) {
      text-align:center;
   }
`
const ListItem = styled.li`
   width: 46%;
   margin-bottom: .8rem;
   border:1px solid black;
   padding:5px;
   cursor: pointer;
   ${props=>props.type === 'noneVisible' && tablet({display:'none'})}

   @media screen and (max-width:412px) {
      width: 100%;
   }
`

const Right = styled.div`
   flex:1;
   padding:20px;
`;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display: flex;
   align-items: center;
`
const Payment = styled.img`
   width:50%;
`



const Footer = () => {
   return (
      <Container>
         <Left>
            <Logo>WOLFWEARSHEEP</Logo>
            <Description>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ipsum saepe libero sapiente in? Earum molestias quisquam, nisi, numquam sapiente atque consequuntur quasi facere,
               eum sequi fugiat sed possimus aspernatur soluta.
            </Description>
            <SocialContainer>
               <SocialIcon color="3b5999">
                  <Facebook />
               </SocialIcon>
               <SocialIcon color="E4405F">
                  <Instagram />
               </SocialIcon>
               <SocialIcon color="55ACEE">
                  <Twitter />
               </SocialIcon>
               <SocialIcon color="E60023">
                  <Pinterest />
               </SocialIcon>
            </SocialContainer>
         </Left>
         <Center>
            <Title>Navigation</Title>
            <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem type="noneVisible">Mens</ListItem>
               <ListItem type="noneVisible">Womens</ListItem>
               <ListItem type="noneVisible">Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms and Conditions</ListItem>
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem>
               <RoomOutlined style={{marginRight:'10px'}} /> 72 Delaware Avenue Dumont, NJ 07628
            </ContactItem>
            <ContactItem>
               <LocalPhoneOutlined style={{marginRight:'10px'}}/> +1 (123) 456 - 7890
            </ContactItem>
            <ContactItem>
               <MailOutline style={{marginRight:'10px'}}/>  info@wolfwearsheep.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
         </Right>
      </Container>
   )
}

export default Footer
