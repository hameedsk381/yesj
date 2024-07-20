import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="bg-gradient-to-r from-red-400 to-blue-500 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out"
    >
      <div className="text-6xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-white">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
