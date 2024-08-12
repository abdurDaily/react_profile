import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Helmet} from "react-helmet";
import './About.css';
import Footer from '../Footer/Footer';
import Btn from '../sub_components/Button/Btn';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Navbar />


            <Btn href="123">
                Download Now 2
            </Btn>


            


            <Footer />
        </div>
    );
};

export default About;