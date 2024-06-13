import React, { useEffect, useRef, useState } from 'react'
import './socialDetail.scss';
import pressone from "../../assets/images/sociaMedia/pressone.png";
import presstwo from "../../assets/images/sociaMedia/presstwo.png";
import pressthree from "../../assets/images/sociaMedia/pressthree.png";
import sosialDetail from "../../assets/images/sociaMedia/sosialDetail.png";
import social1 from "../../assets/images/sociaMedia/social1.png";
import social2 from "../../assets/images/sociaMedia/social2.png";


export default function SocialDetail() {

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

  return (
    <div>

      <div className="socialDetail-div" ref={topRef}>
        <div className="container1">
          <div className="socialDetail-div-main">
            <img src={sosialDetail} alt="sosialDetail" />
            <div className="sdm-text">
              <h2 data-aos="fade-up" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            </div>
            <div className="sdm-grid">
              <div className="sdm-grid-div">
                <img src={social1} alt="social1" />
                <h4>Lorem Ipsum is simply dummy text</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </div>
              <div className="sdm-grid-div">
                <img src={social2} alt="social2" />
                <h4>Lorem Ipsum is simply dummy text</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="socialDetail">
        <div className="container1">
          <div className="social-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Related Media</h2>
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
          </div>
        </div>
      </div>

    </div>
  )
}
