import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Helmet} from "react-helmet";
import './About.css';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Navbar />
            <h1 style={{ background:"#F5F8FC" }}>this is about page...</h1>
        </div>
    );
};

export default About;