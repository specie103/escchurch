import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PersonCard from './LeadersCard';
import personData from '../LeadersData';

const Slider = () => {
  const isMobile = window.innerWidth < 800; // Check if screen is mobile

  return (
    <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      centerMode
      centerSlidePercentage={isMobile ? 100 : 20} // Set to 100 on mobile, 20 on larger screens
      emulateTouch
      swipeable
      transitionTime={500}
      interval={3000}
      showArrows={!isMobile} // Hide arrows on mobile
    >
      {personData.map(person => (
        <PersonCard
          key={person.id}
          name={person.name}
          position={person.position}
          imageSrc={person.imageSrc}
        />
      ))}
    </Carousel>
  );
};

export default Slider;
