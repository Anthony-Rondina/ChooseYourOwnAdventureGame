import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import StoryCardIndex from '../StoryCardIndex/StoryCardIndex';
import NewCard from '../NewCard/NewCard';
import NewClue from '../NewCard/NewClue';
import { Route, Routes } from 'react-router-dom'
import CardIndex from '../CardIndex/CardIndex';
import ClueCardIndex from '../CardIndex/ClueCardIndex';
import EditCard from '../EditCard/EditCard';
import EditClue from '../EditCard/EditClue';
function App() {
  const [user, setUser] = useState(null)
  const [editCard, setEditCard] = useState({})
  const [editClue, setEditClue] = useState({})
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StoryCardIndex />}></Route>
        <Route path="/createCard" element={<NewCard />}></Route>
        <Route path="/createClue" element={<NewClue />}></Route>
        <Route path="/cards" element={<CardIndex setEditCard={setEditCard} />}></Route>
        <Route path="/clues" element={<ClueCardIndex setEditClue={setEditClue} />}></Route>
        <Route path="/cards/:number" element={<EditCard editCard={editCard} />}></Route>
        <Route path="/clues/:number" element={<EditClue editClue={editClue} />}></Route>
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;
