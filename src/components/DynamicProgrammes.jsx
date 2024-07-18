import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Program from './Program';

const programs = [
  {
    id: 1,
    title: 'PEP',
    description: 'Personal Enhancement Programmes',
    imageUrl: 'https://yesj.org/assets/images/p1.png', // Replace with the actual path to the PEP image
    hoverColor: '#a2d5f2', // Example hover color, replace with actual color
  },
  {
    id: 2,
    title: 'MAGIC',
    description: 'Men & Women Aiming at Greater Initiatives for Change',
    imageUrl: 'https://yesj.org/assets/images/p2.png', // Replace with the actual path to the MAGIC image
    hoverColor: '#fcbad3', // Example hover color, replace with actual color
  },
  {
    id: 3,
    title: 'MuST',
    description: 'Multi Skill Training',
    imageUrl: 'https://yesj.org/assets/images/p3.png', // Replace with the actual path to the MuST image
    hoverColor: '#ffffd1', // Example hover color, replace with actual color
  },
  {
    id: 4,
    title: 'SS',
    description: 'Summer Shapes',
    imageUrl: 'https://yesj.org/assets/images/p4.png', // Replace with the actual path to the SS image
    hoverColor: '#c1e1c5', // Example hover color, replace with actual color
  },
  {
    id: 5,
    title: 'Yuvaotsavaalu',
    description: 'YES-I\'s Youth Festival',
    imageUrl: 'https://yesj.org/assets/images/p5.png', // Replace with the actual path to the Yuvaotsavaalu image
    hoverColor: '#beebe9', // Example hover color, replace with actual color
  },
  {
    id: 6,
    title: 'VIP',
    description: 'Voluntary Immersion Programme',
    imageUrl: 'https://yesj.org/assets/images/p6.png', // Replace with the actual path to the VIP image
    hoverColor: '#fde2e4', // Example hover color, replace with actual color
  },
  {
    id: 7,
    title: 'SSP',
    description: 'Scholar Support Programme',
    imageUrl: 'https://yesj.org/assets/images/p7.png', // Replace with the actual path to the VIP image
    hoverColor: '#fde2e4', // Example hover color, replace with actual color
  },
];

const DynamicProgrammes = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Our Programmes</h2>
        <div className="relative">
        
          <div
            ref={containerRef}
            className="flex overflow-x-hidden space-x-3 pb-4"
          >
             <motion.div
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex space-x-8"
          >
            {programs.map((item,index) => (
              <Program
                key={item.id}
                title={item.title}
                desc={item.description}
                poster={item.imageUrl} eventnum={index + 1}
              />
            ))}</motion.div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default DynamicProgrammes;
