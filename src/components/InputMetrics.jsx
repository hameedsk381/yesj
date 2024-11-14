import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { id: 1, label: 'People Helped', value: '10,000+', icon: '👥' },
  { id: 2, label: 'Projects Completed', value: '150+', icon: '📊' },
  { id: 3, label: 'Funds Raised', value: '$1,000,000+', icon: '💰' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ImpactMetrics = () => {
  return (
    <section className="py-16 px-8 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-transparent" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyBpZD0idmlzdWFsIiB2aWV3Qm94PSIwIDAgOTAwIDYwMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjkwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiMwMDEyMjAiPjwvcmVjdD48ZyBmaWxsPSIjQTcyMzNBIj48Y2lyY2xlIHI9IjMyIiBjeD0iNzg0IiBjeT0iMzg2Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjEyIiBjeD0iMTg2IiBjeT0iMjg4Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjE5IiBjeD0iNDQ2IiBjeT0iMTgyIj48L2NpcmNsZT48Y2lyY2xlIHI9IjI0IiBjeD0iNzgzIiBjeT0iNTgzIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE5IiBjeD0iODg1IiBjeT0iMTg1Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjE0IiBjeD0iNzg4IiBjeT0iNDc3Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjE3IiBjeD0iMTE1IiBjeT0iNDA2Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjIxIiBjeD0iNTE4IiBjeT0iNDI4Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjI0IiBjeD0iODYzIiBjeT0iNjEiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMTUiIGN4PSI1MTYiIGN5PSIzNjMiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMjQiIGN4PSI1MTQiIGN5PSI1OCI+PC9jaXJjbGU+PGNpcmNsZSByPSIxNSIgY3g9IjI1NyIgY3k9IjE1MCI+PC9jaXJjbGU+PGNpcmNsZSByPSIxNCIgY3g9IjI1OCIgY3k9IjczIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE1IiBjeD0iMzY4IiBjeT0iNTgyIj48L2NpcmNsZT48Y2lyY2xlIHI9IjEyIiBjeD0iMjU0IiBjeT0iMjIxIj48L2NpcmNsZT48Y2lyY2xlIHI9IjIwIiBjeD0iMjA3IiBjeT0iMzUzIj48L2NpcmNsZT48Y2lyY2xlIHI9IjEyIiBjeD0iMzgzIiBjeT0iNDMiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMjIiIGN4PSIyODkiIGN5PSI1NDAiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMzAiIGN4PSI3MiIgY3k9IjU1NSI+PC9jaXJjbGU+PGNpcmNsZSByPSIyOSIgY3g9IjMyMSIgY3k9IjM2OSI+PC9jaXJjbGU+PGNpcmNsZSByPSIyMyIgY3g9IjYyMyIgY3k9IjU1MSI+PC9jaXJjbGU+PGNpcmNsZSByPSIxOCIgY3g9IjQ2MCIgY3k9Ijk4Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjExIiBjeD0iMiIgY3k9IjUwOSI+PC9jaXJjbGU+PGNpcmNsZSByPSIxOSIgY3g9IjcyNiIgY3k9IjIyMSI+PC9jaXJjbGU+PGNpcmNsZSByPSIyMSIgY3g9Ijc0OSIgY3k9IjI4MCI+PC9jaXJjbGU+PGNpcmNsZSByPSIyNSIgY3g9IjM3NSIgY3k9IjQ5MyI+PC9jaXJjbGU+PGNpcmNsZSByPSIxMyIgY3g9IjY2NiIgY3k9IjQ0NCI+PC9jaXJjbGU+PGNpcmNsZSByPSIxNSIgY3g9IjM5MSIgY3k9IjM5NSI+PC9jaXJjbGU+PGNpcmNsZSByPSIxNCIgY3g9IjQiIGN5PSIxNCI+PC9jaXJjbGU+PGNpcmNsZSByPSIxMyIgY3g9IjIzOSIgY3k9IjEwIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE2IiBjeD0iODc2IiBjeT0iNDA3Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjE0IiBjeD0iNDYwIiBjeT0iMzI2Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjE1IiBjeD0iNjUxIiBjeT0iMzc1Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjE1IiBjeD0iMTgxIiBjeT0iNDE2Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjE2IiBjeD0iMTM2IiBjeT0iNTU4Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjIyIiBjeD0iMjUiIGN5PSIyODUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMTEiIGN4PSI4NzIiIGN5PSI1NDciPjwvY2lyY2xlPjxjaXJjbGUgcj0iMjIiIGN4PSIzODciIGN5PSIyMzgiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMzAiIGN4PSI3MDciIGN5PSI1NjEiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMTgiIGN4PSI2NDQiIGN5PSI4OSI+PC9jaXJjbGU+PGNpcmNsZSByPSIxOSIgY3g9Ijc5MCIgY3k9IjI0Ij48L2NpcmNsZT48Y2lyY2xlIHI9IjI3IiBjeD0iMTAzIiBjeT0iMjIyIj48L2NpcmNsZT48Y2lyY2xlIHI9IjIzIiBjeD0iMTg1IiBjeT0iMTg5Ij48L2NpcmNsZT48L2c+PC9zdmc+')", backgroundClip:"text", }}>
          Our Impact
        </h2>
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
          className="hover:text-white transform transition duration-300 ease-in-out"
        >
          <div className="text-6xl mb-4 ">{metric.icon}</div>
          <div className="text-4xl font-extrabold  mb-2">
            {metric.value}
          </div>
          <div className="text-2xl font-medium ">
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
