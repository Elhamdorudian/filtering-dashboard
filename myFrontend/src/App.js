import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar';
import LoginForm from './components/LoginForm';
import Layout from './layout/Layout';
import OfferFilter from './components/OfferFilter';
import { useState } from 'react';


function App() {

  const[users,setUsers] = useState({})

  
  return (
    <Router>
      <Navbar users={users}/>      
    <Layout>
        <Routes>
          <Route exact path="/login" element={<LoginForm users={users} setUsers={setUsers} />} />
          <Route exact path="/offers" element={<OfferFilter/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
