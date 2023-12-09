import { useEffect } from "react";
import CartItem from "./CartItem";
import { useCart } from "../../context/Context";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function Cart() {
  const { removeFromCart, cart, setCart, removeAll } = useCart();
  const handleClearCart = () => {
    removeAll();
    localStorage.removeItem("cart");
  };
  const sumTotal = () => {
    return cart.reduce(
      (acc, item) => acc + (item.quantity || 0) * item.price,
      0
    );
  };

  const sumQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "null");
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
          <h3>Quantity : {sumQuantity()}</h3>
          <div className="mb-4 flex justify-between">
            <strong>
              Total:
              {sumTotal().toLocaleString("en", {
                style: "currency",
                currency: "usd",
              })}
            </strong>
            <Button onClick={handleClearCart}>Clear Cart</Button>
          </div>
        </>
      ) : (
        <div className="container  mx-auto mt-40 h-[60vh] flex items-center justify-center flex-col gap-4">
          <strong>Your cart is Empty 😐</strong>
          <Link to="/product/8">
            <Button>See Products</Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
