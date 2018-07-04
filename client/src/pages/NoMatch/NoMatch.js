import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h5 className="text-center">404:  The page you requested was not found.</h5>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
