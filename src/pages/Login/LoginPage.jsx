import React from "react";

//bootstrap
import { Container, Row, Col } from "react-bootstrap";

import LoginSectionComponent from "../../components/layouts/LoginSection/LoginSectionComponent";

import login_page from "../../assets/images/login_page.jpg";
export default function LoginPage() {
  return (
    <>
      <Container
        className="min-vh-100"
        style={{
          backgroundColor: "",
        }}
      >
        <Row className="h-100">
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh", backgroundColor: "" }}
          >
            <div className="w-100 d-flex flex-column align-items-center justify-content-center">
              <LoginSectionComponent />
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Container className="d-flex flex-column align-items-center justify-content-center d-none d-md-block">
              <img
                src={login_page}
                alt={"login page img"}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
