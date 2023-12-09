import { Minus, Plus } from "phosphor-react";
import { useEffect, useState } from "react";

interface Props {
  stock: number;
  initial: number;
  onQuantityChange: (newQuantity: number) => void;
  onAddToCart: () => void;
}

function ItemCount({ stock, onQuantityChange, initial, onAddToCart }: Props) {
  const [items, setItems] = useState(1);

  useEffect(() => {
    if (initial < stock) {
      setItems(initial);
    }
  }, [initial, stock]);

  const handleMinusClick = () => {
    items > 1 && setItems((prev) => prev - 1);
    onQuantityChange(items - 1);
  };

  const handlePlusClick = () => {
    items < stock && setItems((prev) => prev + 1);
    onQuantityChange(items + 1);
  };

  const disableBtn = items === stock || stock === 0;
  const btnClass = disableBtn
    ? "bg-gray-500  text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-60 "
    : "bg-blue-500  text-white px-4 py-2 rounded-lg ";

  const handleClick = () => {
    onAddToCart();
  };

  return (
    <div>
      {stock ? (
        <>
          <div className="flex items-center gap-2 mb-4   ">
            <button
              onClick={handleMinusClick}
              className="text-blue-500 text-2xl"
            >
              <Minus />
            </button>
            <span>{items}</span>
            <button
              onClick={handlePlusClick}
              className="text-blue-500 text-2xl"
            >
              <Plus />
            </button>
          </div>

          <button
            disabled={disableBtn}
            className={btnClass}
            onClick={handleClick}
          >
            Add {items} to cart
          </button>
        </>
      ) : (
        <button disabled={disableBtn} className={btnClass}>
          Apologies, currently out of stock! 😿
        </button>
      )}
    </div>
  );
}

export default ItemCount;
