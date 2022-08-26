import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h4>Owner</h4> <hr />
            <h1>Prashanth kj</h1>
          </Col>
          <Col md={6}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Contact Number</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Prashanth</td>
                  <td>9731507840</td>
                  <td>Hospet</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Kumar</td>
                  <td>7019006264</td>
                  <td>Banglore</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Vinayaka</td>
                  <td>7019504346</td>
                  <td>Belagavi</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
