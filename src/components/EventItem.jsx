import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

function EventItem(props) {
  const { eventItemDetails } = props;
  const { imageUrl, title, description, stats, imageList, testimonials } = eventItemDetails;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        {/* Event Details Page */}
        <div className="bg-green-200 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-red-500">{title}</h2>
            <img src={imageUrl} alt="Event Detail" className="w-full h-96 object-cover rounded-xl mb-8" />
            <div className="space-y-6 text-gray-700">
              <p className="text-center">{description}</p>
            </div>
          </div>
        </div>

        {/* Stat Section */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 py-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-around items-center">
            {stats.map((stat, statIndex) => (
              <div key={statIndex} className="text-center px-4 py-6 flex flex-col">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{stat.count}</h3>
                <p className="text-lg md:text-xl text-white">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="py-16 px-4 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Event Gallery</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {imageList.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image.imageUrl}
                  alt={`Gallery Image ${imageIndex + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-red-100 to-blue-100 py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Participants Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, testimonialIndex) => (
              <div key={testimonialIndex} className="bg-white p-6 rounded-xl shadow-lg">
                <FaQuoteRight className="text-indigo-500 text-3xl mb-4" />
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={`Participant ${testimonialIndex + 1}`} className="w-12 h-12 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="text-indigo-600 font-semibold">{testimonial.participant}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
