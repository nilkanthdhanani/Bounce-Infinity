import React, { useEffect, useRef, useState } from 'react'
import './viewDealership.scss';
import halfscooty from "../../assets/images/dealership/halfscooty.png";
import fullScooty from "../../assets/images/dealership/fullScooty.png";
import graymap from "../../assets/images/dealership/graymap.png";
import clock from "../../assets/images/dealership/clock.png";
import phone from "../../assets/images/dealership/phone.png";
import mail from "../../assets/images/dealership/mail.png";
import { CgClose } from 'react-icons/cg';
import { FaAngleDown } from "react-icons/fa6";


export default function ViewDealership() {

  const [IsOpen, SetIsOpen] = useState(false);
  const openModal = () => {
    SetIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    SetIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };


  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="viewDealership-banner" ref={topRef}></div>

      <div className="detail-view">
        <div className="container1">
          <div className="detail-view-box">
            <div className="detail-view-box1">
              <h2 data-aos="fade-up" data-aos-duration="1000">Bounce Infinity Electric Scooter (Jangra Automobiles)</h2>
              <div className="detail-view-box1-flex">
                <img src={clock} alt="clock" />
                <p>WZ-182, Jangra Batteries, Palam Village, Delhi, Delhi, 110045</p>
              </div>
              <div className="detail-view-box1-flex">
                <img src={graymap} alt="graymap" />
                <p>Mon - Sun: 10 am - 8 pm</p>
              </div>
              <div className="detail-view-box1-flex">
                <img src={phone} alt="phone" />
                <p>+91 95846 12586</p>
              </div>
              <div className="detail-view-box1-flex">
                <img src={mail} alt="mail" />
                <p>patelmotores@gmail.com</p>
              </div>
              <div className="detail-view-box1-button" data-aos="fade-up" data-aos-duration="1000">
                <button onClick={openModal} type="submit">Book a Test Ride</button>
              </div>
            </div>
            <div className="detail-view-box2">
              <iFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.164256928502!2d72.82137944002912!3d21.22533415503458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fd8a3bc6819%3A0x703aa7324159d15d!2sBounce%20Infinity%20Electric%20Scooter!5e0!3m2!1sen!2sin!4v1715336262458!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iFrame>
            </div>
          </div>
        </div>
      </div>

      {IsOpen && (
        <div className="modal" onClick={handleBackdropClick}>
          <div className="modal-content">
            <div className="modal-content-div">
              <div className="modal-content-div-head">
                <h2>Book a Test Ride</h2>
                <div className="model-close-button">
                  <button onClick={closeModal}>
                    <CgClose />
                  </button>
                </div>
              </div>
              <div className="modal-content-div-select">
                <button>Test Ride at Dealership</button>
                <button>Test Ride at Doorstep</button>
              </div>
              <div className="modal-content-div-grid">
                <div className="mcd-grid-box">
                  <h3>Name</h3>
                  <input type="text" placeholder='Enter your name' />
                </div>
                <div className="mcd-grid-box">
                  <h3>Phone Number</h3>
                  <input type="number" placeholder='Enter your phone number' />
                </div>
                <div className="mcd-grid-box">
                  <h3>Date</h3>
                  <input type="date" placeholder='Select date' />
                </div>
                <div className="mcd-grid-box">
                  <h3>Time Slot</h3>
                  <select>
                    <option>10:30 AM</option>
                    <option>11:00 AM</option>
                    <option>12:30 AM</option>
                    <option>01:00 AM</option>
                    <option>02:30 PM</option>
                    <option>03:00 PM</option>
                    <option>04:30 PM</option>
                    <option>05:00 PM</option>
                  </select>
                  <div className="drop">
                    <FaAngleDown />
                  </div>
                </div>
                <div className="mcd-grid-box">
                  <h3>Pin Code</h3>
                  <input type="number" placeholder='Enter your pincode' />
                </div>
              </div>
              <div className="mcd-button">
                <button>Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      )}

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
