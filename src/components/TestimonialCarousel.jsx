import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight } from 'react-icons/fa';
import { useMediaQuery } from '@mantine/hooks';
import team1 from "../assets/team-1.jpg"
import team2  from "../assets/team-2.jpg"


const testimonials = [
  {
    name: 'John Doe',
    quote: 'Volunteering here has been an amazing experience. Thisorking on self-improvement so that I can complain less and thank more.',
    image: team1,
    role: 'Software Developer'
  },
  {
    name: 'Jane Smith',
    quote: 'Volunteering here has been an amazing experience. Thisorking on self-improvement so that I can complain less and thank more.',
    image: team2,
    role: 'Software Developer'
  },
  {
    name: 'Alice Johnson',
    quote: 'Volunteering here has been an amazing experience. Thisorking on self-improvement so that I can complain less and thank more.',
    image: team1,
    role: 'Software Developer'
  },
  {
    name: 'Robert Brown',
    quote: 'The opportunities provided here have been life-changing. I am incredibly thankful for the experiences and the community.',
    image: team2,
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
    <section className="py-16 bg-gradient-to-tr from-sky-200 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">Testimonials</h2>
        <div className=" flex gap-4 testimonial_box">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-transparent border border-2 border-blue-900 rounded-md">
            <div className="p-6 space-y-4">
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover w-full h-[180px] rounded-lg"
                />
              </div>
              <FaQuoteRight className="w-8 h-8 text-[#003366]" />
              <p className="text-sm text-gray-900">{testimonial.quote}</p>
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-700">{testimonial.role}</p>
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
