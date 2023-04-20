import React from 'react';
import { Container } from 'react-bootstrap';

const PersonCard = ({ name, position, imageSrc }) => {
  return (
    <Container className='dc'>
      <div>
        <figure class='snip0069 blue'>
          <div class='image mx-auto'>
            <img
              src={imageSrc}
              alt={name}
              class='m-auto bg-light border border-1'
            />
          </div>
          <figcaption>
            <h3
              class='p-1 fs-6'
              dangerouslySetInnerHTML={{ __html: name }}
            ></h3>
            <p class='p-2 m-2 text-center'>{position} </p>
          </figcaption>
          <a href='#'></a>
        </figure>
      </div>
    </Container>
  );
};

export default PersonCard;
