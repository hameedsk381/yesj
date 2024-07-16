import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
