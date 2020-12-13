import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HotelList from '../HotelList/HotelList';
import Nav from '../Nav/Nav';
import Service from '../Services/Service';

const Home = () => {
    return (
        <>
            <Nav></Nav>
            <Header></Header>
            <HotelList></HotelList>
            <Service></Service>
            <Footer></Footer>
        </>
    );
};

export default Home;