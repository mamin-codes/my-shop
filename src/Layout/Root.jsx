import React from 'react';
import Header from '../Components/Shared/Header/Header';
import { Outlet } from 'react-router'; // Fixed import
import Footer from '../Components/Shared/Footer';

const Root = () => {
    return (
        <div className="w-full max-w-[100vw] overflow-x-hidden">
            <Header></Header>
            <div className="w-full overflow-x-hidden">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;