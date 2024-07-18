// import  { useState, useEffect } from 'react';
// import './Slider.css';

// const images = [
//     'https://yesj.org/assets/images/slider-01.jpg',
//     'https://yesj.org/assets/images/slider-2.jpg',
//     'https://yesj.org/assets/images/slider-3.jpg',
   
   
// ];

// function Carouselslider() {
//     const [current, setCurrent] = useState(0);

//     useEffect(() => {
//         const autoplay = setInterval(() => {
//             setCurrent((prev) => (prev + 1) % images.length);
//         }, 3000);  // Change slide every 3 seconds

//         return () => clearInterval(autoplay);  // Cleanup the interval on component unmount
//     }, []);

//     return (
//         <div className="slider" style={{margin:'auto'}}>
//             {images.map((image, index) => (
//                 <img
//                     key={index}
//                     src={image} 
//                     alt=""
//                     className={index === current ? 'active' : ''}
//                 />
//             ))}
//         </div>
//     );
// }

// export default Carouselslider;
import { useState, useEffect } from 'react';

const slides = [
    {
        image: 'https://yesj.org/assets/images/slider-01.jpg',
        quote: 'I have dreams ENCOURAGE'
    },
    {
        image: 'https://yesj.org/assets/images/slider-2.jpg',
        quote: 'Together, we make a difference'
    },
    {
        image: 'https://yesj.org/assets/images/slider-3.jpg',
        quote: 'Empower communities'
    },
];

function Carouselslider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const autoplay = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);  // Change slide every 3 seconds

        return () => clearInterval(autoplay);  // Cleanup the interval on component unmount
    }, []);

    return (
        <div className="w-full overflow-hidden relative">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`w-full ${index === current ? 'block' : 'hidden'} relative`}
                >
                    <img
                        src={slide.image}
                        alt=""
                        className="w-full h-auto"
                    />
                    {index === current && (
                        <div className="absolute left-3 top-3 md:left-10 md:top-24 lg:left-16 lg:top-32 text-black text-sm md:text-2xl lg:text-3xl font-bold p-2 md:p-3 ">
                            <p className='mb-2'>" {slide.quote} "</p>
                            <button className="bg-gradient-to-r from-red-500 to-orange-500 shadow-lg py-1 px-2 md:py-2 md:px-4 rounded-md text-xs md:text-sm mt-2">
                                JOIN US
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Carouselslider;

