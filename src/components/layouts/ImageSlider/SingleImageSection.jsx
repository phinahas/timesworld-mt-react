import React from "react";

function SimpleImageComponent({ src, alt = "Image" }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: "400px", objectFit: "cover" }}
    />
  );
}

export default SimpleImageComponent;
