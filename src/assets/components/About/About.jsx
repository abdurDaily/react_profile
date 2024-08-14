import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Helmet} from "react-helmet";
import './About.css';
import Footer from '../Footer/Footer';
import Btn from '../sub_components/Button/Btn';
import Props from '../sub_components/Props/Props';

const About = () => {

    let test = () => {
        alert('this is for about page..');
    }
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Navbar />


            <Btn href="123">
                Download Now 2
            </Btn>


            <Props onClick={test}>About Props</Props>




            


            <Footer />
        </div>
    );
};

export default About;