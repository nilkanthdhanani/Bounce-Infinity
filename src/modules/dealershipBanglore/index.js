import React, { useEffect, useRef } from 'react';
import './dealershipBanglore.scss';
import whiteScooty from "../../assets/images/dealershipBanglore/whiteScooty.png";
import graymap from "../../assets/images/dealershipBanglore/graymap.png";
import shope from "../../assets/images/dealershipBanglore/shope.png";
import phone from "../../assets/images/dealershipBanglore/phone.png";
import { FaAngleDown } from "react-icons/fa6";
import Accordion from '../../utils/accordion';
import HeroRespo from '../../utils/heroRespo';

export default function DealershipBanglore() {
  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="dealershipBanglore" ref={topRef}>
        <div className="bangalore-banner-div">
          <div className="hero-contant">
            <div className="hero-contant1">
              <div className="hero-contant1-abso">
                <div className="hero-contant1-div">
                  <h1 data-aos="fade-up" data-aos-duration="1000">Electric Scooter Dealers & Showrooms in Bangalore</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                  <div className="hero-contant1-button">
                    <button>Book Now</button>
                  </div>
                  <div className="onclick-button">
                    <button></button>
                    <button></button>
                    <button></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-contant2">
              <div className="hero-contant2-scooty">
                <img src={whiteScooty} alt="whiteScooty" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroRespo />

      <div className="located" data-aos="fade-up" data-aos-duration="1000">
        <div className="container1">
          <div className="located-div">
            <h2>LOCATE THE NEAREST DEALER</h2>
            <div className="located-input">
              <div className="contact-div-box-select">
                <h3>Select Variant</h3>
                <select>
                  <option selected>Select Variant</option>
                  <option>Income Statement</option>
                  <option>Balance Sheet</option>
                  <option>Cash Flow Statement</option>
                  <option>Budget Report</option>
                  <option>Financial Ratios</option>
                </select>
                <div className="drop">
                  <FaAngleDown />
                </div>
              </div>
              <div className="contact-div-box-select">
                <h3>Select State</h3>
                <select>
                  <option selected>Select State</option>
                  <option>Gujarat</option>
                  <option>Delhi</option>
                  <option>Panjab</option>
                  <option>Mumbai</option>
                  <option>Rajasthan</option>
                </select>
                <div className="drop">
                  <FaAngleDown />
                </div>
              </div>
              <div className="contact-div-box-select">
                <h3>Select City</h3>
                <select>
                  <option selected>Select City</option>
                  <option>Surat</option>
                  <option>Ahmedabad</option>
                  <option>Rajkot</option>
                  <option>Vadodara</option>
                  <option>Amreli</option>
                </select>
                <div className="drop">
                  <FaAngleDown />
                </div>
              </div>
              <div className="contact-div-box-button">
                <button>SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dib-div">
        <div className="container1">
          <div className="dbi-div-grid">
            <div className="dbi-div-grid1">
              <img src={shope} alt="shope" />
              <h3>Bounce Infinity Electric Scooter (Jangra Automobiles)</h3>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={graymap} alt="graymap" />
                </div>
                <p>WZ-182, Jangra Batteries, Palam Village,
                  Delhi, Delhi, 110045</p>
              </div>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={phone} alt="phone" />
                </div>
                <p>+91 97569 64787</p>
              </div>
              <div className="dbi-div-grid1-button">
                <button  data-aos="fade-right" data-aos-duration="1000">View Map</button>
                <button data-aos="fade-left" data-aos-duration="1000">Website</button>
              </div>
            </div>
            <div className="dbi-div-grid1">
              <img src={shope} alt="shope" />
              <h3>Bounce Infinity Electric Scooter (Jangra Automobiles)</h3>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={graymap} alt="graymap" />
                </div>
                <p>WZ-182, Jangra Batteries, Palam Village,
                  Delhi, Delhi, 110045</p>
              </div>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={phone} alt="phone" />
                </div>
                <p>+91 97569 64787</p>
              </div>
              <div className="dbi-div-grid1-button">
                <button  data-aos="fade-right" data-aos-duration="1000">View Map</button>
                <button data-aos="fade-left" data-aos-duration="1000">Website</button>
              </div>
            </div>
            <div className="dbi-div-grid1">
              <img src={shope} alt="shope" />
              <h3>Bounce Infinity Electric Scooter (Jangra Automobiles)</h3>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={graymap} alt="graymap" />
                </div>
                <p>WZ-182, Jangra Batteries, Palam Village,
                  Delhi, Delhi, 110045</p>
              </div>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={phone} alt="phone" />
                </div>
                <p>+91 97569 64787</p>
              </div>
              <div className="dbi-div-grid1-button">
                <button  data-aos="fade-right" data-aos-duration="1000">View Map</button>
                <button data-aos="fade-left" data-aos-duration="1000">Website</button>
              </div>
            </div>
            <div className="dbi-div-grid1">
              <img src={shope} alt="shope" />
              <h3>Bounce Infinity Electric Scooter (Jangra Automobiles)</h3>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={graymap} alt="graymap" />
                </div>
                <p>WZ-182, Jangra Batteries, Palam Village,
                  Delhi, Delhi, 110045</p>
              </div>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={phone} alt="phone" />
                </div>
                <p>+91 97569 64787</p>
              </div>
              <div className="dbi-div-grid1-button">
                <button  data-aos="fade-right" data-aos-duration="1000">View Map</button>
                <button data-aos="fade-left" data-aos-duration="1000">Website</button>
              </div>
            </div>
            <div className="dbi-div-grid1">
              <img src={shope} alt="shope" />
              <h3>Bounce Infinity Electric Scooter (Jangra Automobiles)</h3>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={graymap} alt="graymap" />
                </div>
                <p>WZ-182, Jangra Batteries, Palam Village,
                  Delhi, Delhi, 110045</p>
              </div>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={phone} alt="phone" />
                </div>
                <p>+91 97569 64787</p>
              </div>
              <div className="dbi-div-grid1-button">
                <button  data-aos="fade-right" data-aos-duration="1000">View Map</button>
                <button data-aos="fade-left" data-aos-duration="1000">Website</button>
              </div>
            </div>
            <div className="dbi-div-grid1">
              <img src={shope} alt="shope" />
              <h3>Bounce Infinity Electric Scooter (Jangra Automobiles)</h3>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={graymap} alt="graymap" />
                </div>
                <p>WZ-182, Jangra Batteries, Palam Village,
                  Delhi, Delhi, 110045</p>
              </div>
              <div className="dbi-div-grid1-pera">
                <div className="map-img">
                  <img src={phone} alt="phone" />
                </div>
                <p>+91 97569 64787</p>
              </div>
              <div className="dbi-div-grid1-button">
                <button  data-aos="fade-right" data-aos-duration="1000">View Map</button>
                <button data-aos="fade-left" data-aos-duration="1000">Website</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Accordion />
    </div>
  );
}
