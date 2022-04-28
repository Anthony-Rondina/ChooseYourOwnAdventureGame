import { useState, useEffect } from 'react';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import StoryCardIndex from '../StoryCardIndex/StoryCardIndex';
import NewCard from '../NewCard/NewCard';
import NewClue from '../NewCard/NewClue';
import { Route, Routes } from 'react-router-dom'
import CardIndex from '../CardIndex/CardIndex';
import ClueCardIndex from '../CardIndex/ClueCardIndex';
import EditCard from '../EditCard/EditCard';
import EditClue from '../EditCard/EditClue';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
function App() {
  const [user, setUser] = useState()
  const [editCard, setEditCard] = useState({})
  const [editClue, setEditClue] = useState({})
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const currentUser = await getUser()
        setUser(currentUser)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])


  return (
    <div className="App">
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} setUser={setUser} user={user} />
      {user ?
        <Routes>
          <Route path="/" element={<StoryCardIndex />}></Route>
          <Route path="/createCard" element={<NewCard />}></Route>
          <Route path="/createClue" element={<NewClue />}></Route>
          <Route path="/cards" element={<CardIndex setEditCard={setEditCard} />}></Route>
          <Route path="/clues" element={<ClueCardIndex setEditClue={setEditClue} />}></Route>
          <Route path="/cards/:number" element={<EditCard editCard={editCard} />}></Route>
          <Route path="/clues/:number" element={<EditClue editClue={editClue} />}></Route>
        </Routes>
        :
        <AuthPage showLogin={showLogin} setUser={setUser} />
      }
      <Footer />
    </div>
  );
}

export default App;
