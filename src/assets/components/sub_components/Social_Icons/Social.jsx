import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaWikipediaW } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './social.css';

const Social = () => {
  return (
    <div>
      <div className="icons">
        <span>
          <a target="_blank" href="https://www.facebook.com/abdurDaily">
            <MdFacebook />
          </a>
        </span>
        <span>
          <a target="_blank" href="https://www.linkedin.com/in/abdurdaily/">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="#">
            <IoLogoTwitter />
          </a>
        </span>
        <span>
          <a href="#">
            <FaWikipediaW />
          </a>
        </span>
        <span>
          <a href="#">
            <FaYoutube />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Social;
