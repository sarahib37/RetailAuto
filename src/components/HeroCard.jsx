import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { addToWishlist, removeFromWishlist } from '../wishlistFunctions.js';

const Card = styled.div`
  border: 1px solid #eeeeee;
  box-shadow: 2px 1px 5px 5px #111;
  background: ${({ isWishlisted }) =>
    isWishlisted ? 'rgb(53, 53, 215)' : 'rgb(73, 73, 235)'};
  gap: 1.5em;
  min-width: 18em;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: background 0.3s;

  &:hover {
    background: rgb(53, 53, 215);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Description = styled.div`
  color: #111;
  padding: .5em;
  font-weight: bold;
  text-shadow: 2px solid white;
`;

const Price = styled.span`
  display: block;
  font-size: 3em;
  font-weight: normal;
  color: #eeeeee;
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #111;
  border-radius: 50%;
  padding: 5px;
  color: ${({ isWishlisted }) => (isWishlisted ? '#0056b3' : '#fff')};
  font-size: 1.5em;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;

function HeroCard({ list, userId, initialIsWishlisted }) {
  const [isWishlisted, setIsWishlisted] = useState(initialIsWishlisted); // Local state for wishlist status

  // Load wishlist state from localStorage on component mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      const wishlist = JSON.parse(storedWishlist);
      setIsWishlisted(!!wishlist[list.id]); // Check if the current car is in the wishlist
    } else {
      setIsWishlisted(false);
    }
  }, [list.id]);

  function handleAddToWishlist() {
    if (userId) {
      if (!isWishlisted) {
        // Add to wishlist
        addToWishlist(userId, list);
        setIsWishlisted(true); // Update local state immediately

        // Persist wishlist to localStorage
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
        wishlist[list.id] = list;
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      } else {
        // Remove from wishlist if already wishlisted
        removeFromWishlist(userId, list.id);
        setIsWishlisted(false); // Update local state immediately

        // Remove from localStorage
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
        delete wishlist[list.id];
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      }
    } else {
      console.log("User not authenticated");
    }
  }

  return (
    <Card isWishlisted={isWishlisted}>
      {userId > 0 && (
        <HeartIcon onClick={handleAddToWishlist} isWishlisted={isWishlisted}>
          <FontAwesomeIcon icon={faHeart} />
        </HeartIcon>
      )}

      <Image
        src={list.image || 'default-image-url'}
        alt={`${list.make || 'Unknown Make'} ${list.model || 'Unknown Model'}`}
      />
      <Description>
        <p>
          Price: <Price>{list.amount || 'N/A'}</Price>
        </p>
        <p>Dealer: {list.dealer || 'Unknown Dealer'}</p>
        <p>Color: {list.color || 'N/A'}</p>
        <p>Make: {list.make || 'N/A'}</p>
        <p>Model: {list.model || 'N/A'}</p>
      </Description>
    </Card>
  );
}

export default HeroCard;
