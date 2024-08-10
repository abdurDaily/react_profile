import React from 'react';
import Navbar from '../Navbar/Navbar';
import {Helmet} from "react-helmet";
import './About.css';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Navbar />


            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <h2>About Me</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione unde iste delectus veritatis recusandae, aspernatur cumque quidem! Animi voluptate, cum delectus nam quod porro voluptatum repudiandae! Voluptate magnam at ratione, explicabo eligendi voluptatum harum. Doloribus soluta aut adipisci veniam harum ducimus laboriosam nobis cum praesentium ad. Ducimus facilis commodi unde?</p>

                            <h5>What is my skill level?</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit
                            nibh amet egestas tellus.</p>
                            <h1>Progress bar....</h1>
                            <a href="#">See More..</a>
                        </div>
                        <div className="col-xl-5">
                            <h1>IMAGE</h1>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </div>
    );
};

export default About;