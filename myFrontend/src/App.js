import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar';
import LoginForm from './components/LoginForm';
import Layout from './layout/Layout';
import OfferFilter from './components/OfferFilter';


function App() {
  return (
    <Router>
      <Navbar/>      
    <Layout>
        <Routes>
          <Route exact path="/login" element={<LoginForm/>} />
          <Route exact path="/offer" element={<OfferFilter/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
