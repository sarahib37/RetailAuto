import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db } from './firebase';

async function addToWishlist(userId, carId) {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    // Check if the user document exists
    if (!userDoc.exists()) {
      // If it doesn't exist, create it with an empty wishlist
      await setDoc(userDocRef, { wishlist: [carId] });
    } else {
      // If it exists, update the wishlist by adding a new carId
      await updateDoc(userDocRef, {
        wishlist: arrayUnion(carId),
      });
    }
    console.log("Item added to wishlist successfully!");
  } catch (error) {
    console.error("Error adding item to wishlist: ", error);
  }

}

async function removeFromWishlist(userId, itemId) {
  const userRef = doc(db, 'users', userId);
  try {
    // Update Firestore
    await updateDoc(userRef, {
      wishlist: arrayRemove(itemId),
    });

    // Fetch the updated wishlist
    const updatedDoc = await getDoc(userRef);
    return updatedDoc.data().wishlist || []; // Return the updated wishlist
  } catch (e) {
    console.error('Error removing item from wishlist: ', e);
    return null;
  }
}


async function getWishlist(userId) {
  const userRef = doc(db, 'users', userId); // Reference to the user document
  try {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data().wishlist; // Return the wishlist array
    } else {
      console.log('No such document!');
    }
  } catch (e) {
    console.error('Error getting user document:', e);
  }
}




export { addToWishlist, getWishlist, removeFromWishlist };