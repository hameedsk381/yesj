import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import textbackground from '../assets/text-background.png';

// Import images using Vite's import.meta.glob with proper error handling
const images = import.meta.glob('/public/website/*.{jpg,png,jpeg}', { 
  eager: true,
  import: 'default'
});

// Create slides array with proper type checking and error handling
const slides = Object.entries(images).map(([path, image]) => {
  if (!image) {
    console.warn(`Failed to load image: ${path}`);
    return null;
  }
  return {
    image,
    path,
    alt: path.split('/').pop().split('.')[0] // Generate alt text from filename
  };
}).filter(Boolean); // Remove any null entries from failed loads

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const Carouselslider = () => {
  const [[current, direction], setCurrent] = useState([0, 0]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoplay);
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
                className="w-full h-full object-fill"
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
}

export default Carouselslider;
