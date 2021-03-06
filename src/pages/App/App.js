import { useState, useEffect } from 'react';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import GameBoard from '../GameBoard/GameBoard';
import NewCard from '../NewCard/NewCard';
import NewClue from '../NewCard/NewClue';
import { Route, Routes } from 'react-router-dom'
import CardIndex from '../CardIndex/CardIndex';
import ClueCardIndex from '../CardIndex/ClueCardIndex';
import EditCard from '../EditCard/EditCard';
import EditClue from '../EditCard/EditClue';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Feedback from '../Feedback/Feedback';
import HowTo from '../HowTo';
function App() {
  const [user, setUser] = useState(getUser())
  const [editCard, setEditCard] = useState({})
  const [editClue, setEditClue] = useState({})
  const [chosenUser, setChosenUser] = useState({})
  const [chosenWork, setChosenWork] = useState({})
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

  //use 4 digit code to authenticate admin in user creation
  return (
    <div className="App">
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} setUser={setUser} user={user} />
      {user ? user.admin ? //ADMIN users can access everything
        <Routes>
          <Route path="/" element={<GameBoard />}></Route>
          <Route path="/feedback" element={<Feedback user={user} />}></Route>
          <Route path="/createCard" element={<NewCard />}></Route>
          <Route path="/createClue" element={<NewClue />}></Route>
          <Route path="/howto" element={<HowTo />}></Route>
          <Route path="/cards" element={<CardIndex setEditCard={setEditCard} />}></Route>
          <Route path="/clues" element={<ClueCardIndex setEditClue={setEditClue} />}></Route>
          <Route path="/cards/:number" element={<EditCard editCard={editCard} />}></Route>
          <Route path="/clues/:number" element={<EditClue editClue={editClue} />}></Route>
        </Routes>
        :
        //normal users can only access gameboard and feedback
        <Routes>
          <Route path="/" element={<GameBoard />}></Route>
          <Route path="/howto" element={<HowTo />}></Route>
          <Route path="/feedback" element={<Feedback user={user} />}></Route>
          <Route path="/auth" element={<AuthPage user={user} showLogin={showLogin} setShowLogin={setShowLogin} />}></Route>
        </Routes>
        :
        //Non users can only access login page
        <AuthPage showLogin={showLogin} setUser={setUser} />
        // <homepage></homepage>
      }
      <Footer />
    </div>
  );
}

export default App;
