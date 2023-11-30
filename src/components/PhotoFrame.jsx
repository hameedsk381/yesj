import React from 'react';
import './PhotoFrame.css'; // Ensure to create the corresponding CSS file

const PhotoFrame = ({ imageUrl, caption }) => {
  return (
    <div className="photo-frame">
      <div className="photo" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      {/* {caption && <p className="caption">{caption}</p>} */}
    </div>
  );
};

export default PhotoFrame;