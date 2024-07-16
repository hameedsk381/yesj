import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { id: 1, label: 'People Helped', value: '10,000+', icon: '👥' },
  { id: 2, label: 'Projects Completed', value: '150+', icon: '📊' },
  { id: 3, label: 'Funds Raised', value: '$1,000,00+', icon: '💰' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ImpactMetrics = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Impact</h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              variants={cardVariants}
              className="bg-gray-200 p-6 rounded-lg shadow-lg"
            >
              <div className="text-6xl mb-4">{metric.icon}</div>
              <div className="text-6xl font-extrabold text-blue-600 mb-4">
                {metric.value}
              </div>
              <div className="text-xl font-medium text-gray-700">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
