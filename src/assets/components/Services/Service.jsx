import React from 'react';
import './Service.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";

const Service = () => {
    return (
        <div>
            <section id='service'>
                <div className="container">
                    <div className="service_contains">
                        <h4 className='service_title'>What I Do?</h4>
                        <p className='service_pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                        ipsum sit nibh amet egestas tellus.</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 ">
                            <div className="service_card">
                                <span className='logo'><IoCodeSlashOutline /></span>
                                <h4>Web Design</h4>
                                <a href="#">learn more <span><FaArrowRightLong /></span> </a>
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <div className="service_card">
                                <span className='logo'><IoCodeSlashOutline /></span>
                                <h4>Web Development</h4>
                                <a href="#">learn more <span><FaArrowRightLong /></span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;