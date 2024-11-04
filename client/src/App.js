import React, { useState } from 'react';
import Login from './Login';
import PersonalList from './PersonalList';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [showLogin, setShowLogin] = useState(!token);

  const handleLogin = (newToken) => {
    setToken(newToken);
    setShowLogin(false);
  };

  const handleBack = () => {
    setShowLogin(true);
  };

  return (
    <div className="App">
      {showLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <PersonalList token={token} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;