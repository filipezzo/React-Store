import { createContext, useContext, useState } from "react";
import { IItem } from "../interface/interface";

const cartContext = createContext({} as IItem);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<IItem[]>([]);

  const isItemInCart = (cart, newItem) => {
    return cart.some((item) => item.title === newItem.title);
  };
  const addToCart = (item: IItem) => {
    if (!isItemInCart(cart, item)) {
      const newCart = [...cart, item];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const removeFromCart = (item: IItem) => {
    const filteredCart = cart.filter((c) => c.id !== item.id);
    setCart(filteredCart);
  };
  const removeAll = () => {
    setCart([]);
  };

  return (
    <cartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, removeAll }}
    >
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartProvider, useCart };
