import React, { useEffect, useRef, useState } from 'react'
import './testRide.scss';
import grayScooty from "../../assets/images/testRide/grayScooty.png";
import search from "../../assets/images/testRide/search.png";
import arrow from "../../assets/images/testRide/arrow.png";
import whiteArrow from "../../assets/images/testRide/whiteArrow.png";
import location from "../../assets/images/testRide/location.png";
import whiteLocation from "../../assets/images/testRide/whiteLocation.png";
import call from "../../assets/images/testRide/call.png";
import whiteCall from "../../assets/images/testRide/whiteCall.png";
import Accordion from '../../utils/accordion';

export default function TesrRide() {
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
      <div className="dealership-banner" ref={topRef}>
        <div className="banner-container"  data-aos="fade-up" data-aos-duration="1000">
          <img src={grayScooty} alt="grayScooty" />
        </div>
      </div>

      <div className="book-ride">
        <div className="container1">
          <div className="book-ride-div" data-aos="fade-up" data-aos-duration="1000">
            <div className="book-ride-div-contant">
              <h2>Book A Test Ride Today</h2>
              <p>Experience the Bounce Infinity at your doorstep.</p>
              <div className="book-ride-div-contant-input">
                <div className="input-relative">
                  <input type="text" placeholder='Search' />
                  <div className="search-icon">
                    <img src={search} alt="search" />
                  </div>
                </div>
              </div>
              <div className="book-ride-div-contant-city">
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
          <div className="book-ride-div2">
            <h3>Take a test ride without moving an inch</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="book-ride-div2-button">
              <button onClick={toggleDiv1} className={div1Visible ? 'active' : ''}>Test Ride at Dealership</button>
              <button onClick={toggleDiv2} className={div2Visible ? 'active' : ''}>Test Ride at Doorstep</button>
            </div>
          </div>
        </div>
      </div>

      {div1Visible && (
        <div className="emty-div">
        </div>
      )}
      {div2Visible && (

        <div className="fill-add">
          <div className="container1">
            <div className="fill-add-head" data-aos="fade-up" data-aos-duration="1000">
              <h2>Please fill your address</h2>
            </div>
            <div className="fill-add-div">
              <div className="fill-add-input">
                <div className="fill-add-input-box">
                  <h3>Address</h3>
                  <input type="text" placeholder='Enter your address' />
                </div>
                <div className="fill-add-input-box">
                  <h3>Pin Code</h3>
                  <input type="text" placeholder='Enter your pincode' />
                </div>
              </div>
              <div className="fill-add-button">
                <button>Done</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="select-dealership">
        <div className="container1">
          <div className="sd-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Please Select a dealership</h2>
          </div>
          <div className="sd-grid">
            <div className="sd-grid-box">
              <div className="sd-grid-box-head">
                <h3>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h3>
                <div className="sd-grid-box-arrow">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteArrow} alt="whiteArrow" />
                </div>
              </div>
              <div className="sd-grid-box-location">
                <div className="sd-grid-box-arrow">
                  <img src={location} alt="location" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteLocation} alt="whiteLocation" />
                </div>
                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
              </div>
              <div className="sd-grid-box-call">
                <div className="sd-grid-box-arrow">
                  <img src={call} alt="call" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteCall} alt="whiteCall" />
                </div>
                <span>+91 97569 64787</span>
              </div>
            </div>
            <div className="sd-grid-box">
              <div className="sd-grid-box-head">
                <h3>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h3>
                <div className="sd-grid-box-arrow">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteArrow} alt="whiteArrow" />
                </div>
              </div>
              <div className="sd-grid-box-location">
                <div className="sd-grid-box-arrow">
                  <img src={location} alt="location" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteLocation} alt="whiteLocation" />
                </div>
                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
              </div>
              <div className="sd-grid-box-call">
                <div className="sd-grid-box-arrow">
                  <img src={call} alt="call" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteCall} alt="whiteCall" />
                </div>
                <span>+91 97569 64787</span>
              </div>
            </div>
            <div className="sd-grid-box">
              <div className="sd-grid-box-head">
                <h3>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h3>
                <div className="sd-grid-box-arrow">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteArrow} alt="whiteArrow" />
                </div>
              </div>
              <div className="sd-grid-box-location">
                <div className="sd-grid-box-arrow">
                  <img src={location} alt="location" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteLocation} alt="whiteLocation" />
                </div>
                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
              </div>
              <div className="sd-grid-box-call">
                <div className="sd-grid-box-arrow">
                  <img src={call} alt="call" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteCall} alt="whiteCall" />
                </div>
                <span>+91 97569 64787</span>
              </div>
            </div>
            <div className="sd-grid-box">
              <div className="sd-grid-box-head">
                <h3>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h3>
                <div className="sd-grid-box-arrow">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteArrow} alt="whiteArrow" />
                </div>
              </div>
              <div className="sd-grid-box-location">
                <div className="sd-grid-box-arrow">
                  <img src={location} alt="location" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteLocation} alt="whiteLocation" />
                </div>
                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
              </div>
              <div className="sd-grid-box-call">
                <div className="sd-grid-box-arrow">
                  <img src={call} alt="call" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteCall} alt="whiteCall" />
                </div>
                <span>+91 97569 64787</span>
              </div>
            </div>
            <div className="sd-grid-box">
              <div className="sd-grid-box-head">
                <h3>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h3>
                <div className="sd-grid-box-arrow">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteArrow} alt="whiteArrow" />
                </div>
              </div>
              <div className="sd-grid-box-location">
                <div className="sd-grid-box-arrow">
                  <img src={location} alt="location" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteLocation} alt="whiteLocation" />
                </div>
                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
              </div>
              <div className="sd-grid-box-call">
                <div className="sd-grid-box-arrow">
                  <img src={call} alt="call" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteCall} alt="whiteCall" />
                </div>
                <span>+91 97569 64787</span>
              </div>
            </div>
            <div className="sd-grid-box">
              <div className="sd-grid-box-head">
                <h3>Bounce Infinity Electric Scooter (Happy Ride's - Nelamangala)</h3>
                <div className="sd-grid-box-arrow">
                  <img src={arrow} alt="arrow" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteArrow} alt="whiteArrow" />
                </div>
              </div>
              <div className="sd-grid-box-location">
                <div className="sd-grid-box-arrow">
                  <img src={location} alt="location" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteLocation} alt="whiteLocation" />
                </div>
                <p>9, SK Complex, Dr.Vishnuvardhan Rd, next to Building of KK GROUP OF INSTITUTIONS, Rajarajeshwari Nagar</p>
              </div>
              <div className="sd-grid-box-call">
                <div className="sd-grid-box-arrow">
                  <img src={call} alt="call" />
                </div>
                <div className="sd-grid-box-arrow-hover">
                  <img src={whiteCall} alt="whiteCall" />
                </div>
                <span>+91 97569 64787</span>
              </div>
            </div>
            <div className="dealership-button-respo">
              <span>Show more</span>
            </div>
          </div>
        </div>
      </div>

      <div className="test-ride">
        <div className="container1">
          <div className="tr-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Select a Test Ride Day</h2>
          </div>
          <div className="tr-div-date">
            <div className="tr-div-date-box">
              <h3>07 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>08 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>09 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>10 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>11 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>12 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>13 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>14 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>15 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>16 March</h3>
              <span>Thursday</span>
            </div>
            <div className="tr-div-date-box">
              <h3>17 March</h3>
              <span>Thursday</span>
            </div>
          </div>
          <div className="tr-line"></div>
          <div className="tr-slot">
            <h4>Time Slot</h4>
            <div className="tr-slot-flex">
              <div className="tr-slot-flex-box">
                <h5>09:00 AM TO 12:00 PM</h5>
              </div>
              <div className="tr-slot-flex-box">
                <h5>09:00 AM TO 12:00 PM</h5>
              </div>
              <div className="tr-slot-flex-box">
                <h5>09:00 AM TO 12:00 PM</h5>
              </div>
              <div className="tr-slot-flex-box">
                <h5>09:00 AM TO 12:00 PM</h5>
              </div>
            </div>
          </div>
          <div className="tr-line2"></div>
          <div className="tr-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Personal Details</h2>
          </div>
          <div className="tr-detail">
            <div className="tr-detail-div">
              <h6>Full Name</h6>
              <input type="text" placeholder='Enter your full name' />
            </div>
            <div className="tr-detail-div">
              <h6>Email</h6>
              <input type="text" placeholder='Enter your email' />
            </div>
            <div className="tr-detail-div">
              <h6>Phone no.</h6>
              <div className="tr-detail-div-input">
                <div className="tr-detail-div-input-select">
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
            </div>
            <div className="tr-detail-div">
              <h6>Pin code</h6>
              <input type="text" placeholder='Enter your pin code' />
            </div>
          </div>
          <div className="tr-button" data-aos="fade-up" data-aos-duration="1000">
            <button>Book a Test Ride</button>
          </div>
          <div className="tr-last-pera">
            <ul>
              <li>By clicking “Confirm Booking”, I am giving my consent to Bounce Electric 1 Pvt Limited and its service providers to hold my personal data and communicate with me by e-mail, SMS or phone call for test ride purposes.</li>
            </ul>
          </div>
        </div>
      </div>

      <Accordion/>

    </div>
  )
}
