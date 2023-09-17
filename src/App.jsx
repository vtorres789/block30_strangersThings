import './App.css';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Register from './components/Register';
import Home from './components/Home';

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/Login" >Login</Link>
          <Link to="/Posts">Posts</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/Register">Register</Link>
        </div>
        <div id="main-section">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App