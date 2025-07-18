import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

import LoginSectionComponent from "../../components/layouts/LoginSection/LoginSectionComponent";

import login_page from "../../assets/images/login_page.jpg";
export default function LoginPage() {
  return (
    <>
      <Container
        fluid
        className="min-vh-100  align-items-center"
        style={{
          backgroundColor: "yellow",
          height: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <Row style={{ backgroundColor: "red", height: "100vh" }}>
          <Col
            md={4}
            lg={4}
            style={{ backgroundColor: "#d72759ff" }}
            className="d-flex justify-content-center  align-items-center"
          >
            <LoginSectionComponent />
          </Col>
          <Col md={8} lg={8} style={{ backgroundColor: "#249e09ff" }}>
            <img
              src={login_page}
              alt={"login page img"}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
