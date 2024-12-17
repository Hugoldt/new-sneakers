// Navbar Component (src/components/Navbar.js)
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">SneakR</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/wishlist" className="hover:underline">Wishlist</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
