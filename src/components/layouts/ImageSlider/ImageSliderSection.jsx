import { useState } from "react";
import { Carousel, Button } from "react-bootstrap";

function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="position-relative">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        className="w-100"
        indicators={false}
      >
        {images.map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Slide ${idx + 1}`}
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        className="position-absolute start-50 translate-middle-x d-flex align-items-center"
        style={{ bottom: "60px" }} // Move the controls higher (adjust as needed)
      >
        <Button
          variant="link"
          onClick={() => setIndex(index > 0 ? index - 1 : images.length - 1)}
          className="me-2"
        >
          &lt;
        </Button>
        {/* Dots */}
        <div className="d-flex align-items-center">
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setIndex(idx)}
              style={{
                fontSize: "2rem",
                color: idx === index ? "#343a40" : "#ccc",
                margin: "0 0.3rem",
                lineHeight: 1,
                userSelect: "none",
                cursor: "pointer", // Make it look clickable
                transition: "color 0.2s",
              }}
            >
              &middot;
            </span>
          ))}
        </div>
        <Button
          variant="link"
          onClick={() => setIndex((index + 1) % images.length)}
          className="ms-2"
        >
          &gt;
        </Button>
      </div>
    </div>
  );
}

export default ImageSlider;
