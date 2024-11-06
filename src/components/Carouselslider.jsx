import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import slider1 from '../assets/slider-01.jpg'
import slider2 from '../assets/slider-2.jpg'
import slider3 from '../assets/slider-3.jpg'


const slides = [
  {
    image: slider1,
    quote: 'I have dreams',
    tag: 'ENCOURAGE'
  },
  {
    image: slider2,
    quote: 'Together, we make a',
    tag: 'DIFFERENCE'
  },
  {
    image: slider3,
    quote: 'Empower',
    tag: 'COMMUNITIES'
  },
];

const slideVariants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const Carouselslider = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);  // Change slide every 5 seconds

    return () => clearInterval(autoplay);  // Cleanup the interval on component unmount
  }, []);

  const paginate = (newDirection) => {
    setCurrent([current + newDirection, newDirection]);
  };

  return (
    <div className="w-full h-full overflow-hidden relative">
      <AnimatePresence initial={false} custom={direction}>
        {slides.map((slide, index) => (
          index === current && (
            <motion.div
              key={index}
              className="w-full h-full absolute top-0 left-0"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute left-3 top-12 md:left-10 md:top-24 lg:left-16 lg:top-32 text-white text-xl md:text-2xl lg:text-3xl font-bold p-2 md:p-3">
                <motion.p
                  className='mb-2 ml-10 bg-red-500 w-fit text-white p-2 rounded-md'
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.quote}
                </motion.p>
                <motion.p
                  className='mb-2 bg-blue-500 w-fit text-white p-2 rounded-md'
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {slide.tag}
                </motion.p>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 md:h-4 md:w-4 rounded-full ${index === current ? 'bg-blue-500' : 'bg-gray-400'}`}
            onClick={() => paginate(index - current)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carouselslider;
