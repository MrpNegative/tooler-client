import React from 'react';
import Banner from './Banner';
import BuisnessSummary from './BuisnessSummary';
import Introduction from './Introduction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BuisnessSummary></BuisnessSummary>
            <Introduction></Introduction>
        </div>
    );
};

export default Home;