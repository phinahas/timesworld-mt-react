import { Card, Row, Col } from "react-bootstrap";

function CardComponent({ title, subtitle, imageSrc }) {
  return (
    <Card
      className="shadow-sm mb-3"
      style={{ width: "100%", height: "150px" }} // set a fixed height
    >
      <Row className="h-100" style={{ height: "100%" }}>
        <Col xs={5} className="h-100" style={{ height: "100%" }}>
          <Card.Img
            src={imageSrc}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col
          xs={6}
          className="d-flex flex-column justify-content-center h-100"
          style={{ height: "100%" }}
        >
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">{subtitle}</Card.Text>
        </Col>
      </Row>
    </Card>
  );
}

export default CardComponent;
