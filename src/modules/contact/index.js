import React, { useEffect, useRef } from 'react'
import './contact.scss';
import contactGirl from "../../assets/images/contact/contactGirl.png";
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";


export default function Contact() {
  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div>

      <div className="contact" ref={topRef}>
        <div className="container1">
          <div className="contact-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Contact Us</h2>
          </div>
          <div className="contact-pera">
            <p>Have a specific question? Ask it here and we'll contact you with a quick response.</p>
          </div>
          <div className="contact-div">
            <img src={contactGirl} alt="contactGirl" />
            <div className="contact-div-box">
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
              <div className="contact-div-box-input2">
                <h3>Phone no.</h3>
                <div className="contact-div-box-input2-select">
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
              <div className="contact-div-box-input">
                <h3>Pincode</h3>
                <input type="number" placeholder='Enter your pincode' />
              </div>
              <div className="contact-div-box-text">
                <h3>Message</h3>
                <textarea placeholder='Write your message...'></textarea>
              </div>
              <div className="contact-div-box-button" data-aos="fade-up" data-aos-duration="1000">
                <Link to={"/pricing"}>
                  <button>Submit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
