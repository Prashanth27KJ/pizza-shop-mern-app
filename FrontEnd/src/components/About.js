import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <h1>Who we are</h1>
      <p>
        loremis simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <Row>
        <Col md={6}>
          <h1>Our Speciality</h1>
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Col>
        <Col md={6}>
          <h1>Our Cheif</h1>
          sheets containing Lorem Ipsum passages, and more recently with desktop
          sheets containing Lorem Ipsum passages, and more recently with desktop
          sheets containing Lorem Ipsum passages, and more recently with desktop
          sheets containing Lorem Ipsum passages, and more recently with desktop
        </Col>
      </Row>
    </Container>
  );
}

export default About;
