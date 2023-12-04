import  { useState, useEffect } from 'react';
import './Slider.css';

const images = [
    'https://source.unsplash.com/random/1',
    'https://source.unsplash.com/random/2',
    'https://source.unsplash.com/random/3',
    'https://source.unsplash.com/random/4',
];

function Carouselslider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const autoplay = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);  // Change slide every 3 seconds

        return () => clearInterval(autoplay);  // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="slider">
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
