import React from 'react';
import { motion } from 'framer-motion';

const donors = [
  { name: 'John Doe', logo: 'https://via.placeholder.com/350' },
  { name: 'Jane Smith', logo: 'https://via.placeholder.com/350' },
  { name: 'ACME Corp', logo: 'https://via.placeholder.com/350' },
  { name: 'Global Inc.', logo: 'https://via.placeholder.com/350' },
  { name: 'Tech Solutions', logo: 'https://via.placeholder.com/350' },
  { name: 'Innovate LLC', logo: 'https://via.placeholder.com/350' },
  { name: 'Future Ventures', logo: 'https://via.placeholder.com/350' },
  { name: 'Green Earth', logo: 'https://via.placeholder.com/350' },
  { name: 'Skyline Enterprises', logo: 'https://via.placeholder.com/350' },
  { name: 'Blue Ocean', logo: 'https://via.placeholder.com/350' },
];

const featuredDonors = [
  {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/300',
    quote: 'I am proud to support this organization and its mission.',
  },
  {
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/300',
    quote: 'This organization has made a significant impact in my community.',
  },
  // Add more featured donors here...
];

const DonorRecognition = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Donors</h2>

        {/* Scrolling Marquee */}
        <div className="overflow-x-hidden whitespace-nowrap mb-12">
          <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex space-x-8"
          >
            {donors.map((donor, index) => (
              <div key={index} className="inline-block">
                <img src={donor.logo} alt={donor.name} className="object-contain mx-4 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured Donors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDonors.map((donor, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <img src={donor.photo} alt={donor.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{donor.name}</h3>
              <p className="text-gray-700 mb-4 italic">"{donor.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonorRecognition;
