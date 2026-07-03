import { useState } from 'react';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlayerDelete = () => {
  const [deleteId, setDeleteId] = useState('');
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!deleteId) {
      alert("Please enter an ID to delete.");
      return;
    }

    axios.delete(`http://localhost:8080/api/players/${deleteId}`)
      .then(response => {
        alert(response.data || `Player with ID ${deleteId} deleted successfully!`);
        navigate('/');
      })
      .catch(error => {
        console.error("Error deleting player:", error);
        alert('Failed to delete player (Make sure ID exists).');
      });
  };

  return (
    <Card className="shadow-sm mx-auto border-danger" style={{ maxWidth: '600px', backgroundColor: 'rgba(255,255,255,0.95)' }}>
      <Card.Header as="h4" className="bg-danger text-white">Delete Player by ID</Card.Header>
      <Card.Body>
        <div className="mb-4">
          <Form.Label className="text-danger fw-bold">Enter Player ID to Delete:</Form.Label>
          <InputGroup>
            <Form.Control
              type="number"
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
              placeholder="Enter Player ID..."
            />
            <Button onClick={handleDelete} variant="danger">Delete Player directly</Button>
          </InputGroup>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PlayerDelete;
