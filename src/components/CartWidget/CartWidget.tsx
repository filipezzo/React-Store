import { ShoppingCart } from "phosphor-react";

function CartWidget() {
  return (
    <button className="ml-4 relative">
      <ShoppingCart size={24} />
      <span className="absolute  -right-2 top-0">0</span>
    </button>
  );
}

export default CartWidget;
