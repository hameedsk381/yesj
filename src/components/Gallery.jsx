import  { useState } from 'react';
import './Gallery.css'; // Make sure to create a corresponding CSS file for styling
import { Container, Image } from '@mantine/core';

const tags = ['All', 'YES-J General', 'Anniversary', 'PEP', 'SS', 'MuST', 'MAGIC', 'VIP', 'SSP', 'Yuvoṣṭsavaalu', 'Press'];
const galleryImages = [
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(1).jpg', tags: ['All', 'YES-J General'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(3).jpg', tags: ['All', 'Anniversary'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(4).jpg', tags: ['All', 'PEP'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(5).jpg', tags: ['All', 'SS'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(6).jpg', tags: ['All', 'MuSt'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(7).jpg', tags: ['All', 'MAGIC'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(8).jpg', tags: ['All', 'YES-J General'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(9).jpg', tags: ['All', 'MAGIC'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(10).jpg', tags: ['All', 'SS'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(11).jpg', tags: ['All', 'Anniversary'] },
    { src: 'https://yesj.org/assets/photos/YES-J%20General%20(12).jpg', tags: ['All', 'PEP'] },
    // ... more images
  ];
  

const Gallery = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  const filterImages = (tag) => {
    setActiveTag(tag);
    if (tag === 'All') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(image => image.tags.includes(tag)));
    }
  };

  return (
    <Container py={'2%'} size={'lg'}>
    <div className="tag-buttons">
      {tags.map(tag => (
        <button
          key={tag}
          className={activeTag === tag ? 'active' : ''}
          onClick={() => filterImages(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
    <div className="gallery-container"> {/* This div wraps the gallery for max-width and centering */}
      <div className="gallery">
        {filteredImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <Image src={image.src} alt={`Gallery item ${index}`}  />
          </div>
        ))}
      </div>
    </div>
  </Container>
  );
};

export default Gallery;
