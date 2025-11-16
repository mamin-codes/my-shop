import React from 'react';
import TopHeader from './TopHeader';
import MidHeader from './MidHeader';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <MidHeader></MidHeader>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;