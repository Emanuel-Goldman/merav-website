import React from 'react';
import './index.css';
import PhotoCarouselProps from './PhotoCarouselProps';
import  myImage from 'images/DSC_2480p1.jpg';


const Home: React.FC = () => {

      
    return (
        <div className="Home">
            <h2>אידיליה | הפנינה- בתי אבן יוקרתיים</h2>
            <img src={myImage} alt="Description of the image" />
            {/* <PhotoCarouselProps images={images} interval={3000} /> */}
            <p></p>
        </div>
    );
}

export default Home;