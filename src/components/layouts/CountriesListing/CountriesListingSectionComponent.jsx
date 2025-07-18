import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import CustomCardComponent from "../../common/Card/CustomCardComponent";

export default function CountriesListingSectionComponent({ countries = [] }) {
  return (
    <>
      <Row>
        {countries.map((country, index) => (
          <Col
            key={country.name}
            md={6}
            lg={6}
            style={{ padding: "2px", backgroundColor: "" }}
          >
            <CustomCardComponent
              title={country.name}
              subtitle={country.region}
              imageSrc={country.flag}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}
