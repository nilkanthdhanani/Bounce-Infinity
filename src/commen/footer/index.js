import React from 'react'
import './footer.scss';
import footerLogo from "../../assets/images/footer/footerLogo.png";
import mail from "../../assets/images/footer/mail.png";
import map from "../../assets/images/footer/map.png";
import phone from "../../assets/images/footer/phone.png";
import copyright from "../../assets/images/footer/copyright.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className="footer-div">
        <div className="footer-container">
          <div className="footer-div-main">
            <div className="footer-div-main1">
              <div className="footer-div-main1-logo">
                <img src={footerLogo} alt="footerLogo" />
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="footer-div-main2">
              <div className="footer-div-main2-link">
                <h2>Useful Links</h2>
                <div className="footer-div-main2-list">
                  <Link to={"/testride"}>Test Ride</Link>
                  <div className="footer-div-main2-list-line"></div>
                  <Link to={"/dealership"}>Find a Dealer</Link>
                  <div className="footer-div-main2-list-line"></div>
                  <Link to={"/dealership"}>Become a Dealer</Link>
                  <div className="footer-div-main2-list-line"></div>
                  <Link to={"/contact"}>Contact Us</Link>
                </div>
              </div>
              <div className="footer-div-main2-contact">
                <h2>Contact Us</h2>
                <div className="footer-div-main2-contact-list">
                  <img src={map} alt="map" />
                  <p>1201-1206, 12th Floor, Spaze Plazo, Sector-69 Haryana</p>
                </div>
                <div className="footer-div-main2-contact-list">
                  <img src={phone} alt="phone" />
                  <p>08069760700</p>
                </div>
                <div className="footer-div-main2-contact-list">
                  <img src={mail} alt="mail" />
                  <p>bounceinfinity@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-div-copyright">
            <img src={copyright} alt="copyright" />
            <p>Copyright 2024. All right reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
