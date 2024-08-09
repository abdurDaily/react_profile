import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Helmet} from "react-helmet";
import Banner from '../sub_components/Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home..</title>
            </Helmet>

            <Navbar />


           <Banner />
        </div>
    );
};

export default Home;