import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlayerCreate = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    playerName: Yup.string()
      .required('Player name is required')
      .matches(/^([A-Z][a-zA-Z]*)(\s[A-Z][a-zA-Z]*)*$/, 'Each word in the player name must start with a capital letter'),
    jerseyNumber: Yup.number()
      .typeError('Jersey number must be a number')
      .required('Jersey number is required')
      .min(1, 'Jersey number must be between 1 and 99')
      .max(99, 'Jersey number must be between 1 and 99'),
    role: Yup.string()
      .required('Role is required')
      .matches(/^(Batsman|Bowler|Keeper|All Rounder)$/, 'Role must be Batsman, Bowler, Keeper, or All Rounder'),
    totalMatches: Yup.number()
      .typeError('Total Matches must be a number')
      .required('Total Matches is required')
      .min(0, 'Total Matches cannot be negative'),
    teamName: Yup.string()
      .required('Team Name should not be blank'),
    country: Yup.string()
      .required('Country/State Name should not be blank'),
    description: Yup.string()
  });

  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:8080/api/players/add', values)
      .then(response => {
        alert('Player Added Successfully!');
        setSubmitting(false);
        navigate('/');
      })
      .catch(error => {
        console.error("Error saving player:", error);
        alert('Failed to add player');
        setSubmitting(false);
      });
  };

  return (
    <Card className="shadow-sm mx-auto" style={{ maxWidth: '800px', backgroundColor: 'rgba(255,255,255,0.95)' }}>
      <Card.Header as="h4" className="bg-success text-white">Add New Player</Card.Header>
      <Card.Body>
        <Formik
          initialValues={{
            playerName: '',
            jerseyNumber: '',
            role: '',
            totalMatches: '',
            teamName: '',
            country: '',
            description: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="playerName"
                      value={values.playerName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.playerName && !!errors.playerName}
                      placeholder="e.g. Virat Kohli"
                    />
                    <Form.Control.Feedback type="invalid">{errors.playerName}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Jersey Number</Form.Label>
                    <Form.Control
                      type="number"
                      name="jerseyNumber"
                      value={values.jerseyNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.jerseyNumber && !!errors.jerseyNumber}
                    />
                    <Form.Control.Feedback type="invalid">{errors.jerseyNumber}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      name="role"
                      value={values.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.role && !!errors.role}
                    >
                      <option value="">Select Role</option>
                      <option value="Batsman">Batsman</option>
                      <option value="Bowler">Bowler</option>
                      <option value="Keeper">Keeper</option>
                      <option value="All Rounder">All Rounder</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Total Matches</Form.Label>
                    <Form.Control
                      type="number"
                      name="totalMatches"
                      value={values.totalMatches}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.totalMatches && !!errors.totalMatches}
                    />
                    <Form.Control.Feedback type="invalid">{errors.totalMatches}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="teamName"
                      value={values.teamName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.teamName && !!errors.teamName}
                    />
                    <Form.Control.Feedback type="invalid">{errors.teamName}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Country/State</Form.Label>
                    <Form.Control
                      type="text"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={touched.country && !!errors.country}
                    />
                    <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Description (Optional)</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>

              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Submit Details
                </Button>
                <Button variant="secondary" type="button" onClick={() => navigate('/')}>
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default PlayerCreate;
