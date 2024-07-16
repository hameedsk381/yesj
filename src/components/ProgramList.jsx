import React from 'react';
import { FaEnvelope, FaRegFileAlt, FaQuoteRight } from 'react-icons/fa';
import EventDetails from './EventDetails';
import { Link } from 'react-router-dom';
import ProgramItemCard from './ProgramItemCard';

const programsList = [
    {
      "id": 1,
      "imageUrl": "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721121486/little-children-trick-treating-halloween_53876-49128_kxwrgn.jpg",
      "title": "PEP",
      "description": "Personal Enhancement Programme"
    },
    {
      "id": 2,
      "imageUrl": "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721121486/little-children-trick-treating-halloween_53876-49128_kxwrgn.jpg",
      "title": "MAGIC",
      "description": "Men & Women Aiming Greater Initiative for Change"
    },
    {
      "id": 3,
      "imageUrl": "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721121486/little-children-trick-treating-halloween_53876-49128_kxwrgn.jpg",
      "title": "MuST",
      "description": "Multi SKill Training"
    },
    {
      "id": 4,
      "imageUrl": "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721121486/little-children-trick-treating-halloween_53876-49128_kxwrgn.jpg",
      "title": "SS",
      "description": "Summer Shapes"
    },
    {
      "id": 5,
      "imageUrl": "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721121486/little-children-trick-treating-halloween_53876-49128_kxwrgn.jpg",
      "title": "Yuvotsavaalu",
      "description": "TES-J's Youth Festival"
    },
    {
      "id": 6,
      "imageUrl": "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721121486/little-children-trick-treating-halloween_53876-49128_kxwrgn.jpg",
      "title": "VIP",
      "description": "Voluntary Immersion Programme"
    },
    {
      "id": 7,
      "imageUrl": "https://res.cloudinary.com/dwlbneeh4/image/upload/v1721121486/little-children-trick-treating-halloween_53876-49128_kxwrgn.jpg",
      "title": "SSP",
      "description": "Scholar Support Programme"
    }
  ]
  

const ProgramList = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" alt="Event" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-wider">Welcome to Our Event</h1>
        </div>
      </div>

      {/* Event Cards */}

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programsList.map((item) => (
            <ProgramItemCard key={item.id} programCardDetails={item}/>
        ))}

        </div>
      </div>

      {/* Newsletter Section */}
      {/* <div className="bg-gradient-to-r from-purple-500 to-indigo-600 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated</h2>
          <form className="space-y-4">
            <input type="email" className="w-full p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder="Enter your email" />
            <button type="submit" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default ProgramList;