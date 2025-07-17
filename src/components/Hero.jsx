import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroCard from './HeroCard';
import { getWishlist } from '../wishlistFunctions';

const HeroCtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

const HeroMain = styled.div`
  display: flex;
  gap: 1em;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  white-space: nowrap;
`;

const HeroTitle = styled.h2`
  color: #eeeeee;
  font-size: 2em;
  text-align: center;
  padding-bottom: 1em;
`;

function Hero({ carListing, userId }) {
  const [wishlist, setWishlist] = useState([]);
  console.log(carListing)

  useEffect(() => {
    if (!userId) return;

    const fetchWishlist = async () => {
      console.log("Fetching wishlist for userId:", userId);
      try {
        const fetchedWishlist = await getWishlist(userId);
        console.log("Fetched wishlist:", fetchedWishlist);
        setWishlist(Array.isArray(fetchedWishlist) ? fetchedWishlist : []);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setWishlist([]);
      }
    };

    fetchWishlist();
  }, [userId]);

  function isInWishlist(list) {
    return wishlist.some((wishlistItem) => {
      console.log(wishlistItem)
      console.log(list)
      return wishlistItem.id === list.id;
    });
  }

  return (
    <HeroCtn>
      <HeroTitle>Lease a brand new car</HeroTitle>
      <HeroMain>
        {carListing.map((list, index) => {
          console.log(list)
          const isWishlisted = isInWishlist(list);
          console.log(isWishlisted)

          return (
            <HeroCard
              key={index}
              list={list}
              userId={userId}
              isWishlisted={isWishlisted}
            />
          );
        })}
      </HeroMain>
    </HeroCtn>
  );
}

export default Hero;
