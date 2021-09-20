import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from "./styles";

const ImageCarousel = ({ images, currentIndex }) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const [index, setIndex] = useState(currentIndex);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel fade touch activeIndex={index} onSelect={handleSelect}>
      {images.map(({ file_path }, imageIndex) =>
        <Carousel.Item key={imageIndex}>
          <img
            className="d-block w-100"
            src={IMAGE_URL+file_path}
            alt={file_path}
          />
        </Carousel.Item>
      )}
    </Carousel>
    </Container>
  );
};

export default ImageCarousel;