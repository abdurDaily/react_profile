import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { NavLink } from 'react-router-dom';
import { frontEndRoutes } from '../routes/Route';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import './Navbar.css';

const Navbar = () => {

    let navbar = useRef();
    let scrollToTop = 0;
    window.addEventListener('scroll', ()=>{
       if(window.scrollY > 200){
          navbar.current.classList.add('active');
        }else{
           navbar.current.classList.remove('active');
       }
    //    console.log(window.scrollY);
       
    });

    return (
        <>
           <nav ref={navbar} className="navbar navbar-expand-lg ">
             <div className="container">
                <a className="navbar-brand" href="#">abdurDaily</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><HiOutlineMenuAlt3 /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                   
                        {
                            frontEndRoutes.map((routes,id) => (
                                <li style={{ display:'flex',alignItems:'center', padding:'15px' }} key={id} className="nav-item">
                                   <span>{routes.icon}</span>
                                   <NavLink  className="nav-link" aria-current="page" to={routes.path}>{routes.title}</NavLink>
                                </li>
                            ))
                        }
                </ul>
                </div>
             </div>
         </nav> 
        </>
    );
};

export default Navbar;