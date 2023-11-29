import './App.css';
import Header from '../src/components/Header'
import Footer from './components/Footer.js'
import Home from './view/Home'
import Login from './view/Login'
import Features from './view/Features'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/features" element={<Features/>} /> 
          <Route path="/login" element={<Login/>} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
