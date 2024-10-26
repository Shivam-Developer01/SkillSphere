import React from 'react';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const OpportunityDetails = ({ basicDetails, registrationDetails }) => {
  return (
    <Container className="my-5">
      <Card className="shadow-sm p-3 mb-5 bg-white rounded">
        <Row className="align-items-center">
          <Col md={2}>
            <img src="logo_url.png" alt="Logo" className="img-fluid" />
          </Col>
          <Col md={10}>
            <h3>{basicDetails.title}</h3>
            <p className="text-muted">
              {basicDetails.organization} | {basicDetails.location}
            </p>
            <p>
              <span className="text-muted">Updated On: </span>
              {basicDetails.updatedDate}
            </p>
            <Badge pill bg="secondary">{basicDetails.category}</Badge>
          </Col>
        </Row>
        <Card.Body>
          <Row>
            <Col>
              <p className="lead">{basicDetails.cost}</p>
            </Col>
            <Col className="text-end">
              <Button variant="primary">Register</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="shadow-sm p-3 mb-5 bg-white rounded">
        <Row className="text-center">
          <Col>
            <p>Impressions</p>
            <h4>101</h4>
          </Col>
          <Col>
            <p>Registration Deadline</p>
            <h4>{registrationDetails.deadline}</h4>
          </Col>
          <Col>
            <p>Team Size</p>
            <h4>{registrationDetails.teamSize}</h4>
          </Col>
        </Row>
      </Card>

      <Card className="shadow-sm p-3 mb-5 bg-white rounded">
        <h5>Stages and Timelines</h5>
        <p>This is a demo representation. Add the rounds to view the user’s preview!</p>
        <ul>
          <li>
            <p>Stage 1: Online Quiz - Date to be announced.</p>
          </li>
          <li>
            <p>Stage 2: Online Code Contest - Date to be announced.</p>
          </li>
        </ul>
      </Card>

      <Card className="shadow-sm p-3 mb-5 bg-white rounded">
        <h5>All you need to know about {basicDetails.title}</h5>
        <p>{registrationDetails.guidelines}</p>
        <h6>Rules:</h6>
        <p>{registrationDetails.rules}</p>
      </Card>

      <Card className="shadow-sm p-3 mb-5 bg-white rounded">
        <h5>Important Dates & Deadlines</h5>
        <p>Registration Deadline: {registrationDetails.deadline}</p>
      </Card>

      <Button variant="success" className="mt-3">Publish</Button>
    </Container>
  );
};

export default OpportunityDetails;
