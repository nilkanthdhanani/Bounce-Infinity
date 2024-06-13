import React from 'react'
import './slider.scss';
import person from "../../assets/images/home/person.png";
import Slider from "react-slick";

const Sliderdiv = () => {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
        <div>
            <div className="slider-container">
                <div className="container5">
                    <div className="client-head" data-aos="fade-up" data-aos-duration="1000">
                        <h2>What Our clients are saying</h2>
                    </div>
                    <div className="clint-slider">
                        <Slider {...settings}>
                            <div>
                                <div className="slider-box-oner" id='display-none'>
                                    <h2>“</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className="person-image-main">
                                        <img src={person} alt="person" />
                                    </div>
                                    <h3>Marcus Torff</h3>
                                </div>
                            </div>
                            <div>
                                <div className="slider-box-oner">
                                    <h2>“</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className="person-image-main">
                                        <img src={person} alt="person" />
                                    </div>
                                    <h3>Marcus Torff</h3>
                                </div>
                            </div>
                            <div>
                                <div className="slider-box-oner" id='display-none-tow'>
                                    <h2>“</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <div className="person-image-main">
                                        <img src={person} alt="person" />
                                    </div>
                                    <h3>Marcus Torff</h3>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="clint-slider-phone">
                        <div className="slider-box-one">
                            <h2>“</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <div className="person-image-main">
                                <img src={person} alt="person" />
                            </div>
                            <h3>Marcus Torff</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sliderdiv;
