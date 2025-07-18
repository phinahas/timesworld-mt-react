import React from "react";
import { Button } from "react-bootstrap";

export default function Simplebutton({
  label = "Sign In",
  onClick,
  variant = "primary",
  size = "lg",
  disabled = false,
}) {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className="w-100"
      style={{color: "#ffffffff", backgroundColor: "#343C54"}}
    >
      {label}
    </Button>
  );
}
