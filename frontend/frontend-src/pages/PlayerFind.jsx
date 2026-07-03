import { useState } from 'react';
import { Card, Button, Form, InputGroup, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlayerFind = () => {
  const [searchId, setSearchId] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchId) return;

    axios.get(`http://localhost:8080/api/players/${searchId}`)
      .then(response => {
        setPlayerData(response.data);
      })
      .catch(error => {
        console.error("Error finding player:", error);
        alert('Player not found!');
        setPlayerData(null);
      });
  };

  return (
    <Card className="shadow-sm mx-auto" style={{ maxWidth: '600px', backgroundColor: 'rgba(255,255,255,0.95)' }}>
      <Card.Header as="h4" className="bg-info text-white">Find Player by ID</Card.Header>
      <Card.Body>
        <div className="mb-4">
          <InputGroup>
            <Form.Control
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Player ID..."
            />
            <Button onClick={handleSearch} variant="primary">Search API</Button>
          </InputGroup>
        </div>

        {playerData && (
          <div>
            <h5 className="mb-3">Player Details</h5>
            <ListGroup variant="flush" className="border rounded">
              <ListGroup.Item><strong>ID:</strong> {playerData.playerId}</ListGroup.Item>
              <ListGroup.Item><strong>Name:</strong> {playerData.playerName}</ListGroup.Item>
              <ListGroup.Item><strong>Jersey Number:</strong> {playerData.jerseyNumber}</ListGroup.Item>
              <ListGroup.Item><strong>Role:</strong> {playerData.role}</ListGroup.Item>
              <ListGroup.Item><strong>Matches:</strong> {playerData.totalMatches}</ListGroup.Item>
              <ListGroup.Item><strong>Team:</strong> {playerData.teamName}</ListGroup.Item>
              <ListGroup.Item><strong>Country:</strong> {playerData.country}</ListGroup.Item>
            </ListGroup>

            <div className="d-grid gap-2 mt-4">
              <Button variant="warning" onClick={() => navigate(`/update-player/${playerData.playerId}`)}>
                Edit Player Details
              </Button>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default PlayerFind;
