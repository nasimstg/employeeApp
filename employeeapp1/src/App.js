import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import { EmployeeProvider } from './context/EmployeeContext';
import Navbar from './components/Navbar';
import Fav from './pages/Favorite';
import EmployeeDetails from './pages/EmpDetails';

function App() {
  return (
    <Router>
      <EmployeeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Fav />} />
          <Route path="/employee" element={<EmployeeDetails />} />
        </Routes>
      </EmployeeProvider>
    </Router>
  );
}

export default App;