import React from 'react';
import StoryMap from './StoryMap';
import FeaturedStories from './FeaturedStories';

const locations = [
  { position: [34.0522, -118.2437], title: 'Los Angeles, USA', description: 'Clean Water Project' },
  { position: [13.7563, 100.5018], title: 'Bangkok, Thailand', description: 'School Building Project' },
  // Add more locations here...
];

const SuccessStories = () => {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Success Stories</h2>
        <div className="mb-12">
          <StoryMap locations={locations} />
        </div>
        <FeaturedStories />
      </div>
    </section>
  );
};

export default SuccessStories;
