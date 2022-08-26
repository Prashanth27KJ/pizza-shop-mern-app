import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Terms() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={3}>
            <h1>Need help with a Terms and Conditions?</h1>
          </Col>
          <Col md={9}>
            <p>
              Terms and conditions are the vital details that businesses put in
              place to ensure that they protect their rights. However, you
              should also ensure that they are legal, enforceable, and serve
              their intended purpose. Otherwise, you leave your company exposed
              to legal liabilities or unwanted consequences. Rather than leave
              your contracts to best guesses, check out the information below to
              learn more about terms and conditions.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Terms;
