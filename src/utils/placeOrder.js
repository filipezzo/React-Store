import { addDoc, collection, getFirestore } from "firebase/firestore";

export const placeOrder = async (buyer, cartItems, total) => {
  const db = getFirestore();
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      buyer,
      items: cartItems,
      total,
    });
    console.log(docRef.id);
  } catch (error) {
    console.error("erro no order");
  }
};
