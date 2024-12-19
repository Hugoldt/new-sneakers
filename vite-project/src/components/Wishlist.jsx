import React, { useEffect, useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const produitsWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(produitsWishlist);
  }, []);

  
  const supprimerProduit = (id) => {
    const nouvelleWishlist = wishlist.filter((produit) => produit.id !== id);
    setWishlist(nouvelleWishlist);
    localStorage.setItem("wishlist", JSON.stringify(nouvelleWishlist));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Votre Wishlist ❤️</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.length === 0 ? (
          <p>Votre wishlist est vide.</p>
        ) : (
          wishlist.map((produit) => {
            const { id, name, price, image } = produit;

            return (
              <div key={id} className="border rounded-lg shadow-md p-4 relative">
                {image && (
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover mb-2 rounded"
                  />
                )}
                <h3 className="font-bold text-lg mb-2">{name}</h3>
                <p className="text-lime-700 font-bold mb-2">Prix : {price} €</p>

                {/* Bouton Supprimer */}
                <button
  onClick={() => supprimerProduit(id)}
  className="absolute bottom-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 transition-transform duration-300"
>
  Supprimer
</button>


              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Wishlist;
