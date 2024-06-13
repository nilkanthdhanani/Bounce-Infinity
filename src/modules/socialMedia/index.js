import React, { useEffect, useRef, useState } from 'react'
import './social.scss';
import pressone from "../../assets/images/sociaMedia/pressone.png";
import presstwo from "../../assets/images/sociaMedia/presstwo.png";
import pressthree from "../../assets/images/sociaMedia/pressthree.png";
import Sliderdiv from '../../utils/slider';


export default function Social() {

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

  const handleClick4 = () => {
    setShowMore4(!showMore4);
  };
  const [showMore4, setShowMore4] = useState(false);

  const handleClick5 = () => {
    setShowMore5(!showMore5);
  };
  const [showMore5, setShowMore5] = useState(false);

  const handleClick6 = () => {
    setShowMore6(!showMore6);
  };
  const [showMore6, setShowMore6] = useState(false);


  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={topRef}>

      <div className="social">
        <div className="container1">
          <div className="social-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Social Media</h2>
          </div>
          <div className="social-div">
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
            <div className="press-div-box">
              <img src={pressone} alt="pressone" />
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore4 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick4}>{showMore4 ? 'Show Less' : 'View more'}</button>
            </div>
            <div className="press-div-box">
              <img src={presstwo} alt="presstwo" />
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore5 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick5}>{showMore5 ? 'Show Less' : 'View more'}</button>
            </div>
            <div className="press-div-box">
              <img src={pressthree} alt="pressthree" />
              <h3>Lorem Ipsum</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text {' '}
                {showMore6 && (
                  <div className="pera-active-more">
                    Here is the second half of the paragraph. You can add more content here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                )}
              </p>
              <button type='submit' onClick={handleClick6}>{showMore6 ? 'Show Less' : 'View more'}</button>
            </div>
          </div>
        </div>
      </div>

      <Sliderdiv />

    </div>
  )
}
