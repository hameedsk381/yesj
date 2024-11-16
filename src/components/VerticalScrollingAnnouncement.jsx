import { IconArrowForward } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';

const VerticalScrollingAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('https://api.example.com/announcements'); // Replace with your actual API endpoint
        const data = await response.json();
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="relative w-full h-full bg-red-500 md:bg-transparent overflow-hidden">
      {/* <div className="absolute top-0 w-full bg-white text-black py-4 text-center text-xl font-bold shadow-lg z-10">
        Announcements
      </div> */}

      {/* Padding to ensure title does not overlap with scrolling content */}
      <div className="pt-12 h-full overflow-auto relative">

        {/* Vertical scrolling for desktop */}
        <div className="hidden md:flex absolute top-0 w-full h-full animate-verticalScroll flex-col space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="text-center px-4">
              <div className="border border-gray-300 p-4 rounded-md bg-red-600 bg-opacity-80 relative">
                {announcement.isNew && (
                  <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                <p className="text-white mb-2">{announcement.text}</p>
                <a
                  href={announcement.link}
                  className="text-yellow-300 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex absolute top-[120%] w-full h-full animate-verticalScroll flex-col space-y-12">
          {announcements.map((announcement, index) => (
            <div key={index} className="text-center px-4">
              <div className="border border-gray-300 p-4 rounded-md bg-red-600 bg-opacity-80  relative">
                {announcement.isNew && (
                  <span className="absolute bottom-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    New
                  </span>
                )}
                <p className="text-white mb-2">{announcement.text}</p>
                <a
                  href={announcement.link}
                  className="text-yellow-300 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden  absolute top-0 w-screen h-full animate-verticalScroll flex flex-col space-y-12 overflow-hidden">
          {announcements.map((announcement, index) => (
            <div key={index} className="text-center px-4 py-2 relative">
              {announcement.isNew && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              )}
              <p className="text-white mb-2">{announcement.text}</p>
              <a
                href={announcement.link}
                className="text-yellow-300 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
        <div className="md:hidden  absolute top-[120%] w-screen h-full animate-verticalScroll flex flex-col space-y-12 overflow-hidden">
          {announcements.map((announcement, index) => (
            <div key={index} className="text-center px-4 py-2 relative">
              {announcement.isNew && (
                <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              )}
              <p className="text-white mb-2">{announcement.text}</p>
              <a
                href={announcement.link}
                className="text-yellow-300 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollingAnnouncement;