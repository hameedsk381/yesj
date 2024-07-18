import React, { useState, useEffect } from 'react';
import './Gallery.css'; // Make sure to create a corresponding CSS file for styling
import { Container, Image, SimpleGrid, Modal } from '@mantine/core';

// Dynamically import all images from the gallery folder using Vite's import.meta.glob
const importAllImages = () => {
  const images = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg}');
  return Object.keys(images).map((key) => ({
    importFn: images[key],
    tags: ['All'],
  }));
};

const tags = ['All', 'YES-J General', 'Anniversary', 'PEP', 'SS', 'MuST', 'MAGIC', 'VIP', 'SSP', 'Yuvoṣṭsavaalu', 'Press'];

const Gallery = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const loadImages = async () => {
    const images = await Promise.all(importAllImages().map(async (img) => {
      const mod = await img.importFn();
      return { src: mod.default, tags: img.tags };
    }));
    setFilteredImages(images);
  };

  useEffect(() => {
    loadImages();
  }, []);

  const filterImages = (tag) => {
    setActiveTag(tag);
    if (tag === 'All') {
      loadImages();
    } else {
      setFilteredImages(prevImages => prevImages.filter(image => image.tags.includes(tag)));
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
    setSelectedImage(null);
  };

  return (
    <Container py={'4%'} size={'lg'}>
      <div className="tag-buttons mb-4 flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            className={`px-4 py-2 rounded-md ${activeTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => filterImages(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <SimpleGrid cols={3} spacing="lg">
        {filteredImages.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => openModal(image.src)}
          >
            <Image
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              radius="md"
              className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-black text-lg p-3 rounded-lg bg-white">Zoom</span>
            </div>
          </div>
        ))}
      </SimpleGrid>

      <Modal opened={modalOpened} onClose={closeModal} size="xl">
        {selectedImage && (
          <Image src={selectedImage} alt="Selected" />
        )}
      </Modal>
    </Container>
  );
};

export default Gallery;
