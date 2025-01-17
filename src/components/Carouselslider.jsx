import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import textbackground from '../assets/text-background.png';

// Dynamically load all images using Vite's import.meta.glob
const images = import.meta.glob('../assets/website/*.{jpg,png,jpeg}', { eager: true });
const slides = Object.keys(images).map((path) => ({
  image: images[path].default || images[path],
}));

// Cache variants outside the component
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Carouselslider = React.memo(() => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);
    return () => clearInterval(autoplay);
  }, []);

  const paginate = useCallback(
    (newDirection) => {
      setCurrent(([currentIndex]) => [(currentIndex + newDirection + slides.length) % slides.length, newDirection]);
    },
    [slides.length]
  );

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
                x: { type: 'spring', stiffness: 200, damping: 25 },
                opacity: { duration: 0.2 },
              }}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
              />
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
});

export default Carouselslider;
