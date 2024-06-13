import React, { useEffect, useMemo, useRef, useState } from 'react';
import './topScooter.scss';
import scootyBG from "../../assets/images/topScooter/scootyBG.png";
import scootyHead from "../../assets/images/topScooter/scootyHead.png";
import scooty1 from "../../assets/images/topScooter/scooty1.png";
import scooty2 from "../../assets/images/topScooter/scooty2.png";
import scooty3 from "../../assets/images/topScooter/scooty3.png";
import arrow from "../../assets/images/topScooter/arrow.png";
import yallowScooty from "../../assets/images/topScooter/yallowScooty.png";
import grayScooty from "../../assets/images/topScooter/grayScooty.png";
import Accordion from '../../utils/accordion';
import HeroRespo from '../../utils/heroRespo';

export default function TopScooter() {

  const scooterImages = useMemo(() => [scootyHead, yallowScooty, grayScooty], []);
  const [currentImage, setCurrentImage] = useState(scootyHead);
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


  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="topScooter-banner" ref={topRef}>
        <div className="topScooter-banner-div">
          <div className="hero-contant">
            <div className="hero-contant1">
              <div className="hero-contant1-div">
                <h1 data-aos="fade-up" data-aos-duration="1000">Electric Scooters
                  in Bangalore</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.</p>
                <div className="hero-contant1-button">
                  <button>Book Now</button>
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
            </div>
            <div className="hero-contant2">
              <img src={scootyBG} alt="scootyBG" />
              <div className="hero-contant2-scooty">
                <img src={currentImage} alt="Current Scooty" data-aos="fade-up" data-aos-duration="1000" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroRespo />

      <div className="bangalore-div">
        <div className="container1">
          <div className="bangalore-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Top Electric Scooter Under 1 Lakh</h2>
          </div>
          <div className="bangalore-grid">
            <div className="bangalore-grid-box">
              <div className="bangalore-watermark">
                <div className="bangalore-watermark-scooty">
                  <img src={scooty1} alt="scooty1" />
                </div>
                <div className="bangalore-watermark-head">
                  <h3>E1LE</h3>
                  <p>Battery  -  1.9 kWh </p>
                  <p>Real World Range  -  70+ km </p>
                </div>
                <div className="bangalore-watermark-price">
                  <span>Price</span>
                  <h4>₹1,08,064</h4>
                </div>
                <div className="bangalore-watermark-button">
                  <button>Read More
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bangalore-grid-box">
              <div className="bangalore-watermark">
                <div className="bangalore-watermark-scooty">
                  <img src={scooty2} alt="scooty2" />
                </div>
                <div className="bangalore-watermark-head">
                  <h3>E1</h3>
                  <p>Battery  -  2.5 kWh </p>
                  <p>Real World Range  -  100+ km </p>
                </div>
                <div className="bangalore-watermark-price">
                  <span>Price</span>
                  <h4>₹1,04,999</h4>
                </div>
                <div className="bangalore-watermark-button">
                  <button>Read More
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bangalore-grid-box">
              <div className="bangalore-watermark">
                <div className="bangalore-watermark-scooty">
                  <img src={scooty3} alt="scooty3" />
                </div>
                <div className="bangalore-watermark-head">
                  <h3>E1+</h3>
                  <p>Battery  -  1.9 kWh </p>
                  <p>Real World Range  -  70+ km </p>
                </div>
                <div className="bangalore-watermark-price">
                  <span>Price</span>
                  <h4>₹89,999</h4>
                </div>
                <div className="bangalore-watermark-button">
                  <button>Read More
                    <img src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Accordion />
    </div>
  );
}
