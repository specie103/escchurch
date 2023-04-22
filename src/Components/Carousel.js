import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from '../images/happyc.jpg';
import slide2 from '../images/slidder2.jpg';
import slide3 from '../images/Choir2.jpg'
import slide5 from '../images/ways.jpg'
import slide4 from '../images/angel.jpg'

const items = [
  {
    id: 1,
    src: slide1,
    title: "Our Safe Haven",
    description: "Cherubim & Seraphim Movement Church, Surulere District Headquaters, AYO NI O.",
  },
  {
    id: 2,
    src: slide2,
    title: "Experience Heaven on Earth",
    description: "Transcendent, uplifting experience that connects you with the divine.",
  },
  {
    id: 3,
    src: slide4,
    title: "Where Angels meet with the Faithful",
    description: "A place where you can connect with the divine and receive spiritual guidance and support from the heavenly realm.",
  },
  {
    id: 4,
    src: slide3,
    title: "A Sanctuary of Peace and Love",
    description: "Safe, welcoming environment where you can experience peace and love in the presence of the divine.",
  },
  {
    id: 5,
    src: slide5,
    title: "Divine guidance for your journey",
    description: "Spiritual guidance and support to help you navigate your life journey.",
  },
];

const MyCarousel = () => {
  return (
    <Carousel  fade interval={2500} className="carousel-fade hero">
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100 carouselImage"
            src={item.src}
            alt={item.title}
            
          />
          <Carousel.Caption className="container w-75 captions">
            <h3>{item.title}</h3>
            <p className="text-center">{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
