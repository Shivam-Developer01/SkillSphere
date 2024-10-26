import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const RegistrationDetails = ({onSubmit}) => {


  const [formData, setFormData] = useState({
    teamSize: '',
    updatedDate: '',
    deadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };


  
  const [participationType, setParticipationType] = useState("individual");
  // const [teamMin, setTeamMin] = useState(1);
  const [teamMax, setTeamMax] = useState(2);
  // const [startDateTime, setStartDateTime] = useState("");
  // const [endDateTime, setEndDateTime] = useState("");
  const [hideContactDetails, setHideContactDetails] = useState(false);
  const [maxRegistrations, setMaxRegistrations] = useState("");

  
  // Add your submit functionality here

  return (
    <Container className="my-5 p-5 shadow-lg rounded bg-white Center">
      <div className="rdContainer">
        <h3>Registrations Details</h3>

        <Form onSubmit={handleSubmit}>
          {/* Participation Type */}
          <Form.Group controlId="formParticipationType" className="mb-4">
            <Form.Label>Participation Type</Form.Label>
            <Row>
              <Col>
                <ToggleButtonGroup
                  type="radio"
                  name="participationType"
                  value={participationType}
                  onChange={(value) => setParticipationType(value)}
                >
                  <ToggleButton
                    id="radioIndividual"
                    value="individual"
                    variant="outline-primary"
                  >
                    Individual
                  </ToggleButton>
                  <ToggleButton
                    id="radioTeam"
                    value="team"
                    variant="outline-primary"
                  >
                    Participation as a team
                  </ToggleButton>
                </ToggleButtonGroup>
              </Col>
            </Row>
          </Form.Group>

          {/* Participation as a team: Min/Max */}
          {participationType === "team" && (
            <Form.Group controlId="formTeamLimits" className="mb-4">
              <Form.Label>Participation as a team</Form.Label>
              <Row>
                <Col>
                  <Form.Label>Min</Form.Label>
                  <Form.Control
                    type="number"
                    // value={teamMin}
                    
                    // min={1}
                  />
                </Col>
                <Col>
                  <Form.Label>Max</Form.Label>
                  <Form.Control
                   name="teamSize"
                   onChange={handleChange}
                    type="number"
                    // value={teamMax}
                    // onChange={(e) => setTeamMax(e.target.value)}
                    // min={2}
                  />
                </Col>
              </Row>
            </Form.Group>
          )}

          {/* Registration Start Date & Time */}
          <Form.Group controlId="formStartDateTime" className="mb-4">
            <Form.Label>Registration Start Date & Time</Form.Label>
            <Form.Control
              name="updatedDate"
              type="datetime-local"
              // value={startDateTime}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Registration End Date & Time */}
          <Form.Group controlId="formEndDateTime" className="mb-4">
            <Form.Label>Registration End Date & Time</Form.Label>
            <Form.Control
              name="deadline"
              type="datetime-local"
              // value={endDateTime}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Hide Contact Details */}
          <Form.Group controlId="formHideContactDetails" className="mb-4">
            <Form.Check
              type="switch"
              id="hideContactDetails"
              label="Hide your contact details from the opportunity page?"
              checked={hideContactDetails}
              onChange={(e) => setHideContactDetails(e.target.checked)}
            />
          </Form.Group>

          {/* Number of Registrations Allowed */}
          <Form.Group controlId="formMaxRegistrations" className="mb-4">
            <Form.Label>Number of Registrations allowed</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the count if only certain number of participants can apply"
              value={maxRegistrations}
              onChange={(e) => setMaxRegistrations(e.target.value)}
            />
          </Form.Group>

          {/* Continue Button */}
          <div className="text-center">
            <Button type="submit" variant="primary" size="lg">
              Next
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default RegistrationDetails;
