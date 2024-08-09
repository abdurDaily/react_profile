import React from 'react';
import './Banner.css';
import Btn from '../Button/Btn';
import { MdFacebook } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaWikipediaW } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Banner = () => {
    return (
        <>
            <section id='banner'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="row">
                                <div className="col-xl-4 text-center ">
                                    <img src="public/images/abdur_daily.png" alt="" />
                                </div>
                                <div className="col-xl-7 banner_details ">
                                    <h4>Engr. Md. Abdur Rahman</h4>
                                    <span>Full Stack Web Developer</span>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt quia quam exercitationem deserunt soluta, accusamus sequi eaque quidem ipsam autem quod. Molestiae cumque harum fugiat ipsum! Repellat, cupiditate labore?</p>

                                    <div className="icons">
                                        <span><a href="#"><MdFacebook /></a></span>
                                        <span><a href="#"><FaLinkedinIn /></a></span>
                                        <span><a href="#"><IoLogoTwitter /></a></span>
                                        <span><a href="#"><FaWikipediaW /></a></span>
                                        <span><a href="#"><FaYoutube /></a></span>
                                    </div>
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