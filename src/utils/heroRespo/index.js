import React, { useEffect, useMemo, useState } from 'react';
import "./heroRespo.scss";
import redScootyM from "../../assets/images/home/redScootyM.png";
import grayScootyM from "../../assets/images/home/grayScootyM.png";
import yellowScootyM from "../../assets/images/home/yellowScootyM.png";

const HeroRespo = () => {

    const scooterImagesPhone = useMemo(() => [redScootyM, grayScootyM, yellowScootyM], []);
    const [currentImagePhone, setCurrentImagePhone] = useState(redScootyM);
    const [currentIndexPhone, setCurrentIndexPhone] = useState(0);

    const handleButtonClickPhone = (image, index) => {
        setCurrentImagePhone(image);
        setCurrentIndexPhone(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndexPhone + 1) % scooterImagesPhone.length;
            setCurrentImagePhone(scooterImagesPhone[nextIndex]);
            setCurrentIndexPhone(nextIndex);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndexPhone, scooterImagesPhone]);

    return (
        <>
            <div className="hero-banner-respo">
                <div className="hero-banner-respo-main">
                    <div className="hero-banner-respo-bg">
                        <div className="hbr-contant">
                            <h1>Bounce Infinity Electric Scooters</h1>
                            <div className="hbr-contant-pera">
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry Lorem Ipsum.</p>
                            </div>
                            <div className="hbr-contant-button">
                                <button>Reserve Now</button>
                            </div>
                            <div className="hbr-contant-img">
                                <img src={currentImagePhone} alt="Current Scooty" />
                            </div>
                            <div className="hbr-onclick-button">
                                {scooterImagesPhone.map((image, index) => (
                                    <button
                                        key={index}
                                        className={currentImagePhone === image ? 'active' : ''}
                                        onClick={() => handleButtonClickPhone(image, index)}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroRespo;
