import React from 'react';
import Hero from './HomeComponents/Hero';
import HomeCategory from './HomeComponents/HomeCategory';
import PopularProducts from './HomeComponents/PopularProducts/PopularProducts';
import LatestExclusive from './HomeComponents/LatestExclusive';
import NewProducts from './HomeComponents/NewProducts';
import Collection from './HomeComponents/Collection';
import Support from './HomeComponents/Support';
import ResponsiveDemo from '../../ResponsiveDemo';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeCategory></HomeCategory>
            <PopularProducts></PopularProducts>
            <LatestExclusive></LatestExclusive>
            <NewProducts></NewProducts>
            <Collection></Collection>
            <Support></Support>
           {/*  <ResponsiveDemo></ResponsiveDemo> */}
        </div>
    );
};

export default Home;