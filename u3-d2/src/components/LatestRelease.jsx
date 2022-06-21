/** @format */

import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";

class LatestRelease extends Component {
  render() {
    return (
      <Container className="bg">
        <h1 className="text-center text-light mb-4">Fantasy Books</h1>
        <Row>
          {fantasyBooks.slice(0, 18).map((book) => (
            <Col key={book.title} xs={12} sm={6} md={4} lg={2} className="mb-5">
              <Card className="card">
                <Card.Img
                  style={{ width: "auto", height: "200px", objectFit: "cover" }}
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title className="card-title">{book.title}</Card.Title>
                  <Button
                    className="d-none d-sm-none d-md-block d-lg-block d-xl-block"
                    variant="primary">
                    BuyNow
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
