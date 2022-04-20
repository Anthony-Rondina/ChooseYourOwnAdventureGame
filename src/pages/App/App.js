import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import { Route, Routes } from 'react-router-dom'
function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
      {user ?
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        :
        <AuthPage setUser={setUser} />
      }

    </main>
  );
}

export default App;
