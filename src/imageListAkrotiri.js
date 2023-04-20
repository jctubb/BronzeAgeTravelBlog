import React from 'react';
import './imageList.css';


const images = [
  {
    id: 16,
    title: 'The North Gate of Mycenae.',
    description: 'The second best gate at Mycenae. Constructed using very large, blocky stones in typical Mycenaean fashion.',
    imageSrc: './SideGate.jpg',
  },
];

const ImageListMycenae = () => (
  <div className="image-list">
    {images.map((image) => (
      <div className="image-item" key={image.id}>
        <img src={image.imageSrc} alt={image.title} />
        <div className="image-info">
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ImageListMycenae;