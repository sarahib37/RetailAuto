import React, { useState, useEffect } from 'react';
import { addToWishlist, removeFromWishlist, getWishlist } from './wishlistFunctions'; // Import functions

function Wishlist({ userId }) {
  const [wishlist, setWishlist] = useState([]);
  
  // Fetch wishlist when the component loads
  useEffect(() => {
    const fetchWishlist = async () => {
      const items = await getWishlist(userId); // Fetch the wishlist for the current user
      setWishlist(items);
    };
    
    fetchWishlist();
  }, [userId]); // Fetch wishlist when the userId changes

  const handleAddToWishlist = async (itemId) => {
    await addToWishlist(userId, itemId); // Add an item to the wishlist
    setWishlist((prevWishlist) => [...prevWishlist, itemId]); // Update local state
  };

  const handleRemoveFromWishlist = async (itemId) => {
    await removeFromWishlist(userId, itemId); // Remove an item from the wishlist
    setWishlist((prevWishlist) => prevWishlist.filter(item => item !== itemId)); // Update local state
  };

  return (
    <div>
      <h1>Your Wishlist</h1>
      <ul>
        {wishlist.map(item => (
          <li key={item}>
            {item} 
            <button onClick={() => handleRemoveFromWishlist(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToWishlist('newCarID')}>Add Car to Wishlist</button>
    </div>
  );
}

export default Wishlist;
