import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar';
import LoginForm from './components/LoginForm';
import Layout from './layout/Layout';
import OfferFilter from './components/OfferFilter';
import { useState } from 'react';
// import Test from './components/Test';


function App() {


  const [users, setUsers] = useState();

  const handleValidUser = (usersData) => {
    setUsers(usersData);
    
  }

// const [defaults,setDefaults] = useState({});
// let defaults;

  // const handleValidUser = (x) => {
  //   console.log("hiiii valid user")
  //   // setValidUser(user);
  //   // defaults = x;
  //   setDefaults(x)
  //   console.log(defaults)
  // }
  
  return (
    <Router>
      {/* {console.log(users)} */}
      <Navbar users={users} /> 
    <Layout>
        <Routes>
          <Route exact path="/login" element={<LoginForm handleValidUser={handleValidUser} />} />
          <Route exact path="/offers" element={<OfferFilter/>} />
          {/* <Route exact path="/test" element={<Test/>} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
