import { useState, useEffect } from 'react';
import { Table, Card } from 'react-bootstrap';
import axios from 'axios';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/players/all')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Card className="shadow-sm">
      <Card.Header as="h4" className="bg-primary text-white">Player Roster</Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Jersey No.</th>
              <th>Role</th>
              <th>Matches</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {players.length > 0 ? (
              players.map(player => (
                <tr key={player.playerId}>
                  <td>{player.playerId}</td>
                  <td>{player.playerName}</td>
                  <td>{player.jerseyNumber}</td>
                  <td>{player.role}</td>
                  <td>{player.totalMatches}</td>
                  <td>{player.teamName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No players found</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default PlayerList;
