import React, { useEffect, useState } from "react";

function Home() {
  const [produits, setProduits] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [minPrice, setMinPrice] = useState(""); 
  const [maxPrice, setMaxPrice] = useState(""); 
  const [wishlist, setWishlist] = useState([]); 
  const API_URL = "http://localhost:1337/api/produits?populate=*";

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer 6d96c2d17935d7a06027cba4988ea11c00de679c1eb5c8b98d1eff07ed7f5bbc2b2c0a82d8513db6c7b23b241e40ee84e1113c8ce6b0c3ba123d94cb71b73c4f3df5c47f4f589d24eac8e5c06102d907c3384ced8c1bb890aac00db3972f8956aa509e23293a233e6dabd1a609f0ef2aa69fdc35030cb208a12234f4349e1123`,
          },
        });

        if (!response.ok) throw new Error(`Erreur HTTP : ${response.status}`);

        const data = await response.json();
        setProduits(data?.data || []);
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    };

    fetchProduits();
  }, []);

 
  const produitsFiltres = produits.filter((produit) => {
    const { name, price } = produit;
    const matchSearch = name?.toLowerCase().includes(searchTerm.toLowerCase());
    const priceValue = parseFloat(price);
    const matchPrice =
      (!minPrice || priceValue >= parseFloat(minPrice)) &&
      (!maxPrice || priceValue <= parseFloat(maxPrice));

    return matchSearch && matchPrice;
  });

  
  const ajouterWishlist = (produit) => {
  const wishlistLocale = JSON.parse(localStorage.getItem("wishlist")) || [];
  
    
    if (!wishlistLocale.some((item) => item.id === produit.id)) {
      const nouvelleWishlist = [...wishlistLocale, produit];
      localStorage.setItem("wishlist", JSON.stringify(nouvelleWishlist)); 
      alert(`${produit.name} ajouté à votre wishlist ❤️`);
    } else {
      alert(`${produit.name} est déjà dans votre wishlist.`);
    }
  };
  
  return (
    <div className="p-4">
     <h2 className="text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-lg animate-pulse">
  Nos Produits
</h2>



<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 bg-gray-50 p-6 rounded-lg shadow-md">
  <input
    type="text"
    placeholder="Rechercher des sneakers..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full md:w-1/3 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="number"
    placeholder="Prix min"
    value={minPrice}
    onChange={(e) => setMinPrice(e.target.value)}
    className="w-full md:w-1/6 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="number"
    placeholder="Prix max"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
    className="w-full md:w-1/6 border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button className="w-full md:w-1/6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
    Appliquer
  </button>
</div>


      {/* Produits filtrés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produitsFiltres.length === 0 ? (
          <p>Aucun produit disponible.</p>
        ) : (
          produitsFiltres.map((produit) => {
            const { id, name, description, price, image } = produit;

            
            const descriptionText = Array.isArray(description)
              ? description.map((desc) => desc?.children?.[0]?.text || "").join(" ")
              : "Pas de description";

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
  <p className="text-gray-600 mb-2">{descriptionText}</p>
  <p className="text-lime-700 font-bold">Prix : {price} €</p>
  {/* Bouton Aimer */}
  <button
    onClick={() => ajouterWishlist(produit)}
    className="absolute bottom-2 right-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-200"
  >
    Ajouter à ma wishlist
  </button>
</div>

            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
