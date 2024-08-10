import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Helmet} from "react-helmet";
import Banner from '../sub_components/Banner/Banner';
import './Home.css';
import About from '../About/About';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Navbar />


           <Banner />

           
           <Footer />
        </div>
    );
};

export default Home;