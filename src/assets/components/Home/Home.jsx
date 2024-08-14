import React from "react";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import Banner from "../sub_components/Banner/Banner";
import "./Home.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Content from "../About/Content/Content";
import Service from "../Services/Service";
import Props from "../sub_components/Props/Props";

const Home = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Navbar />
      <Banner />
      <Content />
      <Service />




      <Props onClick={handleClick}>hello</Props>
      <Footer />
    </div>
  );
};

export default Home;
