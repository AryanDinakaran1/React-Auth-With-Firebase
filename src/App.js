import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import {auth} from './pages/firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import './App.css';

function App() {

  const [userAuth, setUserAuth] = useState();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user)
      {
        setUserAuth(true);
      }
      else
      {
        setUserAuth(false);
      }
    })
  })
  
  if (!userAuth) {
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <BrowserRouter>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;