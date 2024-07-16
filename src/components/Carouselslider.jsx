import  { useState, useEffect } from 'react';
import './Slider.css';

const images = [
    'https://yesj.org/assets/images/slider-01.jpg',
    'https://yesj.org/assets/images/slider-2.jpg',
    'https://yesj.org/assets/images/slider-3.jpg',
    'https://yesj.org/assets/in-banners/banner-OurMission.jpg',
    'https://yesj.org/assets/in-banners/banner-aboutus.jpg',
    'https://yesj.org/assets/in-banners/banner-programmes.jpg'
   
];

function Carouselslider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const autoplay = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 9000);  // Change slide every 3 seconds

        return () => clearInterval(autoplay);  // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="slider" style={{margin:'auto'}}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image} 
                    alt=""
                    className={index === current ? 'active' : ''}
                />
            ))}
        </div>
    );
}

export default Carouselslider;
