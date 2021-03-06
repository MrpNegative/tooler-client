import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Authentication/firebase.init';
import Loading from '../Shared/Loading';
import Banner from './Banner';
import BuisnessSummary from './BuisnessSummary';
import ContactUs from './ContactUs';
import HomeReview from './HomeReview';
import Introduction from './Introduction';
import OurTools from './OurTools';

const Home = () => {
    const [user, loaing] = useAuthState(auth)
    if(loaing){
        return <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <BuisnessSummary></BuisnessSummary>
            <OurTools></OurTools>
            <Introduction></Introduction>
            <HomeReview></HomeReview>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;