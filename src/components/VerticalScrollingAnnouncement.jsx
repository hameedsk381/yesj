import { IconArrowForward } from '@tabler/icons-react';
import React from 'react';
import { Marquee } from './Marquee';

const announcements = [
  { text: "Welcome to YES-J's official website!", link: "#", isNew: true },
  { text: "Check out our latest programs and initiatives.", link: "#", isNew: false },
  { text: "Join us in empowering the youth of Andhra Pradesh and Telangana.", link: "#", isNew: false },
  { text: "Donations are now open for our new community center project.", link: "#", isNew: true },
  { text: "Stay tuned for our upcoming events and workshops.", link: "#", isNew: false }
];

const VerticalScrollingAnnouncement = () => {
  return (
    <div className="relative w-full h-full  overflow-hidden">
      {/* <div className="absolute top-0 w-full bg-white text-black py-4 text-center text-xl font-bold shadow-lg z-10">
        Announcements
      </div> */}
<Marquee>
  hello
</Marquee>
      {/* Padding to ensure title does not overlap with scrolling content */}
      <div className="pt-12 h-full overflow-hidden relative">

        {/* Vertical scrolling for desktop */}
        <div className="hidden md:flex absolute top-0 w-full h-full animate-verticalScroll flex-col space-y-12">
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

        {/* Vertical scrolling for mobile */}
        <div className="md:hidden bg-red-500 absolute top-0 w-screen h-full animate-horizontalScroll flex flex-row justify-start space-x-8 overflow-x-auto">
          {announcements.map((announcement, index) => (
            <div key={index} className="text-center px-4 py-2 relative">
              {announcement.isNew && (
                <span className="absolute top-2 left-10 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              )}
              <p className="text-white mb-2 ml-8">{announcement.text}</p>
              <a
                href={announcement.link}
                className="text-yellow-300 hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
        <div className="md:hidden bg-red-500 absolute top-[120%] w-screen h-full animate-horizontalScroll flex flex-row justify-start space-x-8 overflow-x-auto">
          {announcements.map((announcement, index) => (
            <div key={index} className="text-center px-4 py-2 relative">
              {announcement.isNew && (
                <span className="absolute top-2 left-10 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </span>
              )}
              <p className="text-white mb-2 ml-8">{announcement.text}</p>
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