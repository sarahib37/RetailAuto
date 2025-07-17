import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/HomePage';
import BuyPage from './components/BuyPage';
import SellPage from './components/SellPage';
import WishPage from './components/WishPage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleLogin = (userData) => {
    setLoggedIn(true);
    setProfile(userData);
    // Persist user data in localStorage or sessionStorage
    localStorage.setItem('userProfile', JSON.stringify(userData));
    localStorage.setItem('loggedIn', true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setProfile(null);
    // Clear stored data
    localStorage.removeItem('userProfile');
    localStorage.removeItem('loggedIn');
  };

  useEffect(() => {
    // Retrieve persisted user data on mount
    const storedProfile = localStorage.getItem('userProfile');
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (storedProfile && isLoggedIn) {
      setLoggedIn(true);
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
    <Router>
      <Header
        loggedIn={loggedIn}
        userProfile={profile}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Routes>
        <Route path="/" element={
          <Homepage 
            userProfile={profile} 
            loggedIn={loggedIn}
            handleLogin={handleLogin}
            handleLogout={handleLogout}/>} />
        <Route path="/buy" element={<BuyPage userProfile={profile} />}/>
        <Route path="/sell" element={<SellPage />} />
        <Route
          path="/wish"
          element={
            loggedIn ? (
              <WishPage userId={profile?.id} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
