import React, { useEffect, useRef, useState } from 'react'
import './dealership2.scss';
import halfscooty from "../../assets/images/dealership/halfscooty.png";
import fullScooty from "../../assets/images/dealership/fullScooty.png";
import search from "../../assets/images/dealership/search.png";
import redScooty from "../../assets/images/dealership/redScooty.png";
import map from "../../assets/images/dealership/map.png";
import whiteScooty from "../../assets/images/dealership/whiteScooty.png";
import { IoGrid } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Dealership2() {
  const [div1Visible, setDiv1Visible] = useState(true);
  const [div2Visible, setDiv2Visible] = useState(false);
  const toggleDiv1 = () => {
    setDiv1Visible(true);
    setDiv2Visible(false);
  };
  const toggleDiv2 = () => {
    if (!div2Visible) {
      setDiv1Visible(false);
      setDiv2Visible(true);
    }
  };


  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="dealership2-banner" ref={topRef}>
        <div className="dealership2-banner-main">
          <div className="dealership2-banner-main-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Bounce infinity dealers in Delhi</h2>
            <p>Visit the nearby dealer to test ride and buy the new infinity E.1+</p>
          </div>
        </div>
      </div>

      <div className="delhi">
        <div className="container1">
          <div className="delhi-div">
            <div className="delhi-div-input">
              <div className="input-relative">
                <input type="text" placeholder='Search' />
                <div className="search-icon">
                  <img src={search} alt="search" />
                </div>
              </div>
            </div>
            <div className="delhi-div-button">
              <div className="delhi-div-button1">
                <button onClick={toggleDiv1} className={div1Visible ? 'active' : ''}>
                  <IoGrid className="delhi-div-button1-svg" />
                  <span>Grid View</span>
                </button>
              </div>
              <div className="delhi-div-button1">
                <button onClick={toggleDiv2} className={div2Visible ? 'active' : ''}>
                  <FaMapMarkerAlt className="delhi-div-button1-svg" />
                  <span>Shop Map</span>
                </button>
              </div>
            </div>
          </div>
          {div1Visible && (
            <div className="delhi-div2">
              <h2 data-aos="fade-up" data-aos-duration="1000">Dealership in Delhi</h2>
              <div className="delhi-div2-grid">
                <div className="delhi-div2-grid1">
                  <img src={whiteScooty} alt="whiteScooty" />
                  <h3>Bounce Infinity Electric Scooter (Jangra Automobiles)</h3>
                  <div className="delhi-div2-grid1-pera">
                    <div className="map-img">
                      <img src={map} alt="map" />
                    </div>
                    <p>WZ-182, Jangra Batteries, Palam Village,
                      Delhi, Delhi, 110045</p>
                  </div>
                  <div className="delhi-div2-grid1-button">
                    <Link to={"/viewDealership"} data-aos="fade-right" data-aos-duration="1000">
                      <button>View Detail</button>
                    </Link>
                    <Link to={"/viewDealership"} data-aos="fade-left" data-aos-duration="1000">
                      <button>Book a Testride</button>
                    </Link>
                  </div>
                </div>
                <div className="delhi-div2-grid1">
                  <img src={redScooty} alt="redScooty" />
                  <h3>Bounce Infinity Electric Scooter (Jangra Automobiles)</h3>
                  <div className="delhi-div2-grid1-pera">
                    <div className="map-img">
                      <img src={map} alt="map" />
                    </div>
                    <p>WZ-182, Jangra Batteries, Palam Village,
                      Delhi, Delhi, 110045</p>
                  </div>
                  <div className="delhi-div2-grid1-button">
                    <Link to={"/viewDealership"} data-aos="fade-right" data-aos-duration="1000">
                      <button>View Detail</button>
                      </Link>
                    <Link to={"/viewDealership"} data-aos="fade-left" data-aos-duration="1000">
                      <button>Book a Testride</button>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          )}
          {div2Visible && (
            <div className="dilhi-div3">
              <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.164256928502!2d72.82137944002912!3d21.22533415503458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fd8a3bc6819%3A0x703aa7324159d15d!2sBounce%20Infinity%20Electric%20Scooter!5e0!3m2!1sen!2sin!4v1715336262458!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>
            </div>
          )}
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
