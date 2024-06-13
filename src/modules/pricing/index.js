import React, { useEffect, useRef } from 'react'
import './pricing.scss';
import smallRupee from "../../assets/images/contact/smallRupee.png";
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";


export default function Pricing() {
  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="prizing" ref={topRef}>
        <div className="container1">
          <div className="pricing-div">
            <div className="pricing-head" data-aos="fade-up" data-aos-duration="1000">
              <h2>Pricing Section</h2>
            </div>
            <div className="pricing-input2">
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
            </div>
            <div className="pricing-color">
              <h4>Available color</h4>
              <div className="pricing-color-select">
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
            <div className="pricing-detail">
              <div className="pricing-detail-main">
                <h4>Ex-Showroom Price (including charger and GST)</h4>
                <span>
                  <img src={smallRupee} alt="smallRupee" />
                  1,55,553
                </span>
              </div>
              <div className="pricing-detail-main">
                <h4>FAME II Subsidy</h4>
                <span>
                  -
                  <img src={smallRupee} alt="smallRupee" />
                  21,131
                </span>
              </div>
              <div className="pricing-detail-main">
                <h4>Subsidy from State Government</h4>
                <span>
                  -
                  <img src={smallRupee} alt="smallRupee" />
                  0
                </span>
              </div>
            </div>
            <div className="pricing-detail2">
              <div className="pricing-detail-main">
                <h4>Effective Price</h4>
                <span>
                  <img src={smallRupee} alt="smallRupee" />
                  1,34,422
                </span>
              </div>
            </div>
            <div className="pricing-pera">
              <p>*The price displayed is subject to change, final Vehicle price may vary and will be applicable as on the date of delivery</p>
              <p>*The price displayed is subject to change, final Vehicle price may vary and will be applicable as on the date of delivery</p>
            </div>
            <div className="pricing-button" data-aos="fade-up" data-aos-duration="1000">
              <Link to={"/faq"}>
                <button>Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
