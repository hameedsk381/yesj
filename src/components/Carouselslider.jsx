import  { useState, useEffect } from 'react';
import './Slider.css';

const images = [
    'https://picsum.photos/1200/1000',
    'https://picsum.photos/1300/1000',
    'https://picsum.photos/1500/1000',
    'https://picsum.photos/1800/1000',
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
