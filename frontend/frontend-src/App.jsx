import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavBar/NavbarComponent';
import PlayerList from './pages/PlayerList';
import PlayerCreate from './pages/PlayerCreate';
import PlayerUpdate from './pages/PlayerUpdate';
import PlayerFind from './pages/PlayerFind';
import PlayerDelete from './pages/PlayerDelete';
import './App.css';

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container" style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<PlayerList />} />
          <Route path="/add-player" element={<PlayerCreate />} />
          <Route path="/update-player" element={<PlayerUpdate />} />
          <Route path="/update-player/:id" element={<PlayerUpdate />} />
          <Route path="/find-player" element={<PlayerFind />} />
          <Route path="/delete-player" element={<PlayerDelete />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
