import React, { useState } from 'react';
import './index.css';
import image_2g from './images/image_2g.jpg';
import image_3g from './images/image_3g.jpg';
import image_4g from './images/image_4g.jpg';
import image_5g from './images/image_5.jpeg';
import image_6g from './images/image_6.jpeg';
import image_7g from './images/image_7.jpg';
import image_8g from './images/image_8.jpg';


const images = [
  image_2g,
  image_3g,
  image_4g,
  image_5g,
  image_6g,
  image_7g,
  image_8g,
];

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="Home">
      <h2>אידיליה | הפנינה- בתי אבן יוקרתיים</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => openModal(image)}
            className="thumbnail"
          />
        ))}
      </div>
      {modalIsOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-button">Close</button>
            {selectedImage && <img src={selectedImage} alt="Selected" className="modal-image" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
