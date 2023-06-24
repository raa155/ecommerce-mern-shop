import React from 'react';

// Import Components
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
  return (
    <div className="home">
      <Announcement/>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter/>

    </div>
  )
}

export default Home;
