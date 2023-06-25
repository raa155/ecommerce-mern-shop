import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
const Container = styled.div`

`
const Product = () => {
   return (
      <Container>
         <Navbar />
         <Announcement />
         <Newsletter />
         <Footer />
      </Container>
   )
}

export default Product
