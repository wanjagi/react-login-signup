import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
