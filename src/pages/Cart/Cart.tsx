import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "../../context/Context";
import Button from "../../components/Button/Button";

function Cart() {
  const { removeFromCart, cart, setCart, removeAll } = useCart();
  const handleClearCart = () => {
    removeAll();
  };
  const sumTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [setCart]);
  return (
    <>
      {cart.length > 0 ? (
        <>
          <ul className="container  mx-auto mt-40 mb-14  flex gap-4  flex-col">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} onRemoving={removeFromCart} />
            ))}
          </ul>
          <div className="mb-4 flex justify-between">
            <strong>
              Total:{" "}
              {sumTotal().toLocaleString("en", {
                style: "currency",
                currency: "usd",
              })}
            </strong>
            <Button onClick={handleClearCart}>Clear Cart</Button>
          </div>
        </>
      ) : (
        <div className="container  mx-auto mt-40 h-[60vh] flex items-center justify-center">
          Your cart is Empty 😐
        </div>
      )}
    </>
  );
}

export default Cart;
