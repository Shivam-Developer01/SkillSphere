import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../App.css';

// Import your images
import Dsa from '../store/images/Dsa1.avif';
import Cyber from '../store/images/Cyber.webp';
import Entrepreneuship from '../store/images/Entrepreneurship.webp';
import Ai from '../store/images/AI_and_facial_recognition.webp';

const HostOpportunity = () => {
  return (
    <Container className="my-5">
      {/* Main Hosting Section */}
      <Row className="text-center">
        <Col>
          <h4>Live Seminars </h4>
        </Col>
      </Row>
      {/* Engagement Options Section */}
      <Row className="g-3">
        {[
          { title: "DSA", img: Dsa },
          { title: "Cyber Security", img: Cyber },
          { title: "Entrepreneurship", img: Entrepreneuship },
          { title: "AI", img: Ai },
        ].map((item, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="h-100 shadow border-0 card-size mx-3"> {/* Changed shadow-sm to shadow */}
              <Card.Img variant="top" src={item.img} alt={item.title} className="square-image" />
              <Card.Body className="MeetButton">
                <Card.Title className="text-danger">
                  {item.title}
                </Card.Title>
                <button type="button" className="btn btn-primary">Join Now</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HostOpportunity;
