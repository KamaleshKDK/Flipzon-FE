import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Newsletter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider';
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default HomePage