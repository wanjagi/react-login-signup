import { BrowserRouter as Router, Route, Routes, useSearchParams, Navigate } from 'react-router-dom';

import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { useEffect, useState } from 'react';
import { auth } from './firebase.js';


function App() {

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={user?<Navigate to="/dashboard"/>:<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
