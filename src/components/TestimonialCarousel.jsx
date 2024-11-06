import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import { useMediaQuery } from '@mantine/hooks';

const testimonials = [
  {
    name: 'John Doe',
    quote: 'This experience helped me to be more grateful to God for wss and thank more.',
    image: 'https://via.placeholder.com/150',
    role: 'Software Developer'
  },
  {
    name: 'Jane Smith',
    quote: 'I am so grateful for the support and opportunities provided. This experience helpe',
    image: 'https://via.placeholder.com/150',
    role: 'Software Developer'
  },
  {
    name: 'Alice Johnson',
    quote: 'Volunteering here has been an amazing experience. Thisorking on self-improvement so that I can complain less and thank more.',
    image: 'https://via.placeholder.com/150',
    role: 'Software Developer'
  },
  {
    name: 'Robert Brown',
    quote: 'The opportunities provided here have been life-changing. I am incredibly thankful for the experiences and the community.',
    image: 'https://via.placeholder.com/150',
    role: 'Software Engineer'
  }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      const autoplay = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);  // Change slide every 5 seconds

      return () => clearInterval(autoplay);  // Cleanup the interval on component unmount
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="py-16  ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">Testimonials</h2>
          <div className="relative overflow-hidden h-64">
            <AnimatePresence initial={false}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={index === current ? 'absolute inset-0 flex flex-col items-center bg-gradient-to-r from-blue-400 to-teal-400 p-6 rounded-lg' : 'hidden'}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaQuoteRight className="text-indigo-500 text-3xl mb-4" />
                  <q className="text-white  mb-6">{testimonial.quote}</q>
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={`Participant ${index + 1}`} className="w-16 h-16 rounded-full mr-4 object-cover" />
                    <div>
                      <p className="text-indigo-600 font-semibold">{testimonial.name}</p>
                      <p className="text-gray-100 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-teal-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">Testimonials</h2>
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl gap-3 shadow-lg flex flex-col items-center"
            >
              <FaQuoteRight className="text-indigo-500 text-4xl mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={`Participant ${index + 1}`} className="w-16 h-16 rounded-full mr-4 object-cover" />
                <div>
                  <p className="text-indigo-600 font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
