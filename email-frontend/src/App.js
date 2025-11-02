import './App.css';
import React, { useState } from 'react';


function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}\nRemember me: ${remember}`);
  };

  return (
    <div className="App">
      <div className="app-banner">
        <h1 className="app-title">Important Email Retriever</h1>
      </div>
      <header className="App-header">
        {/* Left-side logo */}
        <div className="logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            className="App-logo"
            alt="logo"
          />
        </div>

        {/* Right-side login form */}
        <div className="form-container">
          <span>Email Login</span>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
