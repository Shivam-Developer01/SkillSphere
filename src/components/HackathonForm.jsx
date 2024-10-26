import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BasicDetails = ({
  onSubmit
}) => {


  const [formData, setFormData] = useState({
    // logo: '',
    title: '',
    organization: '',
    location: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };



  const [aboutOpportunity, setAboutOpportunity] = useState("");
  const [logo, setLogo] = useState(
    "https://pbs.twimg.com/profile_images/1367784378059780101/S_xlFdLD_400x400.jpg"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = React.createRef();

  const countWords = (text) => {
    return text
      .replace(/<\/?[^>]+(>|$)/g, "")
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0).length;
  };

  const handleAboutChange = (content) => {
    setAboutOpportunity(content);
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);


    const wordCount = countWords(aboutOpportunity);

    if (wordCount < 500) {
      setErrorMessage(
        'The "About Opportunity" section must contain at least 500 words.'
      );
      return;
    }
    setErrorMessage("");

    console.log("Form Submitted:", {
      aboutOpportunity,
      logo,
    });

  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Container className="my-5 form-container p-5 shadow-lg rounded bg-white">
      <Row>
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <h2 className="text-center mb-4">Basic Opportunity Details</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formOpportunityLogo" className="mb-4">
              <center>
                <Form.Label className="font-weight-bold">
                  <h3>Opportunity Logo</h3>
                </Form.Label>
              </center>
              <div className="d-flex align-items-center">
                <img
                  src={logo}
                  alt="Opportunity Logo"
                  className="img-thumbnail mx-5"
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                />
                <Button
                  variant="outline-primary"
                  className="ml-4"
                  onClick={triggerFileInput}
                >
                  Change Logo
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handleLogoChange}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formOpportunitySubType" className="mb-4">
              <Form.Label className="font-weight-bold">
                Opportunity Sub Type
              </Form.Label>
              <Form.Control type="text" placeholder="Opportunity Sub Type" className="form-control-lg"
              name="location"
              onChange={handleChange}
              >
                {/* <option>Please Select Sub Type</option>
                <option>Online</option>
                <option>On-site</option>
                <option>Hybrid</option> */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formOpportunityTitle" className="mb-4">
              <Form.Label className="font-weight-bold">
                Opportunity Title
              </Form.Label>
              <Form.Control
              onChange={handleChange}
                name="title"
                type="text"
                className="form-control-lg"
                placeholder="Enter Opportunity Title"
                required
              />
            </Form.Group>

            <Form.Group controlId="formOrganisation" className="mb-4">
              <Form.Label className="font-weight-bold">
                Enter Your Organisation
              </Form.Label>
              <Form.Control
                name="organization"
                type="text"
                className="form-control-lg"
                defaultValue="Delhi skill and entrepreneurship university okhla 2"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formWebsiteURL" className="mb-4">
              <Form.Label className="font-weight-bold">Website URL</Form.Label>
              <Form.Control
                type="url"
                className="form-control-lg"
                placeholder="https://"
              />
            </Form.Group>

            <Form.Group controlId="formFestival" className="mb-4">
              <Form.Label className="font-weight-bold">
                Festival (optional)
              </Form.Label>
              <Form.Control
                type="text"
                className="form-control-lg"
                placeholder="In case this opportunity is part of a festival/campaign."
              />
            </Form.Group>

            <Form.Group controlId="formCategories" className="mb-4">
              <Form.Label className="font-weight-bold">Categories</Form.Label>
              <Form.Control type="text" placeholder="Enter Category" className="form-control-lg"
                name="category"
                onChange={handleChange}
              >
                {/* <option>Please select a category</option>
                <option>Technology</option>
                <option>Business</option>
                <option>Art</option>
                <option>Science</option> */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formLocations" className="mb-4">
              <Form.Label className="font-weight-bold">Location</Form.Label>
              <Form.Control as="select" className="form-control-lg">
                <option>Enter Location</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Goa</option>
                <option>Pune</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formAboutOpportunity" className="mb-5">
              <Form.Label className="font-weight-bold">
                About Opportunity *
              </Form.Label>
              <ReactQuill
                value={aboutOpportunity}
                onChange={handleAboutChange}
                placeholder="Mention all the details of the opportunity..."
                style={{ height: "200px" }}
              />
              <Form.Text className="text-muted">
                Minimum Word Limit: 500
              </Form.Text>
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="px-5"
              >
                Continue
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BasicDetails;
