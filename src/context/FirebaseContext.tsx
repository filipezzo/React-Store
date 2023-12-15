import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyASX_8I2uyHWzcFPuOArceeZuxp90aD7Ac",
  authDomain: "react-store-4b5c5.firebaseapp.com",
  projectId: "react-store-4b5c5",
  storageBucket: "react-store-4b5c5.appspot.com",
  messagingSenderId: "1033442455321",
  appId: "1:1033442455321:web:6a1d07bcd3e77278cc5f88",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const FirebaseContext = createContext([]);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "items"));
      const itemsArray = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsArray);
    };

    fetchData();
  }, []);

  return (
    <FirebaseContext.Provider value={{ items }}>
      {children}
    </FirebaseContext.Provider>
  );
};
