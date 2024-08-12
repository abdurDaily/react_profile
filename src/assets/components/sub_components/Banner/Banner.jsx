import React from 'react';
import './Banner.css';
import Btn from '../Button/Btn';
import Social from '../Social_Icons/Social';


const Banner = () => {
    return (
        <>
            <section id='banner'>
                <div className="container">
                    <div className="row mx-0">
                        <div className="col-lg-8 mx-auto">
                            <div className="row">
                                <div className="col-xl-4 text-center banner_img">
                                    <img src="public/images/Abdur/abdurDaily.png" alt="" />
                                </div>
                                <div className="col-xl-8 banner_details ">
                                    <h4>Engr. Md. Abdur Rahman</h4>
                                    <span>Faculty of Web & Software, Creative IT Institute, Bangladesh</span>

                                    <p>Welcome to my website! I’m  a passionate full-stack developer with a deep love for coding and teaching. Currently, I’m a faculty member in the Web and Software department at Creative IT Institute, where I help aspiring developers build their futures. My expertise spans a range of cutting-edge technologies, including HTML, CSS, JavaScript, Bootstrap, ReactJS, jQuery, PHP, and Laravel. With a strong focus on delivering practical, industry-relevant knowledge, I’m dedicated to guiding my students toward success in the ever-evolving world of web development.</p>

                                    <Social />
                                    <Btn />
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>

        </>
    );
};

export default Banner;