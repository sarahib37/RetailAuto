import React, { useState, useEffect } from 'react';
import { db } from '../firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { removeFromWishlist } from '../wishlistFunctions.js';

const fontFace = css`
  @font-face {
    font-family: 'CustomFont';
    src: url('/fonts/Sakana.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const PageContainer = styled.div`
  padding: 1em;
  margin-top: 6em;
`;

const WishlistHeading = styled.h2`
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const WishlistGrid = styled.div`
  display: flex;
  flex-direction: column; /* Stack items on mobile */
  gap: 1em;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row; /* Grid layout on larger screens */
    gap: 1.5em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Stack image and details on smaller screens */
  gap: 1em;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  background-color: #111;
  box-shadow: -2px -4px 5px rgb(73, 73, 235);

  @media (min-width: 768px) {
    flex-direction: row; /* Horizontal layout on larger screens */
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%; /* Full width for mobile */
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;

  @media (min-width: 768px) {
    width: 30%; /* Limit width for larger screens */
    max-width: 30%;
  }
`;

const Details = styled.div`
  flex-grow: 1;
  color: #fff;

  @media (min-width: 768px) {
    padding-left: 1em;
  }
`;

const Title = styled.h2`
  ${fontFace};
  font-family: 'SakanaFont', sans-serif;
  font-size: 1.2em;
  margin: 0;
  color: #fff;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`;

const Amount = styled.p`
  margin: 0.5em 0;
  font-weight: bold;
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;

const Color = styled.p`
  margin: 0;
  font-size: 0.9em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #d9534f;
  cursor: pointer;
  font-size: 1.5em;
  align-self: flex-end;

  @media (min-width: 768px) {
    align-self: center;
    margin-left: auto;
  }
`;

function Wishpage({ userId }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  async function getWishlist(userId) {
    const userRef = doc(db, 'users', userId);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        return docSnap.data().wishlist;
      } else {
        console.log('No such document!');
        return [];
      }
    } catch (e) {
      console.error('Error getting user document:', e);
      return [];
    }
  }

  useEffect(() => {
    if (!userId) {
      setWishlistItems([]);
      return;
    }

    async function fetchWishlist() {
      const items = await getWishlist(userId);
      setWishlistItems(items);
    }
    fetchWishlist();
  }, [userId]);

  async function handleRemoveItem(itemId) {
    try {
      await removeFromWishlist(userId, itemId);
      setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      console.log(`Item with id: ${itemId} removed successfully.`);
    } catch (error) {
      console.error(`Failed to remove item with id: ${itemId}`, error);
    }
  }

  return (
    <PageContainer>
      <WishlistHeading>Your Wishlist</WishlistHeading>
      <WishlistGrid>
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <Container key={item.id}>
              <Image src={item.image} />
              <Details>
                <Title>
                  {item.make} {item.model}
                </Title>
                <Amount>Amount: {item.amount}</Amount>
                <Color>Color: {item.color}</Color>
              </Details>
              <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                <FontAwesomeIcon icon={faMinus} />
              </RemoveButton>
            </Container>
          ))
        ) : (
          <p style={{ color: '#fff', textAlign: 'center' }}>Your wishlist is empty.</p>
        )}
      </WishlistGrid>
    </PageContainer>
  );
}

export default Wishpage;
