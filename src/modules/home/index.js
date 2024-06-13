import React, { useEffect, useMemo, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.scss';
import maskGroup from "../../assets/images/home/maskGroup.png";
import redscooty from "../../assets/images/home/E1SPORTYRED2.png";
import yallowScooty from "../../assets/images/home/yallowScooty.png";
import grayScooty from "../../assets/images/home/grayScooty.png";
import redscooty3 from "../../assets/images/home/E1SPORTYRED3.png";
import scooterIcon from "../../assets/images/home/scooterIcon.png";
import materialIcon from "../../assets/images/home/materialIcon.png";
import moneyIcon from "../../assets/images/home/moneyIcon.png";
import batteryIcon from "../../assets/images/home/batteryIcon.png";
import scooty1 from "../../assets/images/home/scooty1.png";
import scooty2 from "../../assets/images/home/scooty2.png";
import scooty3 from "../../assets/images/home/scooty3.png";
import rupee from "../../assets/images/home/rupee.png";
import priceRedScooter from "../../assets/images/home/priceRedScooter.png";
import priceBlackScooter from "../../assets/images/home/priceBlackScooter.png";
import priceGrayScooter from "../../assets/images/home/priceGrayScooter.png";
import smallRupee from "../../assets/images/home/smallRupee.png";
import arrow from "../../assets/images/home/arrow.png";
import whiteArrow from "../../assets/images/home/whiteArrow.png";
import mediumRupee from "../../assets/images/home/mediumRupee.png";
import batteryScooty from "../../assets/images/home/batteryScooty.png";
import pressone from "../../assets/images/home/pressone.png";
import presstwo from "../../assets/images/home/presstwo.png";
import pressthree from "../../assets/images/home/pressthree.png";
import { FaAngleDown } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "../../utils/accordion";
import Sliderdiv from '../../utils/slider';
import HeroRespo from '../../utils/heroRespo';


export default function Home() {


  const scooterImages = useMemo(() => [redscooty, yallowScooty, grayScooty], []);
  const [currentImage, setCurrentImage] = useState(redscooty);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (image, index) => {
    setCurrentImage(image);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % scooterImages.length;
      setCurrentImage(scooterImages[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, scooterImages]);


  const scootyImages = useMemo(() => [priceRedScooter, priceBlackScooter, priceGrayScooter], []);
  const [currentImage2, setCurrentImage2] = useState(priceRedScooter);
  const [currentIndex2, setCurrentIndex2] = useState(0);

  const handleButtonClick2 = (image, index) => {
    setCurrentImage2(image);
    setCurrentIndex2(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex2 + 1) % scootyImages.length;
      setCurrentImage2(scootyImages[nextIndex]);
      setCurrentIndex2(nextIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex2, scootyImages]);


  const handleClick1 = () => {
    setShowMore1(!showMore1);
  };
  const [showMore1, setShowMore1] = useState(false);

  const handleClick2 = () => {
    setShowMore2(!showMore2);
  };
  const [showMore2, setShowMore2] = useState(false);

  const handleClick3 = () => {
    setShowMore3(!showMore3);
  };
  const [showMore3, setShowMore3] = useState(false);


  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);


  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div>
      <div className="hero-banner" ref={topRef}>
        <div className="hero-banner-grid">
          <div className="hero-banner-grid1">
            <div className="hero-banner-grid1-head">
              <h1 data-aos="fade-up" data-aos-duration="1000">Bounce Infinity Electric Scooters</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
              <div className="hero-banner-button">
                <button>Reserve for 499/-</button>
              </div>
            </div>
            <div className="onclick-button">
              {scooterImages.map((image, index) => (
                <button
                  key={index}
                  className={currentImage === image ? 'active' : ''}
                  onClick={() => handleButtonClick(image, index)}
                ></button>
              ))}
            </div>
          </div>
          <div className="hero-banner-grid2">
            <div className="hero-banner-grid2-bg">
              <div className="hero-banner-grid2-bg-image">
                <img src={maskGroup} alt="maskGroup" />
                <div className="scooter-image" data-aos="fade-up" data-aos-duration="1000">
                  <img src={currentImage} alt="Current Scooty" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroRespo/>

      <div className="product">
        <div className="container1">
          <div className="product-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Our Products</h2>
          </div>
          <div className="product-grid">
            <div className="product-grid1">
              <div className="product-grid1-option">
                <button>E1</button>
                <button>E1+</button>
                <button>E1LE</button>
              </div>
              <div className="product-grid1-color">
                <button>
                  <div className="red-dot-border">
                    <div className="red-dot"></div>
                  </div>
                </button>
                <button>
                  <div className="black-dot-border">
                    <div className="black-dot"></div>
                  </div>
                </button>
                <button>
                  <div className="grey-dot-border">
                    <div className="grey-dot"></div>
                  </div>
                </button>
              </div>
            </div>
            <div className="product-grid2">
              <div className="product-grid2-div">
                <div className="product-grid2-div1" data-aos="fade-up" data-aos-duration="1000">
                  <img src={redscooty3} alt="redscooty3" />
                </div>
                <div className="product-grid1-respo">
                  <div className="product-grid1-option">
                    <button>E1</button>
                    <button>E1+</button>
                    <button>E1LE</button>
                  </div>
                  <div className="product-grid1-color">
                    <button>
                      <div className="red-dot-border">
                        <div className="red-dot"></div>
                      </div>
                    </button>
                    <button>
                      <div className="black-dot-border">
                        <div className="black-dot"></div>
                      </div>
                    </button>
                    <button>
                      <div className="grey-dot-border">
                        <div className="grey-dot"></div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="product-grid2-div2">
                  <div className="product-grid2-div2-box">
                    <img src={scooterIcon} alt="scooterIcon" />
                    <span>Real World Range</span>
                    <h3>100+ km</h3>
                  </div>
                  <div className="product-grid2-div2-box">
                    <img src={materialIcon} alt="materialIcon" />
                    <span>Top speed</span>
                    <h3>55kmph</h3>
                  </div>
                  <div className="product-grid2-div2-box">
                    <img src={moneyIcon} alt="moneyIcon" />
                    <span>Starts From</span>
                    <h3>₹ 1,04,999</h3>
                  </div>
                  <div className="product-grid2-div2-box">
                    <img src={batteryIcon} alt="batteryIcon" />
                    <span>Battery</span>
                    <h3>2.5kWh</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-button" data-aos="fade-up" data-aos-duration="1000">
            <button>Reserve Now</button>
          </div>
        </div>
      </div>

      <div className="comparison">
        <div className="container1">
          <div className="comparison-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Comparison Between Models</h2>
          </div>
          <div className="comparison-grid">
            <div className="comparison-grid1">
              <h3>Our Products</h3>
              <div className="comparison-grid1-list">
                <h5>Price</h5>
                <h5>Product name</h5>
                <h5>Real World Range</h5>
                <h5>Top speed</h5>
                <h5>Battery</h5>
              </div>
            </div>
            <div className="comparison-grid2">
              <div className="comparison-grid2-div1">
                <div className="comparison-grid2-div1-img">
                  <img src={scooty3} alt="scooty3" />
                </div>
                <div className="comparison-grid2-div1-price">
                  <img src={rupee} alt="rupee" />
                  <h4>1,08,064</h4>
                </div>
                <div className="comparison-grid2-div1-list">
                  <h5>E1LE</h5>
                  <h5>70+ km</h5>
                  <h5>65kmph</h5>
                  <h5>1.9kWh</h5>
                </div>
              </div>
              <div className="comparison-grid2-div2">
                <div className="comparison-grid2-div1-img">
                  <img src={scooty1} alt="scooty1" />
                </div>
                <div className="comparison-grid2-div1-price">
                  <img src={rupee} alt="rupee" />
                  <h4>1,04,999</h4>
                </div>
                <div className="comparison-grid2-div1-list">
                  <h5>E1+</h5>
                  <h5>100+ km</h5>
                  <h5>55kmph</h5>
                  <h5>2.5kWh</h5>
                </div>
              </div>
              <div className="comparison-grid2-div3">
                <div className="comparison-grid2-div1-img">
                  <img src={scooty2} alt="scooty2" />
                </div>
                <div className="comparison-grid2-div1-price">
                  <img src={rupee} alt="rupee" />
                  <h4>89,999</h4>
                </div>
                <div className="comparison-grid2-div1-list">
                  <h5>E1-</h5>
                  <h5>70+ km</h5>
                  <h5>65kmph</h5>
                  <h5>1.9kWh</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing">
        <div className="pricing-grid">
          <div className="pricing-head-respo" data-aos="fade-up" data-aos-duration="1000">
            <h2>Pricing Section</h2>
          </div>
          <div className="pricing-grid1">
            <div className="pricing-grid1-img"  data-aos="fade-up" data-aos-duration="1000">
                  <img src={currentImage2} alt="Current Scooty" />
              <div className="pricing-grid1-img-button">
                {scootyImages.map((image, index) => (
                  <button
                    key={index}
                    className={currentImage2 === image ? 'active' : ''}
                    onClick={() => handleButtonClick2(image, index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
          <div className="pricing-grid2">
            <div className="pricing-head" data-aos="fade-up" data-aos-duration="1000">
              <h2>Pricing Section</h2>
            </div>
            <div className="pricing-input">
              <h3>Select Variant</h3>
              <div className="pricing-input-box">
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
            </div>
            <div className="pricing-input2">
              <div className="pricing-input2-div1">
                <h3>Select Variant</h3>
                <div className="pricing-input-box">
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
              </div>
              <div className="pricing-input2-div2">
                <h3>Select Variant</h3>
                <div className="pricing-input-box">
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
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="dealership">
        <div className="container1">
          <div className="dealership-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Dealership Section</h2>
          </div>
          <div className="dealership-contant">
            <div className="dealership-head-respo">
              <h2>Dealership Section</h2>
            </div>
            <div className="dealership-contant1">
              <h3>PIN Code</h3>
              <div className="dealership-contant1-flex">
                <div className="dealership-contant1-flex1">
                  <div className="dealership-contant1-flex1-input">
                    <input type="number" placeholder='Enter PIN Code' />
                    <div className="dealership-contant1-flex1-go">
                      <button>GO</button>
                    </div>
                  </div>
                </div>
                <div className="dealership-contant1-flex2">
                  <h4>OR</h4>
                </div>
                <div className="dealership-contant1-flex3">
                  <button>Detect Nearby Dealrs</button>
                </div>
              </div>
            </div>
            <div className="dealership-contant2">
              <div className="dealership-contant2-box">
                <div className="dealership-contant2-box1">
                  <h4>Patel Motors Pvt LLP</h4>
                  <p>Marcus Dias</p>
                  <span>1.4 km</span>
                </div>
                <div className="dealership-contant2-box2">
                  <div className="red-arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className="white-arrow">
                    <img src={whiteArrow} alt="whiteArrow" />
                  </div>
                </div>
              </div>
              <div className="dealership-contant2-box">
                <div className="dealership-contant2-box1">
                  <h4>Patel Motors Pvt LLP</h4>
                  <p>Marcus Dias</p>
                  <span>1.4 km</span>
                </div>
                <div className="dealership-contant2-box2">
                  <div className="red-arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className="white-arrow">
                    <img src={whiteArrow} alt="whiteArrow" />
                  </div>
                </div>
              </div>
              <div className="dealership-contant2-box">
                <div className="dealership-contant2-box1">
                  <h4>Patel Motors Pvt LLP</h4>
                  <p>Marcus Dias</p>
                  <span>1.4 km</span>
                </div>
                <div className="dealership-contant2-box2">
                  <div className="red-arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className="white-arrow">
                    <img src={whiteArrow} alt="whiteArrow" />
                  </div>
                </div>
              </div>
              <div className="dealership-contant2-box">
                <div className="dealership-contant2-box1">
                  <h4>Patel Motors Pvt LLP</h4>
                  <p>Marcus Dias</p>
                  <span>1.4 km</span>
                </div>
                <div className="dealership-contant2-box2">
                  <div className="red-arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className="white-arrow">
                    <img src={whiteArrow} alt="whiteArrow" />
                  </div>
                </div>
              </div>
              <div className="dealership-contant2-box">
                <div className="dealership-contant2-box1">
                  <h4>Patel Motors Pvt LLP</h4>
                  <p>Marcus Dias</p>
                  <span>1.4 km</span>
                </div>
                <div className="dealership-contant2-box2">
                  <div className="red-arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className="white-arrow">
                    <img src={whiteArrow} alt="whiteArrow" />
                  </div>
                </div>
              </div>
              <div className="dealership-contant2-box">
                <div className="dealership-contant2-box1">
                  <h4>Patel Motors Pvt LLP</h4>
                  <p>Marcus Dias</p>
                  <span>1.4 km</span>
                </div>
                <div className="dealership-contant2-box2">
                  <div className="red-arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className="white-arrow">
                    <img src={whiteArrow} alt="whiteArrow" />
                  </div>
                </div>
              </div>
            </div>
            <div className="dealership-button-respo">
              <span>Show more</span>
            </div>
          </div>
        </div>
      </div>

      <div className="calculater">
        <div className="container2">
          <div className="calculater-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>EMI Calculator</h2>
          </div>
          <div className="caluculater-grid">
            <div className="caluculater-grid1">
              <div className="caluculater-grid1-main">
                <div className="caluculater-grid1-amount">
                  <h3>Loan Amount</h3>
                  <span>30,000</span>
                </div>
                <div className="caluculater-grid1-range">
                  <input type="range" min="0" max="100" value={value} onChange={handleChange} className="slider" />
                </div>
              </div>
              <div className="caluculater-grid1-main2">
                <div className="caluculater-grid1-amount">
                  <h3>Loan Tenure</h3>
                  <span>8 months</span>
                </div>
                <div className="caluculater-grid1-range2">
                  <input className='slider' type="range" />
                </div>
              </div>
            </div>
            <div className="caluculater-grid2">
              <div className="caluculater-grid2-div">
                <div className="caluculater-grid2-div-head">
                  <h4>Down Payment</h4>
                  <h4>
                    <img src={mediumRupee} alt="mediumRupee" />
                    1,04,422
                  </h4>
                </div>
                <p>Including 0% Processing fee other charges</p>
              </div>
              <div className="caluculater-grid2-div2">
                <div className="caluculater-grid2-div-head">
                  <h4>Monthly EMI</h4>
                  <h4>
                    <img src={mediumRupee} alt="mediumRupee" />
                    875
                  </h4>
                </div>
                <p>With 9.99% Rate of Interest</p>
              </div>
            </div>
          </div>
          <div className="calculater-input">
            <div className="calculater-input1">
              <h4>Down Payment</h4>
              <input type="number" placeholder='Enter amount' maxLength={6} />
            </div>
            <div className="calculater-input2">
              <h4>Interest</h4>
              <div className="calculater-input2-box">
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
            </div>
          </div>
          <div className="calculater-finance">
            <div className="calculater-finance-head">
              <div className="calculater-finance-poligon"></div>
              <h4>Benefits of Easy Finance</h4>
            </div>
            <div className="calculater-finance-list">
              <div className="calculater-finance-list-name">
                <div className="calculater-finance-list-dot"></div>
                <span>Loan approval in 5 minutes</span>
              </div>
              <div className="calculater-finance-list-name">
                <div className="calculater-finance-list-dot"></div>
                <span>Digital pre-approved offer</span>
              </div>
              <div className="calculater-finance-list-name">
                <div className="calculater-finance-list-dot"></div>
                <span>Low down payment</span>
              </div>
              <div className="calculater-finance-list-name">
                <div className="calculater-finance-list-dot"></div>
                <span>Easy documentation</span>
              </div>
              <div className="calculater-finance-list-name">
                <div className="calculater-finance-list-dot"></div>
                <span>Attractive interest rates</span>
              </div>
              <div className="calculater-finance-list-name">
                <div className="calculater-finance-list-dot"></div>
                <span>Zero processing fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="battery">
        <div className="container3">
          <div className="battery-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Portable battery</h2>
          </div>
          <div className="battery-flex">
            <div className="battery-flex-box">
              <h5>Charge everywhere at any plug point.</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="battery-flex-box-two">
              <img src={batteryScooty} alt="batteryScooty" />
            </div>
          </div>
        </div>
      </div>

      <Sliderdiv />

      <Accordion />

      <div className="press">
        <div className="container7">
          <div className="press-head"  data-aos="fade-up" data-aos-duration="1000">
            <h2>Press Statement</h2>
          </div>
          <div className="press-div-main">
            <div className="press-div-box">
              <img src={pressone} alt="pressone" />
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore1 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick1}>{showMore1 ? 'Show Less' : 'View more'}</button>
            </div>
            <div className="press-div-box">
              <img src={presstwo} alt="presstwo" />
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore2 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick2}>{showMore2 ? 'Show Less' : 'View more'}</button>
            </div>
            <div className="press-div-box">
              <img src={pressthree} alt="pressthree" />
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore3 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick3}>{showMore3 ? 'Show Less' : 'View more'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
