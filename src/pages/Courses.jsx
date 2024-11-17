import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BadgeCard } from '../components/BadgeCard';

// Updated coursesData to include images for each course
const coursesData = [
  {
    category: 'Technical Courses',
    courses: [
      { id: 1, title: 'MERN Full Stack', description: 'Learn to build full-stack applications using MongoDB, Express, React, and Node.js.', pageLink: '/courses/mern-full-stack', image: 'https://yesj.org/assets/p3-822182f8.png', badges: [{ emoji: '📚', label: 'Course' }], duration: '12 weeks' },
      { id: 2, title: 'IoT Basics', description: 'Introduction to Internet of Things and how to build IoT applications.', pageLink: '/courses/iot-basics', image: 'https://yesj.org/assets/p3-822182f8.png', badges: [{ emoji: '📚', label: 'Course' }], duration: '8 weeks' },
      { id: 3, title: 'Digital Marketing', description: 'Master the fundamentals of digital marketing strategies.', pageLink: '/courses/digital-marketing', image: 'https://yesj.org/assets/p3-822182f8.png', badges: [{ emoji: '📚', label: 'Course' }], duration: '10 weeks' },
      { id: 4, title: 'SEO Essentials', description: 'Learn the basics of Search Engine Optimization to improve website visibility.', pageLink: '/courses/seo-essentials', image: 'https://yesj.org/assets/p3-822182f8.png', badges: [{ emoji: '📚', label: 'Course' }], duration: '6 weeks' },
    ],
  },
  {
    category: 'Non-Technical Courses',
    courses: [
      { id: 5, title: 'English Language Basics', description: 'Improve your English language skills for everyday communication.', pageLink: '/courses/english-language', image: 'path/to/english-course-image.jpg', badges: [{ emoji: '📚', label: 'Course' }], duration: '4 weeks' },
    ],
  },
];

const Courses = () => {
  const navigate = useNavigate();

  const handleViewCourse = (pageLink) => {
    navigate(pageLink);
  };

  return (
    <div className="container mx-auto p-12">
      {coursesData.map((categoryData) => (
        <div key={categoryData.category} className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">{categoryData.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categoryData.courses.map((course) => (
              <BadgeCard 
                key={course.id}
                image={course.image}
                title={course.title}
                description={course.description}
                badges={course.badges}
                duration={course.duration}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
