import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Products from "./components/Products";
import Profile from "./components/Profile";
import Login from './components/Login';

function PrivateRoute({ children }) {
  let location = useLocation();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Routes>
      </Router>
    </>
  );
}



export default App;
