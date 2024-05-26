import React from 'react';
import './index.css';
import PhotoCarouselProps from './PhotoCarouselProps';
import  image_1 from './images/8.jpg';
import  image_2 from './images/DSC_2273.jpg';
import  image_3 from './images/DSC_2374-1.jpg';
import  image_4 from './images/DSC_2368.jpg';
import  image_7 from './images/הפנינה-חתימה-3616.jpg';
import  image_8 from './images/ישי-לא-חתום-3.jpg';
import  image_9 from './images/ישי-ללא-חתימה-2386.jpg';
import  image_10 from './images/ישי-ללא-חתימה-2394.jpg';
import  image_11 from './images/עם-חתימה-4406.jpg';


const Home: React.FC = () => {

      
    return (
        <div className="Home">
            <h2>אידיליה | הפנינה- בתי אבן יוקרתיים</h2>
            <img src={image_1} alt="Description of the image" />
            <img src={image_2} alt="Description of the image" />
            <img src={image_3} alt="Description of the image" />
            <img src={image_4} alt="Description of the image" />
            <img src={image_7} alt="Description of the image" />
            <img src={image_8} alt="Description of the image" />
            <img src={image_9} alt="Description of the image" />
            <img src={image_10} alt="Description of the image" />
            <img src={image_11} alt="Description of the image" />
            <p></p>
        </div>
    );
}

export default Home;