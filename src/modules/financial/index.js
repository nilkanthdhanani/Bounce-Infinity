import React, { useEffect, useRef } from 'react'
import './financial.scss';
import rectangle1 from "../../assets/images/financial/Rectangle1.png";
import rectangle2 from "../../assets/images/financial/Rectangle2.png";
import rectangle3 from "../../assets/images/financial/Rectangle3.png";
import pdfimg from "../../assets/images/financial/pdfimg.png";
import { FaAngleDown } from "react-icons/fa6";


export default function Financial() {
  const topRef = useRef(null);
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div>
      <div className="financial-banner" ref={topRef}>
        <div className="financial-banner-main">
          <div className="financial-banner-main-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Financials</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>

      <div className="press2">
        <div className="container1">
          <div className="press-head" data-aos="fade-up" data-aos-duration="1000">
            <h2>Press Statement</h2>
          </div>
          <div className="press2-div">
            <div className="press2-div-grid">
              <img src={rectangle1} alt="rectangle1" />
              <h2>Unaudited Financial Results</h2>
              <span>December 2023</span>
            </div>
            <div className="press2-div-grid">
              <img src={rectangle2} alt="rectangle2" />
              <h2>Unaudited Financial Results</h2>
              <span>December 2023</span>
            </div>
            <div className="press2-div-grid">
              <img src={rectangle3} alt="rectangle3" />
              <h2>Unaudited Financial Results</h2>
              <span>December 2023</span>
            </div>
          </div>
        </div>
      </div>

      <div className="financial-select">
        <div className="container1">
          <div className="fs-input">
            <div className="fs-input-select">
              <select>
                <option selected>Select Report Type</option>
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
            <div className="fs-input-select">
              <select>
                <option selected>Select Year</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
              </select>
                <div className="drop">
                  <FaAngleDown />
                </div>
            </div>
          </div>
          <div className="fs-div">
            <div className="fs-div-grid">
              <div className="fs-div-grid-box"></div>
              <div className="fs-div-grid-file">
                <img src={pdfimg} alt="pdfimg" />
                <div className="fs-div-grid-file-head">
                  <h2>Unaudited Financial Results</h2>
                  <span>December 2023</span>
                </div>
              </div>
            </div>
            <div className="fs-div-grid">
              <div className="fs-div-grid-box"></div>
              <div className="fs-div-grid-file">
                <img src={pdfimg} alt="pdfimg" />
                <div className="fs-div-grid-file-head">
                  <h2>Unaudited Financial Results</h2>
                  <span>December 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
