import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar';
import LoginForm from './components/LoginForm';
import Layout from './layout/Layout';
import OfferFilter from './components/OfferFilter';
import Quotes from './components/Quotes';


function App() {
  return (
    <Router>
      <Navbar/>      
      <Quotes/>
    <Layout>
        <Routes>
          <Route exact path="/" element={<LoginForm/>} />
          <Route exact path="/offer" element={<OfferFilter/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
