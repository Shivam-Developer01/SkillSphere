import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import BasicDetails from "./HackathonForm"; // Import BasicDetails component
import '../App.css';

// Import your images
import Webinar from '../store/images/Rectangle-382.png';
import Workshops from '../store/images/workshop.jpg';
import Bootcamp from '../store/images/online-bootcamp-programs.webp';
import Hackathon from '../store/images/hackathon-doodle-hand-drawing-team-programmers-web-developers-managers-graphic-designers-deve_88138-1348.avif';

const HostOpportunity = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const handleCreateClick = (type) => {
    setSelectedOpportunity(type); // Set the selected opportunity type
  };

  if (selectedOpportunity) {
    // If an opportunity type is selected, render the BasicDetails component
    return <BasicDetails opportunityType={selectedOpportunity} />;
  }

  return (
    <Container className="my-5">
      {/* Main Hosting Section */}
      <Row className="text-center">
        <Col>
          <h4>What you want to host <span role="img" aria-label="hand-wave">👋</span></h4>
          <p>For Engaging your target audience</p>
        </Col>
      </Row>

      {/* Engagement Options Section */}
      <Row className="g-3">
        {[
          { title: "Webinars", img: Webinar },
          { title: "Workshops", img: Workshops },
          { title: "Bootcamp", img: Bootcamp },
          { title: "Hackathons", img: Hackathon },
        ].map((item, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="h-100 shadow border-0 card-size mx-3"> {/* Changed shadow-sm to shadow */}
              <Card.Img variant="top" src={item.img} alt={item.title} className="square-image" />
              <Card.Body>
                <Card.Title className="text-danger">
                  {item.title}
                </Card.Title>
                <Button variant="link" className="text-decoration-none" onClick={() => handleCreateClick(item.title)}>
                  Create {item.title} &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HostOpportunity;
