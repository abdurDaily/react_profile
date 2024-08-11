import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Helmet} from "react-helmet";
import Banner from '../sub_components/Banner/Banner';
import './Home.css';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Content from '../About/Content/Content';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navbar />
            <Banner />
            <Content />
            <Service />
           <Footer />
        </div>
    );
};

export default Home;