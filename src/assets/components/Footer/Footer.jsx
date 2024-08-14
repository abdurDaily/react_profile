import React from 'react';
import './Footer.css';
import { IoIosSend } from "react-icons/io";
import Social from '../sub_components/Social_Icons/Social';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";


const Footer = () => {
    return (
        <div>
           <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 first_foot">
                            <a href="#">abdurDaily</a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quisquam recusandae possimus, sint repudiandae voluptatibus necessitatibus praesentium sunt porro dolor facilis autem nesciunt dolorum neque deleniti sapiente expedita incidunt inventore!</p>
                            <Social/>
                        </div>
                        <div className="col-xl-3 foot_desc foot_sec">
                            <h5>Contact</h5>
                            <table>
                                <thead>
                                <tr>
                                    <td> <span><MdOutlinePhoneInTalk /></span> </td>
                                    <td><a href="tel:01647465050">+880 1647465050</a></td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><span><MdOutlineEmail /></span></td>
                                    <td><a href="mailto:abdurdaily@gmail.com">abdurdaily@gmail.com</a></td>
                                </tr>
                                <tr>
                                    <td> <span><FaLocationDot /></span> </td>
                                    <td> <span>9 No Kapasgola Road, Telpottir Mor, Chawk Bazar, Chattogram</span> </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-xl-3 foot_desc foot_third">
                            <h5>Quick Links</h5>
                            <table>
                                <tbody>
                                <tr><td><a href="#"> <IoMdArrowDropright /> Home</a></td></tr>
                                <tr><td><a href="#"> <IoMdArrowDropright /> About</a></td></tr>
                                <tr><td><a href="#"> <IoMdArrowDropright /> Blog's</a></td></tr>
                                <tr><td><a href="#"> <IoMdArrowDropright /> Service's</a></td></tr>
                                <tr><td><a href="#"> <IoMdArrowDropright /> Contact</a></td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-xl-3 foot_desc foot_fourth ">
                            <h5>Subscribe Now</h5>
                            <form action="">
                                <label htmlFor="subscribe">Thanks for subscribe with us.</label> <br />
                                <div className="btn-group">

                                <input type="text" className='form-control' placeholder='your email address' />
                                <button type="submit" className="btn btn-dark"><IoIosSend /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           </footer>
                <div className="copy_right">
                    <p> © Copyright 2024 AbdurDaily. All rights reserved.</p>
                </div>
           </div>
    );
};

export default Footer;