import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    quote: 'This organization has changed my life for the better.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Smith',
    quote: 'I am so grateful for the support and opportunities provided.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Alice Johnson',
    quote: 'Volunteering here has been an amazing experience.',
    image: 'https://via.placeholder.com/150',
  },
];

const videoTestimonials = [
  {
    id: 1,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
  {
    id: 2,
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);  // Change slide every 5 seconds

    return () => clearInterval(autoplay);  // Cleanup the interval on component unmount
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-teal-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">Testimonials</h2>
        <div className="relative overflow-hidden h-64">
          <AnimatePresence initial={false}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={index === current ? 'absolute inset-0 flex flex-row items-center bg-white p-8 lg:mx-80 rounded-lg shadow-lg' : 'hidden'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
               <div className='ml-10'>
               <p className="text-xl text-left ml-6 font-semibold mb-2">{testimonial.name}</p>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
               </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mt-12 mb-8 text-gray-800">Video Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoTestimonials.map((video) => (
            <div key={video.id} className="relative">
              <video
                className="w-full h-auto rounded-lg shadow-lg"
                controls
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
