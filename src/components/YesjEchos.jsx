import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import echoes from '../assets/echoes.png'
const YesjEchos = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  const books = [
    {
      id: 1,
      title: 'The Great Gatsby',
      date: '1925-04-10',
      image: echoes,
      pdfUrl: 'https://example.com/the-great-gatsby.pdf'
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      date: '1960-07-11',
      image: echoes,
      pdfUrl: 'https://example.com/to-kill-a-mockingbird.pdf'
    },
    {
      id: 3,
      title: '1984',
      date: '1949-06-08',
      image: echoes,
      pdfUrl: 'https://example.com/1984.pdf'
    },
    {
      id: 4,
      title: 'Pride and Prejudice',
      date: '1813-01-28',
      image: echoes,
      pdfUrl: 'https://example.com/pride-and-prejudice.pdf'
    },
    {
      id: 5,
      title: 'The Catcher in the Rye',
      date: '1951-07-16',
      image: echoes,
      pdfUrl: 'https://example.com/the-catcher-in-the-rye.pdf'
    },
    {
      id: 6,
      title: 'One Hundred Years of Solitude',
      date: '1967-05-30',
      image: echoes,
      pdfUrl: 'https://example.com/one-hundred-years-of-solitude.pdf'
    },
    {
      id: 7,
      title: 'The Hobbit',
      date: '1937-09-21',
      image: echoes,
      pdfUrl: 'https://example.com/the-hobbit.pdf'
    },
    {
      id: 8,
      title: 'The Da Vinci Code',
      date: '2003-03-18',
      image: echoes,
      pdfUrl: 'https://example.com/the-da-vinci-code.pdf'
    },
    {
      id: 9,
      title: 'The Alchemist',
      date: '1988-01-01',
      image: echoes,
      pdfUrl: 'https://example.com/the-alchemist.pdf'
    },
    {
      id: 10,
      title: 'The Little Prince',
      date: '1943-04-06',
      image: echoes,
      pdfUrl: 'https://example.com/the-little-prince.pdf'
    },
    {
      id: 11,
      title: 'Harry Potter and the Philosopher\'s Stone',
      date: '1997-06-26',
      image: echoes,
      pdfUrl: 'https://example.com/harry-potter-and-the-philosophers-stone.pdf'
    },
    {
      id: 12,
      title: 'The Lord of the Rings',
      date: '1954-07-29',
      image: echoes,
      pdfUrl: 'https://example.com/the-lord-of-the-rings.pdf'
    },
    {
      id: 13,
      title: 'Don Quixote',
      date: '1605-01-16',
      image: echoes,
      pdfUrl: 'https://example.com/don-quixote.pdf'
    },
  ];

  const handleReadBook = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Full-width image */}
      <div className="w-full">
        <img
          src="https://yesj.org/assets/in-banners/banner-OurMission.jpg"
          alt="Book Library"
          className="w-full h-full object-fill"
        />
      </div>
      {/* <div className="flex items-center justify-center mt-5">
        <h1 className="text-2xl md:text-4xl text-black font-bold text-center">
          Discover Your Next Great Read
        </h1>
      </div> */}

      {/* Book cards */}
      <div className="container mx-auto px-4 my-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg h-75 shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-75  object-contain"
              />
              <div className="p-4 flex flex-col items-center justify-center">
                <h3 className="text-[1rem] text-center font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">Published: {book.date}</p>
                <button
                  onClick={() => handleReadBook(book.pdfUrl)}
                  className="bg-gradient-to-r from-red-500 to-blue-600 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded-md inline-flex justify-center items-center transition duration-300 ease-in-out"
                >
                  <span>Read</span>
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter section */}
      <section className="bg-gradient-to-r from-red-500 to-blue-600 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Subscribe to Our Newsletter
          </h2>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email for newsletter"
              className="flex-grow px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default YesjEchos;
