import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg bg-black text-white">
      {/* Logo SneakR */}
      <div className="text-2xl font-bold">SneakR</div>

      {/* Liens centrés */}
      <div className="flex-1 flex justify-center space-x-8">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/wishlist" className="hover:text-gray-300">
          Wishlist
        </Link>
      </div>

      {/* Boutons conditionnels */}
      <div className="flex items-center space-x-4">
        {token ? (
          <>
            <span className="text-gray-300">{username}</span>
            <button
              onClick={handleLogout}
              className="hover:text-red-400 transition"
            >
              Se déconnecter
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="hover:text-gray-300">
              S'inscrire
            </Link>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
