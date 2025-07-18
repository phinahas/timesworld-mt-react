// components/FullscreenLoader.js
import React from "react";
import { Spinner } from "react-bootstrap";

const FullscreenLoader = ({ show = false, message = "Loading..." }) => {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1050,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" variant="primary" />
      <div style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</div>
    </div>
  );
};

export default FullscreenLoader;
