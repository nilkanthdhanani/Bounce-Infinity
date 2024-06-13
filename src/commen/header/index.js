import React, { useState, useEffect } from 'react';
import './header.scss';
import logo from "../../assets/images/header/logo.png";
import menu from "../../assets/images/header/menu.png";
import mobileLogo from "../../assets/images/header/mobileLogo.png";
import { RiPagesLine } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

export default function Header({ whiteFont, drop }) {
  useEffect(() => {
    const parentDiv = document.getElementById("parentDiv");
    const childDiv = document.getElementById("childDiv");

    parentDiv.addEventListener("click", () => {
      childDiv.classList.toggle("show");
    });
  }, []);

  const [menuWidth, setMenuWidth] = useState(0);

  const openNav = () => {
    setMenuWidth('250px');
  };

  const closeNav = () => {
    setMenuWidth('0');
  };

  const handleLinkClick = () => {
    closeNav();
  };

  return (
    <div>
      <div className="header-main">
        <div className="header-container">
          <div className="header-contant">
            <div className="header-contant-logo">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-contant-logo-respo">
              <img src={mobileLogo} alt="mobileLogo" />
            </div>
            <div className={`header-contant-menu`}>
              <div className="header-contant-menu-ancer">
                <NavLink activeclassname="active" className={`${whiteFont ? whiteFont : 'a'}`} to={"/"}>Home</NavLink>
              </div>
              <div className="header-contant-menu-ancer">
                <NavLink activeclassname="active" className={`${whiteFont ? whiteFont : 'a'}`} to={"/testRide"}>Test Ride</NavLink>
              </div>
              <div className="header-contant-menu-ancer">
                <NavLink activeclassname="active" className={`${whiteFont ? whiteFont : 'a'}`} to={"/dealership"}>Dealership</NavLink>
                <FaChevronDown className={`${drop ? drop : 'drop-down-svg'}`} />
                <div id="myDropdown" className="dropdown-content">
                  <Link to={"/dealership2"}>
                    <h3>Dealership in Delhi</h3>
                  </Link>
                  <Link to={"/viewDealership"}>
                    <h3>View Dealership</h3>
                  </Link>
                  <Link to={"/dealershipBanglore"}>
                    <h3>Dealers in Bangalore</h3>
                  </Link>
                </div>
              </div>
              <div className="header-contant-menu-ancer">
                <NavLink activeclassname="active" className={`${whiteFont ? whiteFont : 'a'}`} to={"/financial"}>Pages</NavLink>
                <FaChevronDown className={`${drop ? drop : 'drop-down-svg'}`} />
                <div id="myDropdown" className="dropdown-content">
                  <NavLink activeclassname="active" to={"/financial"}>
                    <h3>Financial</h3>
                  </NavLink>
                  <Link activeclassname="active" to={"/social"}>
                    <h3>Social Media</h3>
                  </Link>
                  <Link to={"/socialDetail"}>
                    <h3>Social Media Detail</h3>
                  </Link>
                  <Link to={"/bangalore"}>
                    <h3>Scooters in Bangalore</h3>
                  </Link>
                  <Link to={"/topScooter"}>
                    <h3>Scooter Under 1 Lakh</h3>
                  </Link>
                </div>
              </div>
              <div className="header-contant-menu-ancer">
                <NavLink className={`${whiteFont ? whiteFont : 'a'}`} activeclassname="active" to={"/pricing"}>Pricing</NavLink>
              </div>
              <div className="header-contant-menu-ancer">
                <NavLink className={`${whiteFont ? whiteFont : 'a'}`} activeclassname="active" to={"/contact"}>Contact Us</NavLink>
              </div>
            </div>
            <div id="mySidenav" className="sidenav" style={{ width: `${menuWidth}` }}>
              <p className="closebtn" onClick={closeNav}>&times;</p>
              <Link to={"/"} onClick={handleLinkClick}>
                <div className="home-div">
                  <FaHome className="home-div-svg" />
                  <h2>Home</h2>
                </div>
              </Link>
              <div className="home-second-div">
                <div className="home-second-div-main">
                  <Link to={"/testRide"} onClick={handleLinkClick}>
                    <div className="home-second-div1">
                      <RiEBike2Fill className="home-second-div-svg" />
                      <h3>Test Ride</h3>
                    </div>
                  </Link>
                  <Link to={"/dealership"} onClick={handleLinkClick}>
                    <div className="home-second-div1">
                      <FaAddressBook className="home-second-div-svg" />
                      <h3>Dealerships</h3>
                    </div>
                  </Link>
                  <div id="parentDiv" className="home-second-div2">
                    <div className="home-second-div1-head">
                      <RiPagesLine className="home-second-div-svg" />
                      <h3>Pages</h3>
                    </div>
                    <div id="childDiv" className="home-second-div1-drop">
                      <Link to={"/financial"} onClick={handleLinkClick}>
                        <h4>Financial</h4>
                      </Link>
                    </div>
                    <div id="childDiv" className="home-second-div1-drop">
                      <Link to={"/social"} onClick={handleLinkClick}>
                        <h4>Social Media</h4>
                      </Link>
                    </div>
                    <div id="childDiv" className="home-second-div1-drop">
                      <Link to={"/socialDetail"} onClick={handleLinkClick}>
                        <h4>Social Media Detail</h4>
                      </Link>
                    </div>
                    <div id="childDiv" className="home-second-div1-drop">
                      <Link to={"/bangalore"} onClick={handleLinkClick}>
                        <h4>Scooters in Bangalore</h4>
                      </Link>
                    </div>
                    <div id="childDiv" className="home-second-div1-drop">
                      <Link to={"/topScooter"} onClick={handleLinkClick}>
                        <h4>Scooter Under 1 Lakh</h4>
                      </Link>
                    </div>
                  </div>
                  <Link to={"/"} onClick={handleLinkClick}>
                    <div className="home-second-div1">
                      <MdPriceChange className="home-second-div-svg" />
                      <h3>Pricing</h3>
                    </div>
                  </Link>
                  <Link to={"/contact"} onClick={handleLinkClick}>
                    <div className="home-second-div1">
                      <MdContacts className="home-second-div-svg" />
                      <h3>Contact Us</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <span className="span" onClick={openNav}>
              <img src={menu} alt="menu" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
