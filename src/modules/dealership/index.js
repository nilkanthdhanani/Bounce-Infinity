import React, { useEffect, useRef } from 'react'
import './dealership.scss';
import search from "../../assets/images/dealership/search.png";
import grayScooty from "../../assets/images/dealership/grayScooty.png";
import scootygroup from "../../assets/images/dealership/scootygroup.png";
import home from "../../assets/images/dealership/home.png";
import location from "../../assets/images/dealership/location.png";
import halfscooty from "../../assets/images/dealership/halfscooty.png";
import fullScooty from "../../assets/images/dealership/fullScooty.png";
import { Link } from 'react-router-dom';

export default function Dealership() {
  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="dealership-banner-main" ref={topRef}>
        <div className="banner-container">
          <img src={grayScooty} alt="grayScooty" />
        </div>
      </div>

      <div className="find-dealer" data-aos="fade-up" data-aos-duration="1000">
        <div className="container1">
          <div className="find-dealer-div">
            <div className="find-dealer-div-contant">
              <h2>Find A Bounce Infinity dealer Near You</h2>
              <p>Experience the Bounce Infinity E.1+ first hand at a store closer to you.</p>
              <div className="find-dealer-div-contant-input">
                <div className="input-relative">
                  <input type="text" placeholder='Search' />
                  <div className="search-icon">
                    <img src={search} alt="search" />
                  </div>
                </div>
              </div>
              <div className="find-dealer-div-contant-city">
                <div className="contant-city-box">
                  <span>Delhi</span>
                </div>
                <div className="contant-city-box">
                  <span>Bangalore</span>
                </div>
                <div className="contant-city-box">
                  <span>Hyderabad</span>
                </div>
                <div className="contant-city-box">
                  <span>Jaipur</span>
                </div>
                <div className="contant-city-box">
                  <span>Mumbai</span>
                </div>
                <div className="contant-city-box">
                  <span>Vijayawada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner">
        <div className="partner-flex">
          <div className="partner-flex1">
            <div className="partner-flex1-img" data-aos="fade-up" data-aos-duration="1000">
              <img src={scootygroup} alt="scootygroup" />
            </div>
          </div>
          <div className="partner-flex2">
            <div className="partner-flex2-box" data-aos="fade-up" data-aos-duration="1000">
              <h2>60+ partners across India</h2>
              <p>Experience India’s 1st electric scooter with removable batteries</p>
              <list-style>
                <li>Exclusive offers at dealerships</li>
                <li>Instant loan approvals available</li>
              </list-style>
              <div className="partner-flex2-box-button">
                <Link to={"/dealership2"}>
                  <button>Book a Test Ride</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="red-banner">
        <div className="container1">
          <div className="red-banner-grid">
            <div className="red-banner-grid1">
              <h2>Bring home the Infinity E.1+</h2>
              <p>Test ride the Infinity E.1+ at your convenience, in any of our stores.</p>
            </div>
            <div className="red-banner-grid2">
              <div className="red-banner-grid2-div">
                <div className="red-banner-grid2-div1">
                  <img src={home} alt="home" />
                </div>
                <div className="red-banner-grid2-div2">
                  <h2>60+</h2>
                  <p>Dealerships & experience centers</p>
                </div>
              </div>
              <div className="red-banner-grid2-line"></div>
              <div className="red-banner-grid2-div">
                <div className="red-banner-grid2-div1">
                  <img src={location} alt="location" />
                </div>
                <div className="red-banner-grid2-div2">
                  <h2>100+</h2>
                  <p>cities across India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe">
        <div className="container1">
          <div className="subscribe-div">
            <div className="subscribe-div2" data-aos="fade-up" data-aos-duration="1000">
              <img src={halfscooty} alt="halfscooty" />
              <img src={fullScooty} alt="fullScooty" />
            </div>
            <div className="subscribe-div1">
              <h2>Subscribe & be the first to get updates</h2>
              <div className="subscribe-div1-input">
                <div className="subscribe-div1-input-select">
                  <select>
                    <option selected>+91</option>
                    <option>+101</option>
                    <option>+41</option>
                    <option>+911</option>
                    <option>+999</option>
                  </select>
                </div>
                <input type="number" placeholder='Enter your phone no' />
              </div>
              <div className="subscribe-div1-button">
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
