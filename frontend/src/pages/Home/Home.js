import React, { useEffect } from 'react';
import Slider from 'react-slick'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; 

const Home = () => {
  

  return (
    <>
  {/* Start Header/Navigation */}
  <nav
    className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
    arial-label="Furni navigation bar"
  >
    <div className="container">
      <a className="navbar-brand" href="index.html">
        Furni<span>.</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsFurni"
        aria-controls="navbarsFurni"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="shop.html">
              Shop
            </a>
          </li>
          <li>
            <a className="nav-link" href="about.html">
              About us
            </a>
          </li>
          <li>
            <a className="nav-link" href="services.html">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" href="blog.html">
              Blog
            </a>
          </li>
          <li>
            <a className="nav-link" href="contact.html">
              Contact us
            </a>
          </li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li>
            <a className="nav-link" href="#">
              {/* <img src="images/user.svg" /> */}
            </a>
          </li>
          <li>
            <a className="nav-link" href="cart.html">
              {/* <img src="images/cart.svg" /> */}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* End Header/Navigation */}
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>
              Modern Interior <span clsas="d-block">Design Studio</span>
            </h1>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <a href="" className="btn btn-secondary me-2">
                Shop Now
              </a>
              <a href="#" className="btn btn-white-outline">
                Explore
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="hero-img-wrap">
            {/* <img src="images/couch.png" className="img-fluid" /> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
</>

  );
};

export default Home;
