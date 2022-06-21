/** @format */

import { Component } from "react";
import { Container, Button, Jumbotron } from "react-bootstrap";

class Welcome extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Jumbotron className="jumbotron-section">
          <h1>All Books Available</h1>
          <p className="mt-3">
            A good bookshop is not just about selling books from shelves, but
            reaching out into the world and making a difference.
          </p>
          <Button variant="success">More Info</Button>
        </Jumbotron>
      </Container>
    );
  }
}

export default Welcome;
