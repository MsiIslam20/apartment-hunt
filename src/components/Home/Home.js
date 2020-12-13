import React from 'react';
import Header from '../Header/Header';
import HotelList from '../HotelList/HotelList';
import Nav from '../Nav/Nav';

const Home = () => {
    return (
        <>
            <Nav></Nav>
            <Header></Header>
            <HotelList></HotelList>
        </>
    );
};

export default Home;