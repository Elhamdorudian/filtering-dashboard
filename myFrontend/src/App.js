import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar';
import LoginForm from './components/LoginForm';
import Layout from './layout/Layout';
import OfferFilter from './components/OfferFilter';
import { useState } from 'react';
import Test from './components/Test';


function App() {

const [validUser,setValidUser] = useState("");

  const handleValidUser = (user) => {
    setValidUser(user);
  }
  
  return (
    <Router>
      <Navbar validUser={validUser} /> 
    <Layout>
        <Routes>
          <Route exact path="/login" element={<LoginForm handleValidUser={handleValidUser} />} />
          <Route exact path="/offers" element={<OfferFilter/>} />
          <Route exact path="/test" element={<Test/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
