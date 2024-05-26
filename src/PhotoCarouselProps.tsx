import React, { useState, useEffect } from 'react';
import './index.css';

interface PhotoCarouselProps {
  images: string[];
  interval?: number;
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="photo-carousel">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
};

export default PhotoCarousel;
