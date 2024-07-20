import React from 'react';

const announcements = [
  { text: "Welcome to YES-J's official website!", link: "#" },
  { text: "Check out our latest programs and initiatives.", link: "#" },
  { text: "Join us in empowering the youth of Andhra Pradesh and Telangana.", link: "#" },
  { text: "Donations are now open for our new community center project.", link: "#" },
  { text: "Stay tuned for our upcoming events and workshops.", link: "#" }
];

const VerticalScrollingAnnouncement = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-500 to-purple-500 text-white py-4 overflow-hidden relative">
      {/* Vertical scrolling for larger screens */}
      <div className="hidden md:flex absolute top-0 w-full h-full animate-verticalScroll flex-col space-y-8">
        {announcements.map((announcement, index) => (
          <div key={index} className="text-center px-4">
            <div className="border border-white p-4 rounded-md bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
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
      <div className="hidden md:flex absolute top-full w-full h-full animate-verticalScroll flex-col space-y-8">
        {announcements.map((announcement, index) => (
          <div key={index} className="text-center px-4">
            <div className="border border-white p-4 rounded-md bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
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

      {/* Horizontal scrolling for mobile */}
      <div className="md:hidden absolute top-0 w-full h-full flex flex-col space-y-4">
        <div className="flex w-full h-1/2 animate-horizontalScroll flex-row space-x-2">
          {announcements.map((announcement, index) => (
            <div key={index} className="flex-none w-full text-center px-4">
              <div className="border border-white p-4 rounded-md bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
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
        <div className="flex w-full h-1/2 animate-horizontalScrollReverse flex-row space-x-8">
          {announcements.map((announcement, index) => (
            <div key={index} className="flex-none w-full text-center px-4">
              <div className="border border-white p-4 rounded-md bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
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
      </div>
    </div>
  );
};

export default VerticalScrollingAnnouncement;
