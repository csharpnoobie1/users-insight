import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NewNavbar';
import UserPage from './UserPage'; // Je UserPage component

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
    </Router>
  );

  
}

export default App;

