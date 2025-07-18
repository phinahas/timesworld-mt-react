import React from 'react';
import { Container } from 'react-bootstrap';

function DividerWithText() {
  return (
    <Container className="my-1">
      <div className="d-flex align-items-center">
        <hr className="flex-grow-1" />
        <span className="mx-3">Or Sign In With</span>
        <hr className="flex-grow-1" />
      </div>
    </Container>
  );
}

export default DividerWithText;
