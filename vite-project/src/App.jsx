import react from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import Login from './components/ Login';
import PriceFilter from './components/PriceFilter';
import SearchBar from './components/SearchBar';
const App = () => {
  return (
    
    <Router>
      <Navbar />
      <PriceFilter/>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  )
}
export default App 


