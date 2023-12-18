import './App.css';
import Header from '../src/components/Header'
import Footer from './components/Footer.js'
import Home from './view/Home'
import Login from './view/Login'
import SignUp from './view/SignUp' 
import RestaurantSignUp from './view/RestaurantSignUp.js'
import RestaurantLogin from './view/RestaurantLogin.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CartProvider } from './components/ContextReducer';
import Cart from './view/Cart.js';
import MyOrder from './view/MyOrder.js';
import AddItem from './view/AddItem.js';

function App() {
  return (
    <CartProvider>
      <Router>
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="/" exact element={<Home/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/signup" element={<SignUp/>} /> 
          <Route path="/cart" element={<Cart/>} /> 
          <Route path="/myOrder" element={<MyOrder/>} /> 
          <Route path="/restaurantSignup" element={<RestaurantSignUp/>} /> 
          <Route path="/restaurantLogin" element={<RestaurantLogin/>} /> 
          <Route path="/addItem" element={<AddItem/>} /> 
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
    </CartProvider>
    
  );
}

export default App;
