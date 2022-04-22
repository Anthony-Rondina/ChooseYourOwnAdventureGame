import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import StoryCardIndex from '../StoryCardIndex/StoryCardIndex';
import NewCard from '../NewCard/NewCard';
import { Route, Routes } from 'react-router-dom'
import CardIndex from '../CardIndex/CardIndex';
import EditCard from '../EditCard/EditCard';
function App() {
  const [user, setUser] = useState(null)
  const [editCard, setEditCard] = useState({})
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StoryCardIndex />}></Route>
        <Route path="/create" element={<NewCard />}></Route>
        <Route path="/cards" element={<CardIndex setEditCard={setEditCard} />}></Route>
        <Route path="/cards/:number" element={<EditCard editCard={editCard} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
