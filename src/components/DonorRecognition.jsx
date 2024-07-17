import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../assets/YESJ_Logo_Black.png'
const donors = [
  { name: 'John Doe', logo: logo1 },
  { name: 'Jane Smith', logo: logo1 },
  { name: 'ACME Corp', logo: logo1 },
  { name: 'Global Inc.', logo: logo1 },
  { name: 'Tech Solutions', logo: logo1 },
  { name: 'Innovate LLC', logo: logo1 },
  { name: 'Future Ventures', logo: logo1 },
  { name: 'Green Earth', logo: logo1 },
  { name: 'Skyline Enterprises', logo: logo1 },
  { name: 'Blue Ocean', logo: logo1 },
];

const DonorRecognition = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Our Donors</h2>

        {/* Scrolling Marquee */}
        <div className="overflow-x-hidden whitespace-nowrap mb-12">
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex space-x-8"
          >
            {donors.map((donor, index) => (
              <div key={index} className="inline-block text-center">
                <img 
                  src={donor.logo} 
                  alt={donor.name} 
                  className="object-cover mx-4 rounded-full " 
                />
                <p className="mt-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">{donor.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonorRecognition;
